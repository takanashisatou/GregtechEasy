import contextlib
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

import ftbq


class QuestLanguageTests(unittest.TestCase):
    KEY = 'gte.test.quests.2BCDEF0123456789.title'

    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.repo = Path(self.temp.name)
        self.lang = self.repo / 'gte/overrides/config/openloader/resources/quests/assets/gte/lang'
        self.lang.mkdir(parents=True)
        chapter = self.repo / 'gte/overrides/config/ftbquests/quests/chapters/test.snbt'
        chapter.parent.mkdir(parents=True)
        chapter.write_text('''{
 id: "0123456789ABCDEF"
 quests: [{
  id: "2BCDEF0123456789"
  tasks: [{id: "1234567890ABCDEF", type: "checkmark"}]
  title: "{''' + self.KEY + '''}"
  x: 0d
  y: 0d
 }]
}''', encoding='utf-8')
        for locale, value in (('zh_cn', '虚数玻璃'), ('en_us', 'Imaginary Glass')):
            (self.lang / (locale + '.json')).write_text(json.dumps({self.KEY: value}), encoding='utf-8')

    def run_command(self, *argv):
        out = io.StringIO()
        with contextlib.redirect_stdout(out):
            code = ftbq.main(['--repo', str(self.repo), *argv])
        return code, out.getvalue()

    def test_search_resolves_uppercase_quest_ids(self):
        code, text = self.run_command('list', '--search', '虚数')
        self.assertEqual(code, 0)
        self.assertIn('虚数玻璃', text)

    def test_generated_id_is_a_nonzero_positive_java_long(self):
        book = ftbq.QuestBook(self.repo)
        with patch.object(ftbq.secrets, 'randbits', side_effect=[0, (1 << 63) - 1]):
            self.assertEqual(book.fresh_id(), '7FFFFFFFFFFFFFFF')

    def test_lint_rejects_ids_ftb_cannot_parse(self):
        chapter = self.repo / 'gte/overrides/config/ftbquests/quests/chapters/test.snbt'
        text = chapter.read_text()
        chapter.write_text(text.replace('id: "2BCDEF0123456789"', 'id: "ABCDEF0123456789"'), encoding='utf-8')
        code, output = self.run_command('lint', '--json')
        self.assertEqual(code, 2)
        self.assertTrue(any('ABCDEF0123456789' in error for error in json.loads(output)['errors']))

    def test_lint_detects_missing_uppercase_translation_key(self):
        (self.lang / 'zh_cn.json').write_text('{}', encoding='utf-8')
        code, text = self.run_command('lint', '--json')
        self.assertEqual(code, 2)
        self.assertTrue(any(self.KEY in error for error in json.loads(text)['errors']))

    def test_lint_catches_literal_percentage_format_errors(self):
        path = self.lang / 'zh_cn.json'
        path.write_text(json.dumps({self.KEY: '产出提高 50%'}), encoding='utf-8')
        code, output = self.run_command('lint', '--json')
        self.assertTrue(any('百分号' in warning for warning in json.loads(output)['warnings']))
        path.write_text(json.dumps({self.KEY: '产出提高 50%%'}), encoding='utf-8')
        self.assertFalse(any('百分号' in warning for warning in json.loads(self.run_command('lint', '--json')[1])['warnings']))

    def test_runtime_check_detects_stale_files_then_accepts_synced_files(self):
        runtime_lang = self.repo / 'run/client/config/openloader/resources/quests/assets/gte/lang'
        runtime_lang.mkdir(parents=True)
        for locale in ('zh_cn', 'en_us'):
            (runtime_lang / (locale + '.json')).write_text('{}', encoding='utf-8')
        code, text = self.run_command('runtime-check')
        self.assertEqual(code, 2)
        self.assertIn(self.KEY, text)
        for path in self.lang.glob('*.json'):
            (runtime_lang / path.name).write_bytes(path.read_bytes())
        self.assertEqual(self.run_command('runtime-check')[0], 0)
        (runtime_lang / 'zh_cn.json').write_text(json.dumps({self.KEY: 'old text'}), encoding='utf-8')
        self.assertEqual(self.run_command('runtime-check')[0], 2)


if __name__ == '__main__':
    unittest.main()
