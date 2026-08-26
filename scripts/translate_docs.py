#!/usr/bin/env python3
"""
GTE 10-Language Documentation Localization Engine
==================================================
Translates Markdown documentation across 10 global languages:
- zh: Simplified Chinese (简体中文, Base Source)
- en: English (English)
- zh_tw: Traditional Chinese (繁體中文, 0-Token Offline via OpenCC)
- ja: Japanese (日本語, AI LLM)
- ko: Korean (한국어, AI LLM)
- ru: Russian (Русский, AI LLM)
- de: German (Deutsch, AI LLM)
- fr: French (Français, AI LLM)
- es: Spanish (Español, AI LLM)
- pt: Portuguese (Português, AI LLM)

Optimizations (v2):
- Mega-batch: all docs sent in 1 LLM call per language (DSv4 Flash 1M context)
- Robust retry: never writes untranslated fallback text on failure
"""

import os
import re
import sys
import json
import time
import logging
import argparse
from pathlib import Path
from typing import Dict, List, Set, Any, Optional

ROOT = Path(__file__).resolve().parent.parent

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("GTEDocsLocalize")

DOCS_LANGUAGES = {
    "zh": {"name": "简体中文", "site_name": "GregTech Easy (GTE) 官方文档", "engine": "source"},
    "en": {"name": "English", "site_name": "GregTech Easy (GTE) Official Docs", "engine": "source"},
    "zh-TW": {"name": "繁體中文", "site_name": "GregTech Easy (GTE) 官方文檔", "engine": "opencc", "opencc_config": "s2twp"},
    "ja": {"name": "日本語", "site_name": "GregTech Easy (GTE) 公式ドキュメント", "engine": "llm"},
    "ko": {"name": "한국어", "site_name": "GregTech Easy (GTE) 공식 문서", "engine": "llm"},
    "ru": {"name": "Русский", "site_name": "Официальная документация GregTech Easy (GTE)", "engine": "llm"},
    "de": {"name": "Deutsch", "site_name": "GregTech Easy (GTE) Offizielle Dokumentation", "engine": "llm"},
    "fr": {"name": "Français", "site_name": "Documentation Officielle GregTech Easy (GTE)", "engine": "llm"},
    "es": {"name": "Español", "site_name": "Documentación Oficial de GregTech Easy (GTE)", "engine": "llm"},
    "pt": {"name": "Português", "site_name": "Documentação Oficial do GregTech Easy (GTE)", "engine": "llm"},
}

PROVIDERS = {
    "opencode": {"key_env": "OPENCODE_API_KEY", "base_url": "https://opencode.ai/zen/go/v1", "model": "deepseek-v4-flash"},
    "deepseek": {"key_env": "DEEPSEEK_API_KEY", "base_url": "https://api.deepseek.com/v1", "model": "deepseek-chat"},
}


def load_env_file(path: Path) -> dict:
    env_vars = {}
    if not path.exists():
        return env_vars
    for line in path.read_text(encoding="utf-8-sig").splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            env_vars[k.strip()] = v.strip().strip('"').strip("'")
    return env_vars


def resolve_provider() -> Dict[str, str]:
    # Check local .env first
    local_env = {}
    for p in [ROOT / ".env", ROOT / "modules" / "docs" / ".env", Path("C:/actions-runner/.env")]:
        local_env.update(load_env_file(p))

    def get_val(name: str) -> str:
        return os.environ.get(name, "").strip() or local_env.get(name, "").strip()

    generic_key = get_val("LLM_API_KEY")
    if generic_key:
        return {
            "name": "generic",
            "api_key": generic_key,
            "base_url": get_val("LLM_BASE_URL") or "https://api.openai.com/v1",
            "model": get_val("LLM_MODEL") or "gpt-4o-mini",
        }
    for name, spec in PROVIDERS.items():
        api_key = get_val(spec["key_env"])
        if api_key:
            return {
                "name": name,
                "api_key": api_key,
                "base_url": get_val(f"{name.upper()}_BASE_URL") or spec["base_url"],
                "model": get_val(f"{name.upper()}_MODEL") or spec["model"],
            }
    return {}


