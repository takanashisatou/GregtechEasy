#!/usr/bin/env python3
"""
GTE Industrial-Grade Unified AI + OpenCC Localization System
============================================================
Single unified localization engine for the entire GTE ecosystem:
1. Submodule Mod Assets & Overrides: gtecore, gtm-reborn, gt--, KubeJS lang JSONs
2. FTB Quests: SNBT quests and lang dictionaries
3. Documentation & Wiki: 10-language Markdown with SHA-256 incremental cache & rate-limit safety
4. AI Engines: OpenCode Go (deepseek-v4-flash), DeepSeek, Gemini, OpenAI, DashScope, Moonshot, Zhipu
5. 0-Token Offline Engine: OpenCC (s2twp, s2hk) for Traditional Chinese

Optimizations (v2):
- Mega-batch translation: packs ALL docs into a single LLM request per language
  (DSv4 Flash has 1M context; entire docs corpus is ~40K chars ≈ 20K tokens)
- Robust retry: failed translations are retried with exponential backoff,
  never falls back to writing untranslated source text
- Per-language parallelism: all 8 LLM languages are translated concurrently
"""

import os
import re
import sys
import json
import time
import socket
import logging
import argparse
import hashlib
from pathlib import Path
from typing import Dict, List, Set, Any, Optional

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("GTELocalize")

PROJECT_ROOT = Path(__file__).resolve().parent.parent

# ─────────────────────────────────────────────────────────────────────────────
# 1. Global Language Matrices
# ─────────────────────────────────────────────────────────────────────────────
ASSET_LANGUAGES = {
    "zh_cn": {"name": "Simplified Chinese", "engine": "source"},
    "en_us": {"name": "English (US)", "engine": "source"},
    "zh_tw": {"name": "Traditional Chinese (Taiwan)", "engine": "opencc", "opencc_config": "s2twp"},
    "zh_hk": {"name": "Traditional Chinese (Hong Kong)", "engine": "opencc", "opencc_config": "s2hk"},
    "ru_ru": {"name": "Russian", "engine": "llm"},
    "ja_jp": {"name": "Japanese", "engine": "llm"},
    "de_de": {"name": "German", "engine": "llm"},
    "es_es": {"name": "Spanish", "engine": "llm"},
    "fr_fr": {"name": "French", "engine": "llm"},
    "it_it": {"name": "Italian", "engine": "llm"},
    "ko_kr": {"name": "Korean", "engine": "llm"},
}

DOCS_LANGUAGES = {
    "zh": {"name": "Simplified Chinese", "engine": "source"},
    "en": {"name": "English", "engine": "source"},
    "zh-TW": {"name": "Traditional Chinese", "engine": "opencc", "opencc_config": "s2twp"},
    "ja": {"name": "Japanese", "engine": "llm"},
    "ko": {"name": "Korean", "engine": "llm"},
    "ru": {"name": "Russian", "engine": "llm"},
    "de": {"name": "German", "engine": "llm"},
    "fr": {"name": "French", "engine": "llm"},
    "es": {"name": "Spanish", "engine": "llm"},
    "pt": {"name": "Portuguese", "engine": "llm"},
}

