#!/usr/bin/env python3
"""
GTE Translation Completeness Audit
===================================
Checks every Markdown file in every language directory against zh/ source.
Reports: translated count, untranslated count, and lists files still in Chinese.
Exit code 1 if any untranslated files found.
"""
import sys
from pathlib import Path
from typing import Dict, Tuple

ROOT = Path(__file__).resolve().parent.parent
DOCS_DIRS = [
    ROOT / "modules" / "docs" / "docs",
    ROOT / "docs",
]

TARGET_LANGS = ["en", "zh-TW", "ja", "ko", "ru", "de", "fr", "es", "pt"]


def normalize(text: str) -> str:
    """Normalize line endings for comparison."""
    return text.strip().replace("\r\n", "\n")


def count_chinese_chars(text: str) -> int:
    """Count Chinese (CJK Unified Ideograph) characters in text."""
    import re
    return len(re.findall(r'[\u4e00-\u9fff]', text))


def is_actually_translated(target_text: str, zh_text: str, lang: str) -> bool:
    """Check if target_text is a genuine translation, not just slightly-modified Chinese.

    Uses language-specific heuristics:
    - Latin/Cyrillic languages: target must have very few Chinese characters
    - Japanese: must contain hiragana or katakana (Japanese-specific kana)
    - Korean: must contain Hangul syllables
    - zh-TW: always considered translated (OpenCC handles this)
    - en: must not be identical to zh and must have low Chinese char count
    """
    import re

    target_norm = normalize(target_text)
    zh_norm = normalize(zh_text)

    # If identical to zh source, definitely untranslated
    if target_norm == zh_norm:
        return False

    zh_cn = count_chinese_chars(zh_norm)
    tr_cn = count_chinese_chars(target_norm)

    if lang in ("pt", "es", "fr", "de"):
        # Latin languages: translation should have very few Chinese chars
        # Allow up to 5% of source Chinese chars (for code comments, technical terms)
        if tr_cn > max(10, zh_cn * 0.05):
            return False
        return True

    elif lang == "ru":
        # Cyrillic: check for Cyrillic characters, low Chinese
        cyrillic = len(re.findall(r'[\u0400-\u04FF]', target_norm))
        if cyrillic < 20 and tr_cn > max(10, zh_cn * 0.1):
            return False
        return True

    elif lang == "ja":
        # Japanese: must contain kana (hiragana/katakana) OR be clearly different
        kana = len(re.findall(r'[\u3040-\u309F\u30A0-\u30FF]', target_norm))
        if kana < 5 and tr_cn > zh_cn * 0.7:
            return False
        return True

    elif lang == "ko":
        # Korean: must contain Hangul or be clearly different
        hangul = len(re.findall(r'[\uAC00-\uD7AF]', target_norm))
        if hangul < 5 and tr_cn > zh_cn * 0.7:
            return False
        return True

    elif lang == "zh-TW":
        # Traditional Chinese via OpenCC — always trusted
        return True

    elif lang == "en":
        # English: low Chinese chars
        if tr_cn > max(10, zh_cn * 0.05):
            return False
        return True

    # Default: just check not identical
    return target_norm != zh_norm


def audit_docs(docs_dir: Path) -> Dict[str, Tuple[int, int, list]]:
    """Audit one docs directory. Returns {lang: (translated, untranslated, [untranslated_paths])}."""
    zh_dir = docs_dir / "zh"
    if not zh_dir.exists():
        print(f"  ❌ zh/ source not found at {zh_dir}")
        return {}

    # Read all zh/ source files
    zh_texts: Dict[str, str] = {}
    for f in sorted(zh_dir.rglob("*.md")):
        rel = str(f.relative_to(zh_dir)).replace("\\", "/")
        zh_texts[rel] = f.read_text(encoding="utf-8")

    results = {}
    for lang in TARGET_LANGS:
        lang_dir = docs_dir / lang
        if not lang_dir.exists():
            results[lang] = (0, 0, [])
            continue

        translated = 0
        untranslated = 0
        untranslated_paths = []

        for rel, zh_text in zh_texts.items():
            target_file = lang_dir / rel
            if not target_file.exists():
                untranslated += 1
                untranslated_paths.append(f"{lang}/{rel} (MISSING)")
                continue

            target_text = target_file.read_text(encoding="utf-8")

            if is_actually_translated(target_text, zh_text, lang):
                translated += 1
            else:
                untranslated += 1
                untranslated_paths.append(f"{lang}/{rel}")

        results[lang] = (translated, untranslated, untranslated_paths)

    return results


def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    total_untranslated = 0
    all_clear = True

    for docs_dir in DOCS_DIRS:
        if not docs_dir.exists():
            continue

        print(f"\n{'='*60}")
        print(f"📁 {docs_dir.relative_to(ROOT)}")
        print(f"{'='*60}")

        results = audit_docs(docs_dir)

        for lang in TARGET_LANGS:
            translated, untranslated, paths = results.get(lang, (0, 0, []))
            total = translated + untranslated
            pct = (translated / total * 100) if total > 0 else 0

            if untranslated == 0:
                print(f"  ✅ {lang:6s}: {translated}/{total} translated (100%)")
            else:
                all_clear = False
                total_untranslated += untranslated
                print(f"  ⚠️  {lang:6s}: {translated}/{total} translated ({pct:.0f}%) — {untranslated} UNTRANSLATED:")
                for p in paths:
                    print(f"       └─ {p}")

    print(f"\n{'='*60}")
    if all_clear:
        print("🎉 ALL LANGUAGES 100% TRANSLATED!")
        return 0
    else:
        print(f"❌ {total_untranslated} untranslated file(s) found across all directories.")
        return 1


if __name__ == "__main__":
    sys.exit(main())