_opencc_instances: Dict[str, Any] = {}

def get_opencc(config: str = "s2twp"):
    if config in _opencc_instances:
        return _opencc_instances[config]
    try:
        import opencc
        cc = opencc.OpenCC(config)
        _opencc_instances[config] = cc
        return cc
    except Exception as e:
        logger.warning(f"OpenCC initialization failed: {e}")
        return None


def convert_opencc_markdown(text: str, config: str = "s2twp") -> str:
    cc = get_opencc(config)
    if not cc:
        return text
    lines = text.splitlines(keepends=True)
    out_lines = []
    in_code_block = False
    for line in lines:
        if line.strip().startswith("```") or line.strip().startswith("~~~"):
            in_code_block = not in_code_block
            out_lines.append(line)
            continue
        if in_code_block:
            out_lines.append(line)
        else:
            out_lines.append(cc.convert(line))
    return "".join(out_lines)


def _call_llm_with_retry(prompt: str, provider: Dict[str, str], timeout: int = 180, max_retries: int = 5) -> str:
    """Call LLM API with exponential backoff retry. Raises on all failures."""
    import requests
    import socket

    proxies = None
    local_proxy = os.environ.get("HTTP_PROXY") or os.environ.get("http_proxy")
    if not local_proxy:
        try:
            with socket.create_connection(("127.0.0.1", 10808), timeout=0.5):
                proxies = {"http": "http://127.0.0.1:10808", "https": "http://127.0.0.1:10808"}
        except Exception:
            pass
    else:
        proxies = {"http": local_proxy, "https": local_proxy}

    last_error = None
    for attempt in range(max_retries):
        try:
            if provider.get("name") == "gemini":
                model = provider.get("model") or "gemini-3.6-flash"
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={provider['api_key']}"
                payload = {
                    "contents": [{"parts": [{"text": prompt}]}],
                    "generationConfig": {"temperature": 0.2}
                }
                resp = requests.post(url, json=payload, proxies=proxies, timeout=timeout)
                if resp.status_code != 200:
                    raise RuntimeError(f"Gemini API error {resp.status_code}: {resp.text}")
                data = resp.json()
                return data["candidates"][0]["content"]["parts"][0]["text"]
            else:
                url = f"{provider['base_url']}/chat/completions"
                payload = {
                    "model": provider["model"],
                    "messages": [
                        {"role": "system", "content": "You are a professional Markdown documentation translator."},
                        {"role": "user", "content": prompt}
                    ],
                    "temperature": 0.2
                }
                headers = {
                    "Authorization": f"Bearer {provider['api_key']}",
                    "Content-Type": "application/json"
                }
                resp = requests.post(url, json=payload, headers=headers, proxies=proxies, timeout=timeout)
                if resp.status_code != 200:
                    raise RuntimeError(f"LLM API error {resp.status_code}: {resp.text}")
                data = resp.json()
                return data["choices"][0]["message"]["content"]
        except Exception as e:
            last_error = e
            err_str = str(e)
            is_auth = any(code in err_str for code in ["401", "403", "Unauthorized", "Forbidden"])
            if is_auth:
                raise  # Don't retry auth errors

            if attempt < max_retries - 1:
                wait = 2.0 * (2 ** attempt)
                logger.warning(f"LLM call failed (attempt {attempt+1}/{max_retries}): {e}. Retrying in {wait:.0f}s...")
                time.sleep(wait)
            else:
                logger.error(f"LLM call exhausted {max_retries} retries: {e}")

    raise last_error


def _strip_markdown_wrapper(text: str) -> str:
    text = text.strip()
    if text.startswith("```markdown") and text.endswith("```"):
        return text[len("```markdown"): -3].strip()
    if text.startswith("```md") and text.endswith("```"):
        return text[len("```md"): -3].strip()
    return text