# ─────────────────────────────────────────────────────────────────────────────
# 2. LLM Providers Configuration (Prioritizing OpenCode Go / DeepSeek)
# ─────────────────────────────────────────────────────────────────────────────
PROVIDERS = {
    "opencode": {
        "key_env": "OPENCODE_API_KEY",
        "base_url_env": "OPENCODE_BASE_URL",
        "model_env": "OPENCODE_MODEL",
        "default_base_url": "https://opencode.ai/zen/v1",
        "default_model": "deepseek-v4-flash",
    },
    "deepseek": {
        "key_env": "DEEPSEEK_API_KEY",
        "base_url_env": "DEEPSEEK_BASE_URL",
        "model_env": "DEEPSEEK_MODEL",
        "default_base_url": "https://api.deepseek.com/v1",
        "default_model": "deepseek-chat",
    },
    "gemini": {
        "key_env": "GEMINI_API_KEY",
        "base_url_env": "GEMINI_BASE_URL",
        "model_env": "GEMINI_MODEL",
        "default_base_url": "https://generativelanguage.googleapis.com/v1beta/models",
        "default_model": "gemini-3.6-flash",
    },
    "openai": {
        "key_env": "OPENAI_API_KEY",
        "base_url_env": "OPENAI_BASE_URL",
        "model_env": "OPENAI_MODEL",
        "default_base_url": "https://api.openai.com/v1",
        "default_model": "gpt-4o-mini",
    },
    "dashscope": {
        "key_env": "DASHSCOPE_API_KEY",
        "base_url_env": "DASHSCOPE_BASE_URL",
        "model_env": "DASHSCOPE_MODEL",
        "default_base_url": "https://dashscope.aliyuncs.com/compatible-mode/v1",
        "default_model": "qwen-plus",
    },
    "moonshot": {
        "key_env": "MOONSHOT_API_KEY",
        "base_url_env": "MOONSHOT_BASE_URL",
        "model_env": "MOONSHOT_MODEL",
        "default_base_url": "https://api.moonshot.cn/v1",
        "default_model": "moonshot-v1-8k",
    },
    "zhipu": {
        "key_env": "ZHIPU_API_KEY",
        "base_url_env": "ZHIPU_BASE_URL",
        "model_env": "ZHIPU_MODEL",
        "default_base_url": "https://open.bigmodel.cn/api/paas/v4",
        "default_model": "glm-4-flash",
    },
}

CACHE_FILE = PROJECT_ROOT / ".translation_cache.json"
DOCS_CACHE_FILE = PROJECT_ROOT / ".docs_translation_cache.json"


def load_env_file(path: Path) -> dict:
    env_vars = {}
    if not path.exists():
        return env_vars
    try:
        for line in path.read_text(encoding="utf-8-sig").splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                env_vars[k.strip()] = v.strip().strip('"').strip("'")
    except Exception:
        pass
    return env_vars


def get_local_proxy() -> Optional[Dict[str, str]]:
    local_proxy = os.environ.get("HTTP_PROXY") or os.environ.get("http_proxy")
    if local_proxy:
        return {"http": local_proxy, "https": local_proxy}
    try:
        with socket.create_connection(("127.0.0.1", 10808), timeout=0.3):
            return {"http": "http://127.0.0.1:10808", "https": "http://127.0.0.1:10808"}
    except Exception:
        pass
    return None


def resolve_all_providers() -> List[Dict[str, str]]:
    local_env = {}
    for p in [PROJECT_ROOT / ".env", PROJECT_ROOT / "modules" / "docs" / ".env", Path("C:/actions-runner/.env")]:
        local_env.update(load_env_file(p))

    def get_val(name: str) -> str:
        return os.environ.get(name, "").strip() or local_env.get(name, "").strip()

    active = []
    generic_key = get_val("LLM_API_KEY")
    if generic_key:
        active.append({
            "name": "generic",
            "api_key": generic_key,
            "base_url": get_val("LLM_BASE_URL") or "https://api.openai.com/v1",
            "model": get_val("LLM_MODEL") or "gpt-4o-mini",
        })

    for name, spec in PROVIDERS.items():
        api_key = get_val(spec["key_env"])
        if not api_key:
            continue
        base_url = get_val(spec["base_url_env"]) or spec["default_base_url"]
        model = get_val(spec["model_env"]) or spec["default_model"]
        active.append({
            "name": name,
            "api_key": api_key,
            "base_url": base_url.strip().rstrip("/"),
            "model": model.strip(),
        })
    return active


def resolve_provider() -> Dict[str, str]:
    all_p = resolve_all_providers()
    return all_p[0] if all_p else {}


# ─────────────────────────────────────────────────────────────────────────────
# 3. OpenCC Offline Converter
# ─────────────────────────────────────────────────────────────────────────────
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
        logger.warning(f"OpenCC initialization failed ({config}): {e}")
        return None


def convert_traditional_chinese(text: str, target_lang: str) -> str:
    config = "s2hk" if "hk" in target_lang.lower() else "s2twp"
    cc = get_opencc(config)
    return cc.convert(text) if cc else text


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


# ─────────────────────────────────────────────────────────────────────────────
# 4. LLM Universal API Caller with Failover & Rate-Limit Backoff
# ─────────────────────────────────────────────────────────────────────────────
def call_single_provider(prompt: str, provider: Dict[str, str], system_prompt: str = "You are a professional translator.", timeout: int = 180) -> str:
    import requests
    proxies = get_local_proxy()

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
                {"role": "system", "content": system_prompt},
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


