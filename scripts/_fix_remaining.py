#!/usr/bin/env python3
"""Targeted fix for the 10 remaining untranslated doc files."""
import os, sys, json, time, hashlib, requests
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "modules" / "docs" / "docs"

# Load API key from .env
env = {}
env_file = ROOT / ".env"
if env_file.exists():
    for line in env_file.read_text(encoding="utf-8-sig").splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            env[k.strip()] = v.strip().strip('"').strip("'")

API_KEY = env.get("OPENCODE_API_KEY", "")
BASE_URL = env.get("OPENCODE_BASE_URL", "https://opencode.ai/zen/v1")
MODEL = env.get("OPENCODE_MODEL", "deepseek-v4-flash")

if not API_KEY:
    print("ERROR: No OPENCODE_API_KEY found in .env")
    sys.exit(1)

# The 10 remaining untranslated files: (lang, rel_path)
REMAINING = [
    ("ru", "ci-cd-and-translation/ci-pipeline.md"),
    ("de", "ci-cd-and-translation/ci-pipeline.md"),
    ("fr", "ci-cd-and-translation/ci-pipeline.md"),
    ("fr", "gtecore/machines-and-multiblocks.md"),
    ("es", "art-and-ui/blockbench-workflow.md"),
    ("es", "gt-minus-minus/index.md"),
    ("es", "gtm-reborn/index.md"),
    ("pt", "ci-cd-and-translation/ci-pipeline.md"),
    ("pt", "development/runtime-and-launchers.md"),
    ("pt", "gtm-reborn/index.md"),
]

LANG_NAMES = {
    "ru": "Русский (Russian)",
    "de": "Deutsch (German)",
    "fr": "Français (French)",
    "es": "Español (Spanish)",
    "pt": "Português (Portuguese)",
}

def call_llm(prompt: str, timeout: int = 300) -> str:
    url = f"{BASE_URL}/chat/completions"
    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": "You are a professional technical and Minecraft mod documentation translator."},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.2
    }
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    for attempt in range(5):
        try:
            resp = requests.post(url, json=payload, headers=headers, timeout=timeout)
            if resp.status_code != 200:
                raise RuntimeError(f"API error {resp.status_code}: {resp.text[:300]}")
            data = resp.json()
            return data["choices"][0]["message"]["content"]
        except Exception as e:
            err = str(e)
            if any(c in err for c in ["401", "403"]):
                raise
            if attempt < 4:
                wait = 2 * (2 ** attempt)
                print(f"  Retry {attempt+1}/5 in {wait}s: {err[:100]}")
                time.sleep(wait)
            else:
                raise

def strip_wrapper(text: str) -> str:
    text = text.strip()
    for prefix in ["```markdown", "```md", "```"]:
        if text.startswith(prefix) and text.endswith("```"):
            return text[len(prefix):-3].strip()
    return text

def main():
    print(f"Using: {MODEL} @ {BASE_URL}")
    print(f"Files to translate: {len(REMAINING)}\n")

    success = 0
    fail = 0

    for lang, rel in REMAINING:
        src_path = DOCS / "zh" / rel
        dst_path = DOCS / lang / rel
        lang_name = LANG_NAMES.get(lang, lang)

        if not src_path.exists():
            print(f"SKIP {lang}/{rel}: source not found")
            fail += 1
            continue

        text = src_path.read_text(encoding="utf-8")
        print(f"[{lang}] {rel} ({len(text)} chars)...", end=" ", flush=True)

        try:
            prompt = (
                f"You are a professional technical and Minecraft mod documentation translator.\n"
                f"Translate the following Markdown documentation completely into {lang_name} ({lang}).\n"
                f"Strict Localization Rules:\n"
                f"1. Preserve ALL Markdown structural syntax, headers (#, ##), tables, bold, italics.\n"
                f"2. Translate all UI text, headings, badges, table column headers, and callout texts.\n"
                f"3. In Mermaid diagrams (```mermaid ... ```), translate all node text labels "
                f"(e.g. A[Label] --> B[Label]) into {lang_name}, while keeping flowchart syntax keywords "
                f"(graph TD, -->, subgraph, etc.) untouched.\n"
                f"4. Keep code blocks syntax intact, but translate code comments into {lang_name}.\n"
                f"5. In markdown links [Text](URL), translate 'Text' into {lang_name} but NEVER modify 'URL'.\n"
                f"6. Keep technical abbreviations and system names untouched "
                f"(EU/t, UHV, AE2, GT--, KubeJS, Packwiz, JVM, GitHub, CI/CD, Maven, CurseForge).\n"
                f"7. Output ONLY the translated Markdown content directly without conversational remarks "
                f"or wrapping in extra code blocks.\n\n"
                f"Content to translate:\n\n{text}"
            )

            translated = call_llm(prompt, timeout=300)
            translated = strip_wrapper(translated)

            # Sanity check
            src_norm = text.strip().replace("\r\n", "\n")
            t_norm = translated.strip().replace("\r\n", "\n")
            if len(t_norm) < max(50, len(src_norm) // 5):
                raise RuntimeError(f"Translation too short ({len(t_norm)} chars vs {len(src_norm)} source)")

            if t_norm == src_norm:
                raise RuntimeError("Translation identical to source")

            dst_path.parent.mkdir(parents=True, exist_ok=True)
            dst_path.write_text(translated, encoding="utf-8")
            print(f"OK ({len(translated)} chars)")
            success += 1

        except Exception as e:
            print(f"FAILED: {e}")
            fail += 1

    print(f"\n=== Done: {success} succeeded, {fail} failed ===")
    return 0 if fail == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
