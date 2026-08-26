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
        zh_texts[rel] = normalize(f.read_text(encoding="utf-8"))

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

            target_text = normalize(target_file.read_text(encoding="utf-8"))

            if target_text == zh_text:
                untranslated += 1
                untranslated_paths.append(f"{lang}/{rel}")
            else:
                translated += 1

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
