#!/usr/bin/env python3
"""
GTE Documentation Cleanliness & Symmetry Audit
==============================================
1. Whitelist Cleanliness Lint: Ensures docs/ only contains approved document formats.
   Forbidden: .jar, .class, .exe, .dll, .zip, .bbmodel, .log, etc.
2. Multilingual Symmetry Lint: Ensures 100% 1:1 chapter mirroring between zh/ and en/.
"""

import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent.resolve()

ALLOWED_EXTENSIONS = {
    ".md", ".markdown", ".tex", ".txt",
    ".pdf", ".docx", ".xlsx", ".csv",
    ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".ico",
    ".yml", ".yaml", ".json", ".html"
}

FORBIDDEN_EXTENSIONS = {
    ".jar", ".class", ".exe", ".dll", ".zip", ".tar", ".gz",
    ".bbmodel", ".log", ".tmp", ".bak", ".swp"
}


def audit_cleanliness(docs_dir: Path) -> list:
    """Verifies that all files inside docs directory strictly belong to the allowed whitelist."""
    violations = []
    if not docs_dir.exists():
        return [f"Documentation directory not found: {docs_dir}"]

    for p in docs_dir.rglob("*"):
        if p.is_file():
            ext = p.suffix.lower()
            if ext in FORBIDDEN_EXTENSIONS or (ext and ext not in ALLOWED_EXTENSIONS):
                violations.append(
                    f"FORBIDDEN FILE DETECTED: {p.relative_to(ROOT)}\n"
                    f"  Extension '{ext}' is forbidden in docs repository.\n"
                    f"  Please remove non-document artifacts (.jar, .exe, .bbmodel, etc.) from documentation."
                )
    return violations


def audit_symmetry(zh_dir: Path, target_dir: Path, target_lang: str) -> list:
    """Verifies that zh/ and target_dir have 100% mirrored structure."""
    violations = []
    if not zh_dir.exists() or not target_dir.exists():
        return [f"Language directory missing: {target_dir}"]

    zh_files = {p.relative_to(zh_dir).as_posix() for p in zh_dir.rglob("*.md")}
    target_files = {p.relative_to(target_dir).as_posix() for p in target_dir.rglob("*.md")}

    missing_in_target = zh_files - target_files
    missing_in_zh = target_files - zh_files

    for f in sorted(missing_in_target):
        violations.append(f"ASYMMETRY: '{f}' exists in zh/ but missing in {target_lang}/")
    for f in sorted(missing_in_zh):
        violations.append(f"ASYMMETRY: '{f}' exists in {target_lang}/ but missing in zh/")

    return violations


def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    print("=== GTE Documentation Cleanliness & Symmetry Audit ===")

    all_violations = []

    # Check both root docs and modules/docs/docs
    check_dirs = [ROOT / "docs", ROOT / "modules" / "docs" / "docs"]
    target_langs = ["en", "zh-TW", "ja", "ko", "ru", "de", "fr", "es", "pt"]

    for d in check_dirs:
        if d.exists():
            clean_errs = audit_cleanliness(d)
            all_violations.extend(clean_errs)

            zh_d = d / "zh"
            if zh_d.exists():
                for lang in target_langs:
                    lang_d = d / lang
                    if lang_d.exists():
                        sym_errs = audit_symmetry(zh_d, lang_d, lang)
                        all_violations.extend(sym_errs)

    if all_violations:
        print(f"\n[FAILED] Found {len(all_violations)} documentation audit violation(s):\n")
        for v in all_violations:
            print(f"  [VIOLATION] {v}")
        print("\nDocs deploy gate blocked.")
        sys.exit(1)
    else:
        print("[PASSED] All documentation files adhere to whitelist and zh/en symmetry is 100% aligned.")
        sys.exit(0)


if __name__ == "__main__":
    main()
