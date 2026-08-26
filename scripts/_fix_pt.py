#!/usr/bin/env python3
"""Fix the 2 remaining Portuguese untranslated files using deepseek-v4-pro."""
import os, sys, re, requests
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "modules" / "docs" / "docs"

# Load API key
env = {}
for line in (ROOT / ".env").read_text(encoding="utf-8-sig").splitlines():
    line = line.strip()
    if line and not line.startswith("#") and "=" in line:
        k, v = line.split("=", 1)
        env[k.strip()] = v.strip().strip('"').strip("'")

API_KEY = env["OPENCODE_API_KEY"]
BASE_URL = "https://opencode.ai/zen/v1"
MODEL = "deepseek-v4-pro"

FILES = [
    ("pt", "development/quick-start.md"),
    ("pt", "development/runtime-and-launchers.md"),
]


def call_llm(prompt, timeout=300):
    url = f"{BASE_URL}/chat/completions"
    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": "You are a professional technical translator. Translate to Portuguese."},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.2
    }
    headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}
    resp = requests.post(url, json=payload, headers=headers, timeout=timeout)
    if resp.status_code != 200:
        raise RuntimeError(f"API error {resp.status_code}: {resp.text[:300]}")
    return resp.json()["choices"][0]["message"]["content"]


def strip_wrapper(text):
    text = text.strip()
    for prefix in ["```markdown", "```md", "```"]:
        if text.startswith(prefix) and text.endswith("```"):
            return text[len(prefix):-3].strip()
    return text


def main():
    for lang, rel in FILES:
        src = DOCS / "zh" / rel
        dst = DOCS / lang / rel
        text = src.read_text(encoding="utf-8")
        print(f"Translating {lang}/{rel} ({len(text)} chars)...", end=" ", flush=True)

        try:
            prompt = (
                f"Translate the following Markdown documentation into Português (Portuguese).\n"
                f"Strict Rules:\n"
                f"1. Preserve ALL Markdown syntax: headers, tables, code blocks, links, formatting.\n"
                f"2. Translate EVERY piece of text: headings, paragraphs, table cells, callouts, code comments.\n"
                f"3. In Mermaid diagrams (```mermaid), translate node labels but keep syntax keywords (graph TD, -->).\n"
                f"4. Keep technical abbreviations: EU/t, UHV, AE2, GT--, KubeJS, Packwiz, JVM, JDK, IntelliJ, IDEA.\n"
                f"5. Output ONLY the translated Markdown — no extra text, no wrapping in code blocks.\n\n"
                f"Content to translate:\n\n{text}"
            )
            result = call_llm(prompt)
            result = strip_wrapper(result)

            # Verify: must not contain Chinese characters
            cn_chars = len(re.findall(r"[\u4e00-\u9fff]", result))
            if cn_chars > 20:
                raise RuntimeError(f"Translation has {cn_chars} Chinese chars — LLM returned garbage")

            dst.parent.mkdir(parents=True, exist_ok=True)
            dst.write_text(result, encoding="utf-8")
            print(f"OK ({len(result)} chars, {cn_chars} Chinese)")

        except Exception as e:
            print(f"FAILED: {e}")
            return 1

    print("\n✅ Both files translated successfully!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