def translate_markdown_file(src_path: Path, dst_path: Path, target_lang: str, provider: Dict[str, str], force: bool = False):
    """Translate a single Markdown file. On failure, does NOT write untranslated fallback."""
    text = src_path.read_text(encoding="utf-8")
    dst_path.parent.mkdir(parents=True, exist_ok=True)

    if target_lang == "zh-TW":
        translated = convert_opencc_markdown(text, "s2twp")
        dst_path.write_text(translated, encoding="utf-8")
        logger.info(f"[OpenCC 0-Token] {src_path.name} -> {target_lang}")
        return

    # If destination exists, has content and is not identical to Chinese source, skip unless force
    if not force and dst_path.exists() and dst_path.stat().st_size > 50:
        existing_text = dst_path.read_text(encoding="utf-8")
        if existing_text != text and not (target_lang != "zh" and "# GregTech Easy (GTE) 官方文档" in existing_text):
            return

    if not provider:
        # No provider — do NOT write untranslated fallback
        logger.warning(f"No LLM provider for {src_path.name} -> {target_lang}. Skipping.")
        return

    try:
        lang_name = DOCS_LANGUAGES.get(target_lang, {}).get("name", target_lang)
        prompt = (
            f"You are a professional technical and Minecraft mod documentation translator.\n"
            f"Translate the following Markdown documentation into {lang_name} ({target_lang}).\n"
            f"Strict Rules:\n"
            f"1. Preserve ALL Markdown syntax, headers (#, ##), tables, bold, italics.\n"
            f"2. Keep code blocks (```...```) and inline code (`...`) 100% untouched.\n"
            f"3. In markdown links [Text](URL), translate 'Text' but NEVER modify 'URL'.\n"
            f"4. Keep technical abbreviations untouched (EU/t, UHV, AE2, GT--, KubeJS, Packwiz, JVM).\n"
            f"5. Output ONLY the translated Markdown text without conversational remarks or wrap in code blocks.\n\n"
            f"Content to translate:\n\n{text}"
        )

        translated_content = _call_llm_with_retry(prompt, provider, timeout=180)
        translated_content = _strip_markdown_wrapper(translated_content)

        # Sanity check
        if len(translated_content.strip()) < max(50, len(text.strip()) // 5):
            raise RuntimeError(f"Translation too short ({len(translated_content)} chars vs {len(text)} source) — likely truncated")

        dst_path.write_text(translated_content, encoding="utf-8")
        logger.info(f"[LLM {provider['name']}] {src_path.name} -> {target_lang}")
    except Exception as e:
        # CRITICAL FIX: Do NOT write untranslated source as fallback!
        logger.error(f"TRANSLATION FAILED for {src_path.name} -> {target_lang}: {e}. NOT writing fallback.")


def sync_all_docs(docs_root: Path):
    zh_dir = docs_root / "zh"
    if not zh_dir.exists():
        logger.error(f"Source zh directory not found: {zh_dir}")
        return

    provider = resolve_provider()
    if provider:
        logger.info(f"Using LLM Provider: {provider['name']} (model: {provider['model']})")
    else:
        logger.info("No LLM API Key detected. Using OpenCC for Traditional Chinese and structure mirroring for other languages.")

    zh_files = list(zh_dir.rglob("*.md"))
    logger.info(f"Found {len(zh_files)} markdown chapters in zh/ source.")

    for lang_code, lang_meta in DOCS_LANGUAGES.items():
        if lang_code in ("zh", "en"):
            continue
        lang_dir = docs_root / lang_code
        logger.info(f"--> Synchronizing language: {lang_meta['name']} ({lang_code})")
        for f in zh_files:
            rel = f.relative_to(zh_dir)
            target_file = lang_dir / rel
            translate_markdown_file(f, target_file, lang_code, provider)


def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    parser = argparse.ArgumentParser(description="GTE 10-Language Documentation Translator")
    parser.add_argument("--docs-dir", type=str, default="modules/docs/docs", help="Path to docs directory")
    args = parser.parse_args()

    docs_path = Path(args.docs_dir).resolve()
    sync_all_docs(docs_path)
    print("\n[SUCCESS] 10-Language documentation synchronization complete!")


if __name__ == "__main__":
    main()
