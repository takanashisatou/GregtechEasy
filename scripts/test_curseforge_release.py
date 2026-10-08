import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest import mock
import zipfile

import build_curseforge_pack as pack
import curseforge_release as release


class CurseForgeReleaseTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.overrides = self.root / "overrides"
        self.mods = self.overrides / "mods"
        self.mods.mkdir(parents=True)
        for name in ("gtecore-1.jar", "gtm-reborn-1.jar", "gt---1.jar", "library.jar"):
            with zipfile.ZipFile(self.mods / name, "w") as z:
                z.writestr("META-INF/mods.toml", name)
        self.catalog = {
            "files": [{"name": "Library", "slug": "library", "projectID": 10, "fileID": 20,
                       "fileName": "library.jar", "sha256": release.digest(self.mods / "library.jar")}],
            "submodules": {key: {"name": key, "slug": key, "projectID": i + 100, "fileID": 0}
                           for i, key in enumerate(release.MODULES)},
        }
        self.record = {"schema": 1, "version": "3.1.0", "modpackProject": 999,
                       "overridesTree": "tree", "modules": {}}
        for key, path in release.module_jars(self.mods).items():
            self.record["modules"][key] = dict(self.catalog["submodules"][key], fileID=300,
                                                fileName=path.name, sha256=release.digest(path))
        self.env = mock.patch.dict("os.environ", {}, clear=True)
        self.env.start()
        self.git = mock.patch.object(release, "git_value", return_value="tree")
        self.git.start()

    def tearDown(self):
        self.git.stop()
        self.env.stop()
        self.temp.cleanup()

    def test_complete_catalog_covers_every_shipped_jar(self):
        self.assertEqual(set(release.validate_catalog(self.catalog, self.mods)), set(release.MODULES))

    def test_unmapped_dependency_cannot_silently_disappear(self):
        (self.mods / "unmapped.jar").write_bytes(b"new mod")
        with self.assertRaisesRegex(ValueError, "Unmapped jars"):
            release.validate_catalog(self.catalog, self.mods)

    def test_changed_bytes_require_new_manifest_pin(self):
        (self.mods / "library.jar").write_bytes(b"updated dependency")
        with self.assertRaisesRegex(ValueError, "differs from the shipped jar"):
            release.validate_catalog(self.catalog, self.mods)

    def test_duplicate_project_or_module_jar_is_rejected(self):
        self.catalog["files"][0]["projectID"] = 100
        with self.assertRaisesRegex(ValueError, "Duplicate CurseForge project"):
            release.validate_catalog(self.catalog, self.mods)
        (self.mods / "gtecore-2.jar").write_bytes(b"ambiguous")
        with self.assertRaisesRegex(ValueError, "expected one production jar"):
            release.module_jars(self.mods)

    def test_unsafe_pin_filename_is_rejected(self):
        self.catalog["files"][0]["fileName"] = "../library.jar"
        with self.assertRaisesRegex(ValueError, "filename"):
            release.validate_catalog(self.catalog, self.mods)

    def test_partial_upload_cannot_build_pack(self):
        self.record["modules"]["gtecore"]["fileID"] = 0
        with self.assertRaisesRegex(ValueError, "Invalid CurseForge ID"):
            release.validate_release(self.record, self.catalog, self.mods)

    def test_changed_pack_or_uploaded_module_cannot_resume(self):
        self.record["overridesTree"] = "different tree"
        with self.assertRaisesRegex(ValueError, "overrides changed"):
            release.validate_release(self.record, self.catalog, self.mods)
        self.record["overridesTree"] = "tree"
        self.record["modules"]["gtecore"]["sha256"] = "0" * 64
        with self.assertRaisesRegex(ValueError, "Uploaded module differs"):
            release.validate_release(self.record, self.catalog, self.mods)

    def test_modpack_id_cannot_be_a_module_project(self):
        self.record["modpackProject"] = 100
        with self.assertRaisesRegex(ValueError, "Modpack project ID"):
            release.validate_release(self.record, self.catalog, self.mods)

    def test_public_download_checks_bytes_and_sends_no_author_token(self):
        row = self.catalog["files"][0]
        with mock.patch.object(release.urllib.request, "urlopen", return_value=io.BytesIO(b"wrong file")) as request:
            with self.assertRaisesRegex(ValueError, "Public file differs"):
                release.public_download(row)
            self.assertEqual(request.call_args.args,
                             ("https://www.curseforge.com/api/v1/mods/10/files/20/download",))
        with mock.patch.object(release.urllib.request, "urlopen",
                               return_value=io.BytesIO((self.mods / "library.jar").read_bytes())):
            self.assertEqual(release.public_download(row), "library.jar")

    def test_token_preflight_only_reads_game_versions(self):
        with mock.patch.dict("os.environ", {"CF_UPLOAD_TOKEN": "test-token"}), \
                mock.patch.object(release.urllib.request, "urlopen",
                                  return_value=io.BytesIO(b'[{"name":"1.20.1"}]')) as request:
            release.check_token()
            sent = request.call_args.args[0]
            self.assertEqual(sent.get_method(), "GET")
            self.assertEqual(sent.full_url, "https://minecraft.curseforge.com/api/game/versions")
            self.assertEqual(sent.get_header("X-api-token"), "test-token")

    def test_archive_contains_exact_module_ids_and_zero_jars(self):
        catalog_path = self.root / "catalog.json"
        catalog_path.write_text(json.dumps(self.catalog), encoding="utf-8")
        (self.overrides / "config").mkdir()
        (self.overrides / "config" / "hidden.JAR").write_bytes(b"must not be packed")
        (self.overrides / "config" / "quests.snbt").write_text("quest", encoding="utf-8")
        with mock.patch.object(pack, "OVERRIDES", self.overrides), \
                mock.patch.object(pack, "MANIFEST_BASE", catalog_path), \
                mock.patch.object(pack, "BUILD_DIR", self.root / "artifacts"), \
                mock.patch.object(pack, "read_pack_versions", return_value=("1.20.1", "47.4.1")):
            path = pack.build_curseforge_pack("3.1.0", {}, self.record)
        with zipfile.ZipFile(path) as z:
            manifest = json.loads(z.read("manifest.json"))
            self.assertEqual({r["projectID"]: r["fileID"] for r in manifest["files"]},
                             {10: 20, 100: 300, 101: 300, 102: 300})
            self.assertFalse(any(n.lower().endswith(".jar") for n in z.namelist()))
            self.assertIn("overrides/config/quests.snbt", z.namelist())

    def test_zip_validator_rejects_jar_outside_mods_directory(self):
        path = self.root / "bad.zip"
        with zipfile.ZipFile(path, "w") as z:
            z.writestr("manifest.json", json.dumps({"files": [{"projectID": 1, "fileID": 2}]}))
            z.writestr("modlist.html", "list")
            z.writestr("overrides/resourcepacks/hidden.JAR", "bad")
        with self.assertRaises(SystemExit):
            pack.validate_curseforge_zip(path)
        self.assertFalse(path.exists())


if __name__ == "__main__":
    unittest.main()