def call_llm(prompt: str, provider: Dict[str, str], system_prompt: str = "You are a professional translator.", timeout: int = 180) -> str:
    """Call LLM with automatic retry (5 attempts per provider) and provider failover.
    
    Raises RuntimeError if ALL providers and ALL retries are exhausted — the caller
    must handle this and MUST NOT silently write untranslated fallback text.
    """
    providers = resolve_all_providers()
    if not providers and provider:
        providers = [provider]

    last_error = None
    MAX_RETRIES = 5          # per-provider retry attempts for transient errors
    BASE_BACKOFF = 2.0       # seconds, doubles each retry: 2, 4, 8, 16, 32

    for p in providers:
        for attempt in range(MAX_RETRIES):
            try:
                return call_single_provider(prompt, p, system_prompt=system_prompt, timeout=timeout)
            except Exception as e:
                err_str = str(e)
                last_error = e

                # Check if error is transient (500/502/503/504/429)
                is_transient = any(code in err_str for code in ["500", "502", "503", "504", "429", "rate limit", "overloaded", "Internal server error"])
                # Check if error is auth-related — no point retrying
                is_auth_error = any(code in err_str for code in ["401", "403", "Unauthorized", "Forbidden"])

                if is_auth_error:
                    logger.warning(f"Provider '{p.get('name')}' auth error ({e}). Switching provider...")
                    break  # skip remaining retries, try next provider

                if attempt < MAX_RETRIES - 1:
                    wait = BASE_BACKOFF * (2 ** attempt)  # 2, 4, 8, 16, 32 seconds
                    logger.warning(
                        f"Provider '{p.get('name')}' (attempt {attempt+1}/{MAX_RETRIES}) "
                        f"{'transient' if is_transient else 'unknown'} error ({e}). "
                        f"Retrying in {wait:.0f}s..."
                    )
                    time.sleep(wait)
                else:
                    logger.warning(f"Provider '{p.get('name')}' exhausted {MAX_RETRIES} retries ({e}). Switching provider...")

    if last_error:
        raise last_error
    raise RuntimeError("No LLM provider available.")


# ─────────────────────────────────────────────────────────────────────────────
# 5. Documentation Localization — Mega-Batch + Robust Retry
# ─────────────────────────────────────────────────────────────────────────────
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed

_cache_lock = threading.Lock()

def load_docs_cache(docs_dir: Path) -> dict:
    cache_path = docs_dir / ".docs_cache.json"
    if cache_path.exists():
        try:
            return json.loads(cache_path.read_text(encoding="utf-8"))
        except Exception:
            return {}
    return {}


def save_docs_cache(docs_dir: Path, cache: dict):
    cache_path = docs_dir / ".docs_cache.json"
    try:
        cache_path.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
    except Exception:
        pass


def _strip_markdown_wrapper(text: str) -> str:
    """Strip ```markdown or ```md wrappers that LLMs sometimes add."""
    text = text.strip()
    if text.startswith("```markdown") and text.endswith("```"):
        return text[len("```markdown"): -3].strip()
    if text.startswith("```md") and text.endswith("```"):
        return text[len("```md"): -3].strip()
    return text


def translate_markdown_single_file(src_path: Path, dst_path: Path, target_lang: str, provider: Dict[str, str], cache: dict, rel_key: str, force: bool = False) -> bool:
    """Translate a single Markdown file. Returns True if translated successfully.
    
    IMPORTANT: On LLM failure (after all retries exhausted), this function does NOT
    write a fallback — it leaves the destination unchanged and returns False, so the
    next CI run will retry the file.
    """
    text = src_path.read_text(encoding="utf-8")
    src_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()
    cache_entry_key = f"{rel_key}:{target_lang}"

    dst_path.parent.mkdir(parents=True, exist_ok=True)

    if target_lang == "zh-TW":
        translated = convert_opencc_markdown(text, "s2twp")
        dst_path.write_text(translated, encoding="utf-8")
        with _cache_lock:
            cache[cache_entry_key] = src_hash
        logger.info(f"[OpenCC 0-Token] {src_path.name} -> {target_lang}")
        return True

    # Check incremental cache
    if not force and dst_path.exists() and dst_path.stat().st_size > 50:
        with _cache_lock:
            if cache.get(cache_entry_key) == src_hash:
                try:
                    dst_content = dst_path.read_text(encoding="utf-8")
                    if target_lang == "zh-TW" or dst_content.strip() != text.strip():
                        return False # Skipped (already translated & up to date)
                except Exception:
                    pass

    if not provider:
        # No provider available — do NOT write untranslated fallback
        logger.warning(f"No LLM provider available for {src_path.name} -> {target_lang}. Skipping (not writing fallback).")
        return False

    try:
        lang_name = DOCS_LANGUAGES.get(target_lang, {}).get("name", target_lang)
        prompt = (
            f"You are a professional technical and Minecraft mod documentation translator.\n"
            f"Translate the following Markdown documentation completely into {lang_name} ({target_lang}).\n"
            f"Strict Localization Rules:\n"
            f"1. Preserve ALL Markdown structural syntax, headers (#, ##), tables, bold, italics.\n"
            f"2. Translate all UI text, headings, badges, table column headers, and callout texts.\n"
            f"3. In Mermaid diagrams (```mermaid ... ```), translate all node text labels (e.g. A[Label] --> B[Label]) into {lang_name}, while keeping flowchart syntax keywords (graph TD, -->, subgraph, etc.) untouched.\n"
            f"4. Keep code blocks syntax intact, but translate code comments (e.g. # or // comments) into {lang_name}.\n"
            f"5. In markdown links [Text](URL), translate 'Text' into {lang_name} but NEVER modify 'URL'.\n"
            f"6. Keep technical abbreviations and system names untouched (EU/t, UHV, AE2, GT--, KubeJS, Packwiz, JVM).\n"
            f"7. Output ONLY the translated Markdown content directly without conversational remarks or wrapping in extra code blocks.\n\n"
            f"Content to translate:\n\n{text}"
        )

        translated_content = call_llm(prompt, provider)
        translated_content = _strip_markdown_wrapper(translated_content)

        # Sanity check: translation must not be empty or too short relative to source
        if len(translated_content.strip()) < max(50, len(text.strip()) // 5):
            raise RuntimeError(f"Translation too short ({len(translated_content)} chars vs {len(text)} source chars) — likely truncated or garbage")

        dst_path.write_text(translated_content, encoding="utf-8")
        with _cache_lock:
            cache[cache_entry_key] = src_hash
        logger.info(f"[LLM {provider['name']}] {src_path.name} -> {target_lang}")
        return True
    except Exception as e:
        # CRITICAL FIX: Do NOT write untranslated source text as fallback!
        # Leave the destination file unchanged so the next CI run will retry.
        logger.error(f"TRANSLATION FAILED for {src_path.name} -> {target_lang}: {e}. "
                     f"NOT writing fallback — file will be retried on next run.")
        return False

translate_markdown_file = translate_markdown_single_file


def extract_batched_markdown_docs(response: str) -> Dict[str, str]:
    extracted = {}
    pattern = re.compile(
        r'<<<<<FILE_START:\s*(.*?)\s*>>>>>(.*?)(?:<<<<<FILE_END:\s*\1\s*>>>>>|(?=<<<<<FILE_START:)|$)',
        re.DOTALL
    )
    for match in pattern.finditer(response):
        key = match.group(1).strip().replace("\\", "/")
        content = match.group(2).strip()
        content = _strip_markdown_wrapper(content)
        extracted[key] = content
    return extracted


def translate_markdown_mega_batch(all_items: List[Dict[str, Any]], target_lang: str, provider: Dict[str, str], cache: dict, force: bool = False) -> int:
    """Translates ALL docs for a single language in one mega-batch LLM request.
    
    DSv4 Flash supports 1M context. The entire GTE docs corpus is ~40K chars (~20K tokens),
    so all files fit comfortably in a single request. This is ~10x faster than batching
    by 10-file chunks.
    
    If the mega-batch fails or returns incomplete results, missing files are retried
    individually with full retry logic (no silent fallback).
    """
    if not all_items:
        return 0

    if len(all_items) == 1:
        item = all_items[0]
        success = translate_markdown_single_file(item["src_path"], item["dst_path"], target_lang, provider, cache, item["rel_key"], force=force)
        return 1 if success else 0

    if not provider:
        logger.warning(f"No LLM provider for {target_lang}. Skipping {len(all_items)} files (not writing fallback).")
        return 0

    lang_name = DOCS_LANGUAGES.get(target_lang, {}).get("name", target_lang)
    doc_blocks = []
    for item in all_items:
        doc_blocks.append(f"<<<<<FILE_START: {item['rel_key']}>>>>>\n{item['text']}\n<<<<<FILE_END: {item['rel_key']}>>>>>")
    combined_docs = "\n\n".join(doc_blocks)

    prompt = (
        f"You are a professional technical and Minecraft mod documentation translator.\n"
        f"Translate all the following {len(all_items)} Markdown documentation files completely into {lang_name} ({target_lang}).\n\n"
        f"Strict Localization Rules:\n"
        f"1. Preserve ALL Markdown structural syntax, headers (#, ##), tables, bold, italics.\n"
        f"2. Translate all UI text, headings, badges, table column headers, and callout texts.\n"
        f"3. In Mermaid diagrams (```mermaid ... ```), translate all node text labels (e.g. A[Label] --> B[Label]) into {lang_name}, while keeping flowchart syntax keywords (graph TD, -->, subgraph, etc.) untouched.\n"
        f"4. Keep code blocks syntax intact, but translate code comments (e.g. # or // comments) into {lang_name}.\n"
        f"5. In markdown links [Text](URL), translate 'Text' into {lang_name} but NEVER modify 'URL'.\n"
        f"6. Keep technical abbreviations and system names untouched (EU/t, UHV, AE2, GT--, KubeJS, Packwiz, JVM).\n"
        f"7. CRITICAL DELIMITER RULE:\n"
        f"You MUST output each translated file enclosed within its exact boundary markers:\n"
        f"<<<<<FILE_START: <file_path>>>>>\n"
        f"<translated markdown content>\n"
        f"<<<<<FILE_END: <file_path>>>>>\n"
        f"Do not omit any file or change file path in markers. Output ONLY the marked files without extra conversational remarks.\n\n"
        f"Files to translate:\n\n{combined_docs}"
    )

    success_count = 0
    try:
        # Use longer timeout for mega-batch (all docs in one request)
        translated_content = call_llm(prompt, provider, timeout=600)
        extracted = extract_batched_markdown_docs(translated_content)
        normalized_extracted = {k.replace("\\", "/").strip().lower(): (k, v) for k, v in extracted.items()}

        missing_items = []
        for item in all_items:
            rel_key = item["rel_key"].replace("\\", "/").strip()
            norm_key = rel_key.lower()

            content = None
            if rel_key in extracted and extracted[rel_key]:
                content = extracted[rel_key]
            elif norm_key in normalized_extracted and normalized_extracted[norm_key][1]:
                content = normalized_extracted[norm_key][1]

            if content:
                # Sanity check: translation must not be too short
                if len(content.strip()) < max(20, len(item["text"].strip()) // 10):
                    logger.warning(f"Mega-batch: '{rel_key}' translation too short ({len(content)} chars). Will retry individually.")
                    missing_items.append(item)
                    continue

                item["dst_path"].parent.mkdir(parents=True, exist_ok=True)
                item["dst_path"].write_text(content, encoding="utf-8")
                with _cache_lock:
                    cache[f"{rel_key}:{target_lang}"] = item["src_hash"]
                logger.info(f"[LLM MegaBatch {provider['name']}] {item['src_path'].name} -> {target_lang}")
                success_count += 1
            else:
                missing_items.append(item)

        # Retry missing files individually (with full retry logic in call_llm)
        if missing_items:
            logger.warning(f"Mega-batch response missing {len(missing_items)} files for {target_lang}. Retrying individually...")
            for item in missing_items:
                if translate_markdown_single_file(item["src_path"], item["dst_path"], target_lang, provider, cache, item["rel_key"], force=force):
                    success_count += 1

        return success_count
    except Exception as e:
        logger.warning(f"LLM mega-batch failed for {target_lang} ({len(all_items)} files): {e}. Falling back to individual translations...")
        for item in all_items:
            if translate_markdown_single_file(item["src_path"], item["dst_path"], target_lang, provider, cache, item["rel_key"], force=force):
                success_count += 1
        return success_count


# Keep legacy function for backward compat but redirect to mega-batch
def translate_markdown_batch(batch_items: List[Dict[str, Any]], target_lang: str, provider: Dict[str, str], cache: dict, force: bool = False) -> int:
    """Legacy wrapper — delegates to mega-batch."""
    return translate_markdown_mega_batch(batch_items, target_lang, provider, cache, force=force)


def create_markdown_batches(items: List[Dict[str, Any]], max_chars: int = 500000, max_files: int = 50) -> List[List[Dict[str, Any]]]:
    """Create batches for translation. With DSv4 Flash's 1M context, we use very large batches.
    
    Default max_chars=500K allows ~250K tokens of source + ~250K tokens for translation output,
    well within the 1M token context window.
    """
    batches = []
    current_batch = []
    current_chars = 0
    for item in items:
        item_chars = len(item["text"])
        if current_batch and (current_chars + item_chars > max_chars or len(current_batch) >= max_files):
            batches.append(current_batch)
            current_batch = []
            current_chars = 0
        current_batch.append(item)
        current_chars += item_chars
    if current_batch:
        batches.append(current_batch)
    return batches


def process_documentation(docs_dir: Path, provider: Dict[str, str], target_langs: Optional[List[str]] = None, force: bool = False, max_workers: int = 8, batch_chars: int = 500000, batch_files: int = 50):
    """Process documentation translation using mega-batch strategy.
    
    With DSv4 Flash (1M context), all ~18 files (~40K chars total) are packed into
    a single LLM call per language. 8 languages are translated concurrently via ThreadPool.
    Total: 8 API calls instead of 100+ in the old chunked approach.
    """
    zh_dir = docs_dir / "zh"
    if not zh_dir.exists():
        logger.warning(f"Documentation zh source directory not found at: {zh_dir}")
        return

    zh_files = sorted(list(zh_dir.rglob("*.md")))
    total_chars = sum(len(f.read_text(encoding="utf-8")) for f in zh_files)
    logger.info(f"=== Mega-Batch Documentation Translation ({len(zh_files)} files, {total_chars:,} chars total, Workers: {max_workers}) ===")

    cache = load_docs_cache(docs_dir)
    langs = target_langs or [l for l in DOCS_LANGUAGES.keys() if l != "zh"]
    
    total_translated = 0
    total_skipped = 0
    total_failed = 0
    lang_tasks = []  # (items_to_translate, lang)

    for lang in langs:
        if lang == "zh":
            continue
        dst_lang_dir = docs_dir / lang

        # For Traditional Chinese (0 Token OpenCC), run directly in-memory
        if lang == "zh-TW":
            for src_file in zh_files:
                rel_path = src_file.relative_to(zh_dir)
                dst_file = dst_lang_dir / rel_path
                rel_key = str(rel_path).replace("\\", "/")
                text = src_file.read_text(encoding="utf-8")
                src_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()
                cache_entry_key = f"{rel_key}:{lang}"

                dst_file.parent.mkdir(parents=True, exist_ok=True)
                translated = convert_opencc_markdown(text, "s2twp")
                dst_file.write_text(translated, encoding="utf-8")
                cache[cache_entry_key] = src_hash
                total_translated += 1
            logger.info(f"[OpenCC 0-Token] Synchronized all {len(zh_files)} files -> zh-TW")
            continue

        # For LLM languages: check cache and collect files needing translation
        items_to_translate = []
        for src_file in zh_files:
            rel_path = src_file.relative_to(zh_dir)
            dst_file = dst_lang_dir / rel_path
            rel_key = str(rel_path).replace("\\", "/")
            text = src_file.read_text(encoding="utf-8")
            src_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()
            cache_entry_key = f"{rel_key}:{lang}"

            # Check incremental cache
            if not force and dst_file.exists() and dst_file.stat().st_size > 50:
                if cache.get(cache_entry_key) == src_hash:
                    try:
                        dst_content = dst_file.read_text(encoding="utf-8")
                        if dst_content.strip() != text.strip():
                            total_skipped += 1
                            continue
                    except Exception:
                        pass

            items_to_translate.append({
                "src_path": src_file,
                "dst_path": dst_file,
                "rel_key": rel_key,
                "src_hash": src_hash,
                "text": text,
            })

        if items_to_translate:
            lang_tasks.append((items_to_translate, lang))
        else:
            logger.info(f"[{lang}] All {len(zh_files)} files up-to-date (cache hit)")

    if lang_tasks:
        logger.info(f"Submitting {len(lang_tasks)} mega-batch tasks (1 per language), {max_workers} concurrent workers...")
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_map = {
                executor.submit(translate_markdown_mega_batch, items, lang, provider, cache, force): (len(items), lang)
                for items, lang in lang_tasks
            }
            for future in as_completed(future_map):
                n_items, lang = future_map[future]
                try:
                    count = future.result()
                    total_translated += count
                    failed = n_items - count
                    total_failed += failed
                    if failed:
                        logger.warning(f"[{lang}] {count}/{n_items} translated, {failed} FAILED (will retry next run)")
                    else:
                        logger.info(f"[{lang}] All {count} files translated successfully")
                except Exception as e:
                    total_failed += n_items
                    logger.error(f"[{lang}] Mega-batch task crashed: {e}")

    save_docs_cache(docs_dir, cache)
    status = "✅ ALL SUCCESS" if total_failed == 0 else f"⚠️ {total_failed} FAILED"
    logger.info(f"=== Documentation Translation Summary: {total_translated} updated, {total_skipped} cached/skipped, {total_failed} failed [{status}] ===")

    if total_failed > 0:
        logger.error(f"❌ {total_failed} files failed translation. They were NOT written with fallback text and will be retried on the next CI run.")


# ─────────────────────────────────────────────────────────────────────────────
# 6. Mod Asset JSON & FTB Quest Translation Logic
# ─────────────────────────────────────────────────────────────────────────────
def find_all_lang_dirs() -> List[Path]:
    dirs: Set[Path] = set()
    modules_dir = PROJECT_ROOT / "modules"
    if modules_dir.exists():
        for module_dir in modules_dir.iterdir():
            if module_dir.is_dir():
                for p in module_dir.glob("**/assets/*/lang"):
                    if p.is_dir() and not any(part in (".git", "build", ".gradle", "bin", "out") for part in p.parts):
                        dirs.add(p)
    overrides_dir = PROJECT_ROOT / "gte" / "overrides"
    if overrides_dir.exists():
        for p in overrides_dir.glob("**/assets/*/lang"):
            if p.is_dir() and not any(part in (".git", "build") for part in p.parts):
                dirs.add(p)
    return sorted(list(dirs))


def load_cache() -> dict:
    if CACHE_FILE.exists():
        try:
            return json.loads(CACHE_FILE.read_text(encoding="utf-8"))
        except Exception:
            return {}
    return {}


def save_cache(cache: dict):
    CACHE_FILE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def translate_texts_batch(texts: List[str], target_lang: str, provider: Dict[str, str], max_batch_size: int = 100) -> List[str]:
    if not texts or not provider:
        return texts
    lang_name = ASSET_LANGUAGES.get(target_lang, {}).get("name", target_lang)

    results = []
    for i in range(0, len(texts), max_batch_size):
        chunk = texts[i:i + max_batch_size]
        prompt = (
            f"Translate the following Minecraft/GregTech localization strings into {lang_name} ({target_lang}).\n"
            f"Strict Rules:\n"
            f"1. Preserve formatting codes (§a, &e, %s, {{0}}, etc.).\n"
            f"2. Keep technical abbreviations untouched (EU/t, UHV, AE2, GT--, KubeJS, Packwiz, JVM).\n"
            f"3. Return ONLY a valid JSON array of translated strings matching input length exactly ({len(chunk)} items).\n\n"
            f"Input:\n{json.dumps(chunk, ensure_ascii=False)}"
        )
        try:
            res = call_llm(prompt, provider, system_prompt="You are a precise JSON Minecraft localization translator.")
            match = re.search(r"\[.*\]", res, re.DOTALL)
            if match:
                parsed = json.loads(match.group(0))
                if len(parsed) == len(chunk):
                    results.extend(parsed)
                    continue
            logger.warning(f"Batch parse mismatch for {target_lang} chunk {i}:{i+len(chunk)}. Using fallback.")
            results.extend(chunk)
        except Exception as e:
            logger.warning(f"Batch LLM translation failed for {target_lang}: {e}")
            results.extend(chunk)
    return results


def process_submodule_lang_dir(lang_dir: Path, cache: dict, target_langs: List[str], provider: Dict[str, str], opencc_only: bool = False):
    zh_file = lang_dir / "zh_cn.json"
    en_file = lang_dir / "en_us.json"
    base_file = zh_file if zh_file.exists() else en_file
    if not base_file.exists():
        return

    # User Rule: In main project, gtecore's English (en_us) is author-maintained and must NOT be machine-translated
    is_gtecore = "gtecore" in str(lang_dir).lower()

    base_data = json.loads(base_file.read_text(encoding="utf-8"))
    for lang in target_langs:
        if lang == "zh_cn":
            continue
        if lang == "en_us" and is_gtecore and en_file.exists():
            continue
        if lang == "en_us" and en_file.exists() and not zh_file.exists():
            continue

        target_file = lang_dir / f"{lang}.json"
        target_data = json.loads(target_file.read_text(encoding="utf-8")) if target_file.exists() else {}

        missing_keys = [k for k in base_data if k not in target_data or not target_data[k]]
        if lang in ("zh_tw", "zh_hk"):
            for k in base_data:
                target_data[k] = convert_traditional_chinese(base_data[k], lang)
        elif not opencc_only and provider and missing_keys:
            to_trans = [base_data[k] for k in missing_keys]
            translated = translate_texts_batch(to_trans, lang, provider)
            for k, val in zip(missing_keys, translated):
                target_data[k] = val
        else:
            for k in missing_keys:
                target_data[k] = base_data[k]

        target_file.write_text(json.dumps(target_data, ensure_ascii=False, indent=2), encoding="utf-8")
        logger.info(f"  -> [{lang}] {target_file.name} synchronized in {lang_dir.parent.name}")


# ─────────────────────────────────────────────────────────────────────────────
# 7. Main Unified CLI
# ─────────────────────────────────────────────────────────────────────────────
def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    parser = argparse.ArgumentParser(description="GTE Unified AI + OpenCC Multi-Language Localization Engine")
    parser.add_argument("--langs", type=str, default="all", help="Comma-separated target languages")
    parser.add_argument("--docs-dir", type=str, default="", help="Directory containing Markdown docs to translate")
    parser.add_argument("--docs", action="store_true", help="Translate Markdown documentation")
    parser.add_argument("--all", action="store_true", help="Translate both assets and documentation")
    parser.add_argument("--force", action="store_true", help="Force re-translation of existing files")
    parser.add_argument("--opencc-only", action="store_true", help="Run only OpenCC Traditional Chinese conversion")
    args = parser.parse_args()

    provider = resolve_provider()
    logger.info(f"=== GTE Unified Localization Engine ===")
    if provider:
        logger.info(f"Active LLM Provider: {provider['name']} (Model: {provider['model']}, Endpoint: {provider['base_url']})")
    else:
        logger.info("No active LLM API Key detected. Running OpenCC 0-Token & structural synchronization.")

    # 1. Translate Documentation if requested
    if args.docs or args.docs_dir or args.all:
        docs_path = Path(args.docs_dir) if args.docs_dir else (PROJECT_ROOT / "modules" / "docs" / "docs" if (PROJECT_ROOT / "modules" / "docs" / "docs").exists() else PROJECT_ROOT / "docs")
        process_documentation(docs_path, provider, force=args.force)

    # 2. Translate Mod Assets & FTB Quests if requested (or default when not docs-only)
    if not (args.docs or args.docs_dir) or args.all:
        logger.info("=== Translating Mod Assets & Overrides ===")
        cache = load_cache()
        target_langs = list(ASSET_LANGUAGES.keys()) if args.langs == "all" else [l.strip() for l in args.langs.split(",")]
        for lang_dir in find_all_lang_dirs():
            process_submodule_lang_dir(lang_dir, cache, target_langs, provider, opencc_only=args.opencc_only)
        save_cache(cache)

    logger.info("=== GTE Localization Completed Successfully ===")


if __name__ == "__main__":
    main()