#!/usr/bin/env python3
"""
GTE Industrial-Grade AI + OpenCC Multi-Language Localization System
===================================================================
Automates 10-language global localization across GTE-Multi:
- Submodule Langs: gtecore, gtm-reborn, gt--
- Modpack Layer: FTB Quests (SNBT), OpenLoader / KubeJS assets
- 0-Token Offline Conversion: Traditional Chinese (zh_tw, zh_hk) via Python OpenCC (s2twp/s2hk)
- Smart AI Translation: ru_ru, ja_jp, de_de, es_es, fr_fr, it_it, ko_kr via LLM Providers
- Format & Term Safety: Preserves Minecraft formatting (§a, &e, %s, {0}) and GregTech terms (EU/t, UHV, Overclock)
- Incremental Hash Cache: .translation_cache.json
"""

import os
import re
import json
import logging
import argparse
from pathlib import Path
from typing import Dict, List, Set, Any, Optional

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("GTELocalize")

# ─────────────────────────────────────────────────────────────────────────────
# 1. Global Language Matrix
# ─────────────────────────────────────────────────────────────────────────────
LANGUAGES = {
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

# ─────────────────────────────────────────────────────────────────────────────
# 2. LLM Providers Configuration
# ─────────────────────────────────────────────────────────────────────────────
PROVIDERS = {
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
        "default_base_url": "https://generativelanguage.googleapis.com/v1beta/openai",
        "default_model": "gemini-2.5-flash",
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
    "opencode": {
        "key_env": "OPENCODE_API_KEY",
        "base_url_env": "OPENCODE_BASE_URL",
        "model_env": "OPENCODE_MODEL",
        "default_base_url": "https://api.opencode.ai/v1",
        "default_model": "deepseek-v4-flash",
    },
}

PROJECT_ROOT = Path(__file__).resolve().parent.parent
FTB_QUESTS_DIR = PROJECT_ROOT / "gte" / "overrides" / "config" / "ftbquests" / "quests"
FTB_LANG_DIR = FTB_QUESTS_DIR / "lang"
CACHE_FILE = PROJECT_ROOT / ".translation_cache.json"


def find_all_lang_dirs() -> List[Path]:
    """Finds all valid asset lang directories in submodules and pack overrides."""
    dirs: Set[Path] = set()
    # 1. Modules
    modules_dir = PROJECT_ROOT / "modules"
    if modules_dir.exists():
        for module_dir in modules_dir.iterdir():
            if module_dir.is_dir():
                for p in module_dir.glob("**/assets/*/lang"):
                    if p.is_dir() and not any(part in (".git", "build", ".gradle", "bin", "out") for part in p.parts):
                        dirs.add(p)
    # 2. Overrides (OpenLoader / KubeJS)
    overrides_dir = PROJECT_ROOT / "gte" / "overrides"
    if overrides_dir.exists():
        for p in overrides_dir.glob("**/assets/*/lang"):
            if p.is_dir() and not any(part in (".git", "build") for part in p.parts):
                dirs.add(p)
    return sorted(list(dirs))


def resolve_provider() -> Dict[str, str]:
    """Return the first configured provider, preferring the generic LLM_* override."""
    generic_key = os.environ.get("LLM_API_KEY", "").strip()
    if generic_key:
        return {
            "name": "generic",
            "api_key": generic_key,
            "base_url": os.environ.get("LLM_BASE_URL", "https://api.openai.com/v1").strip().rstrip("/"),
            "model": os.environ.get("LLM_MODEL", "gpt-4o-mini").strip(),
        }
    for name, spec in PROVIDERS.items():
        api_key = os.environ.get(spec["key_env"], "").strip()
        if not api_key:
            continue
        base_url = os.environ.get(spec["base_url_env"], spec["default_base_url"]).strip().rstrip("/")
        model = os.environ.get(spec["model_env"], spec["default_model"]).strip()
        return {
            "name": name,
            "api_key": api_key,
            "base_url": base_url or spec["default_base_url"],
            "model": model or spec["default_model"],
        }
    return {}


# ─────────────────────────────────────────────────────────────────────────────
# 3. OpenCC Offline Converter
# ─────────────────────────────────────────────────────────────────────────────
_opencc_instances: Dict[str, Any] = {}

def get_opencc_converter(config_name: str):
    """Initializes and returns an OpenCC converter instance."""
    if config_name in _opencc_instances:
        return _opencc_instances[config_name]
    try:
        import opencc
        cc = opencc.OpenCC(config_name)
        _opencc_instances[config_name] = cc
        return cc
    except ImportError:
        logger.warning(
            "opencc-python-reimplemented is not installed. "
            "Run `pip install opencc-python-reimplemented` for 0-token offline Traditional Chinese."
        )
        return None
    except Exception as e:
        logger.warning(f"Failed to initialize OpenCC with config {config_name}: {e}")
        return None


def convert_traditional_chinese(text: str, target_lang: str) -> str:
    """Converts Simplified Chinese text to Traditional Chinese using OpenCC."""
    if not text:
        return text
    config = LANGUAGES.get(target_lang, {}).get("opencc_config", "s2twp")
    converter = get_opencc_converter(config)
    if converter:
        return converter.convert(text)
    return text


# ─────────────────────────────────────────────────────────────────────────────
# 4. Cache Management
# ─────────────────────────────────────────────────────────────────────────────
def load_cache() -> Dict[str, Dict[str, str]]:
    """Loads incremental cache structured as {target_lang: {source_text: translated_text}}."""
    if CACHE_FILE.exists():
        try:
            with open(CACHE_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
                if isinstance(data, dict):
                    # Migration support for flat cache
                    if data and not any(isinstance(v, dict) for v in data.values()):
                        return {"zh_cn": data}
                    return data
        except Exception as e:
            logger.warning(f"Failed to load cache: {e}")
    return {}


def save_cache(cache: Dict[str, Dict[str, str]]):
    """Persists incremental cache."""
    try:
        with open(CACHE_FILE, "w", encoding="utf-8") as f:
            json.dump(cache, f, ensure_ascii=False, indent=2)
    except Exception as e:
        logger.warning(f"Failed to save cache: {e}")


# ─────────────────────────────────────────────────────────────────────────────
# 5. AI Translation Engine
# ─────────────────────────────────────────────────────────────────────────────
def call_llm_translate(texts: List[str], target_lang: str, source_lang: str = "en_us") -> Dict[str, str]:
    """Translates a batch of texts using the configured LLM provider."""
    if not texts:
        return {}

    provider = resolve_provider()
    if not provider:
        logger.warning(
            f"No API key configured for {target_lang}. Set LLM_API_KEY, DEEPSEEK_API_KEY, "
            f"GEMINI_API_KEY, etc. Falling back to original text."
        )
        return {t: t for t in texts}

    try:
        import requests
    except ImportError:
        logger.error("requests library missing. Run `pip install requests`.")
        return {t: t for t in texts}

    target_lang_name = LANGUAGES.get(target_lang, {}).get("name", target_lang)
    prompt = (
        f"You are a professional Minecraft Modpack localization expert specializing in GregTech and tech modpacks.\n"
        f"Translate the following text items from {source_lang} to {target_lang_name} ({target_lang}).\n"
        f"STRICT RULES:\n"
        f"1. Preserve all Minecraft color formatting codes (e.g. §0-§f, §k-§o, §r, &0-&f, &e, &c).\n"
        f"2. Preserve all placeholder formatting (%s, %d, %1$s, %2$s, {{0}}, {{1}}, \\n).\n"
        f"3. Do NOT translate GregTech technical acronyms, voltages, and energy terms: "
        f"EU, EU/t, RF, FE, Amps, Voltage, ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX, Subtick, Overclock.\n"
        f"Input is a JSON list of strings. Return ONLY a valid JSON object mapping original text to translated text, without markdown fencing."
    )

    headers = {
        "Authorization": f"Bearer {provider['api_key']}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": provider["model"],
        "messages": [
            {"role": "system", "content": prompt},
            {"role": "user", "content": json.dumps(texts, ensure_ascii=False)},
        ],
        "temperature": 0.2,
    }

    try:
        url = f"{provider['base_url']}/chat/completions"
        logger.info(
            f"Requesting [{target_lang}] translation for {len(texts)} entries "
            f"via {provider['name']} ({provider['model']})..."
        )
        resp = requests.post(url, headers=headers, json=payload, timeout=90)
        resp.raise_for_status()
        res_json = resp.json()
        content = res_json["choices"][0]["message"]["content"].strip()

        # Clean markdown codeblocks if present
        content = re.sub(r"^```(?:json)?\s*", "", content, flags=re.MULTILINE)
        content = re.sub(r"\s*```$", "", content, flags=re.MULTILINE).strip()

        translated_map = json.loads(content)
        return translated_map
    except Exception as e:
        logger.error(f"{provider['name']} API translation error for [{target_lang}]: {e}")
        return {t: t for t in texts}


def batch_translate_texts(
    texts: List[str],
    target_lang: str,
    cache: Dict[str, Dict[str, str]],
    source_lang: str = "zh_cn",
    opencc_only: bool = False,
) -> Dict[str, str]:
    """Translates a list of texts into target_lang using OpenCC, Cache, or LLM."""
    if not texts:
        return {}

    lang_spec = LANGUAGES.get(target_lang, {})
    engine = lang_spec.get("engine", "llm")
    target_cache = cache.setdefault(target_lang, {})
    results: Dict[str, str] = {}

    # 1. Check OpenCC (0-Token)
    if engine == "opencc":
        for t in texts:
            if t in target_cache:
                results[t] = target_cache[t]
            else:
                conv = convert_traditional_chinese(t, target_lang)
                target_cache[t] = conv
                results[t] = conv
        return results

    # 2. Source language (Identity)
    if target_lang == source_lang:
        for t in texts:
            results[t] = t
        return results

    # 3. LLM Translation
    if opencc_only:
        # If opencc_only is active, fallback to cached value or original text
        for t in texts:
            results[t] = target_cache.get(t, t)
        return results

    needed = [t for t in texts if t not in target_cache]
    if needed:
        provider = resolve_provider()
        if provider:
            chunk_size = 40
            for i in range(0, len(needed), chunk_size):
                chunk = needed[i : i + chunk_size]
                translations = call_llm_translate(chunk, target_lang=target_lang, source_lang=source_lang)
                target_cache.update(translations)
        else:
            for t in needed:
                target_cache[t] = t

    for t in texts:
        results[t] = target_cache.get(t, t)

    return results


# ─────────────────────────────────────────────────────────────────────────────
# 6. FTB Quests Extraction & Multi-Language Generation
# ─────────────────────────────────────────────────────────────────────────────
def extract_ftb_quest_strings() -> List[str]:
    """Extracts all translatable quest strings from chapters and configuration."""
    entries: Set[str] = set()
    if not FTB_QUESTS_DIR.exists():
        logger.warning(f"FTB quests directory not found at {FTB_QUESTS_DIR}")
        return []

    for snbt_path in FTB_QUESTS_DIR.glob("**/*.snbt"):
        if "lang" in snbt_path.parts:
            continue
        try:
            with open(snbt_path, "r", encoding="utf-8") as f:
                content = f.read()

            # Titles & Subtitles
            titles = re.findall(r'title:\s*"([^"]+)"', content)
            subtitles = re.findall(r'subtitle:\s*"([^"]+)"', content)

            for t in titles + subtitles:
                t_clean = t.strip()
                if (
                    t_clean
                    and not t_clean.startswith("{")
                    and not t_clean.startswith("item.")
                    and not t_clean.startswith("block.")
                ):
                    entries.add(t_clean)

            # Description blocks: description: [ "line1", "line2" ]
            for desc_match in re.finditer(r'description:\s*\[([^\]]+)\]', content, re.DOTALL):
                for line in re.finditer(r'"([^"]+)"', desc_match.group(1)):
                    line_clean = line.group(1).strip()
                    if line_clean and not line_clean.startswith("{"):
                        entries.add(line.group(1))
        except Exception as e:
            logger.warning(f"Failed to parse {snbt_path}: {e}")

    # Deterministic sorted order
    return sorted(list(entries))


def process_ftbquests(
    cache: Dict[str, Dict[str, str]],
    target_langs: List[str],
    opencc_only: bool = False,
):
    """Processes FTB Quests for all target languages and writes .snbt dictionaries."""
    quest_strings = extract_ftb_quest_strings()
    logger.info(f"Found {len(quest_strings)} translatable strings in FTB Quests.")

    if not quest_strings:
        return

    FTB_LANG_DIR.mkdir(parents=True, exist_ok=True)

    for lang in target_langs:
        translations = batch_translate_texts(
            quest_strings,
            target_lang=lang,
            cache=cache,
            source_lang="zh_cn",
            opencc_only=opencc_only,
        )

        snbt_file = FTB_LANG_DIR / f"{lang}.snbt"
        dict_data = {}
        for orig in quest_strings:
            dict_data[orig] = translations.get(orig, orig)

        with open(snbt_file, "w", encoding="utf-8") as f:
            json.dump(dict_data, f, ensure_ascii=False, indent=2)
        logger.info(f"[FTB Quests] Generated {lang}.snbt ({len(quest_strings)} entries)")


# ─────────────────────────────────────────────────────────────────────────────
# 7. Submodule & Resource Pack Lang JSON Processing
# ─────────────────────────────────────────────────────────────────────────────
def process_submodule_lang_dir(
    lang_dir: Path,
    cache: Dict[str, Dict[str, str]],
    target_langs: List[str],
    opencc_only: bool = False,
):
    """Synchronizes and generates all 10 language JSONs for a submodule or pack lang directory."""
    if not lang_dir.exists():
        return

    # Find base source language files (prefer zh_cn, fallback en_us)
    zh_file = lang_dir / "zh_cn.json"
    en_file = lang_dir / "en_us.json"

    base_data: Dict[str, str] = {}
    base_lang = "zh_cn"

    if zh_file.exists():
        try:
            with open(zh_file, "r", encoding="utf-8") as f:
                base_data = json.load(f)
                base_lang = "zh_cn"
        except Exception as e:
            logger.warning(f"Error reading {zh_file}: {e}")

    if not base_data and en_file.exists():
        try:
            with open(en_file, "r", encoding="utf-8") as f:
                base_data = json.load(f)
                base_lang = "en_us"
        except Exception as e:
            logger.warning(f"Error reading {en_file}: {e}")

    if not base_data:
        return

    try:
        rel_path = lang_dir.relative_to(PROJECT_ROOT)
    except ValueError:
        rel_path = lang_dir

    logger.info(f"Processing lang dir: {rel_path} ({len(base_data)} keys, base: {base_lang})")

    # Extract all distinct text values
    unique_values = list({v for v in base_data.values() if isinstance(v, str) and v.strip()})

    for lang in target_langs:
        target_file = lang_dir / f"{lang}.json"
        target_data: Dict[str, str] = {}

        if target_file.exists():
            try:
                with open(target_file, "r", encoding="utf-8") as f:
                    target_data = json.load(f)
            except Exception:
                target_data = {}

        # Translate missing values
        trans_map = batch_translate_texts(
            unique_values,
            target_lang=lang,
            cache=cache,
            source_lang=base_lang,
            opencc_only=opencc_only,
        )

        updated_count = 0
        for k, v in base_data.items():
            if k not in target_data or not target_data[k]:
                target_data[k] = trans_map.get(v, v)
                updated_count += 1
            elif lang in ("zh_tw", "zh_hk") and base_lang == "zh_cn":
                # Always keep OpenCC accurate with zh_cn
                conv = convert_traditional_chinese(v, lang)
                if target_data[k] != conv:
                    target_data[k] = conv
                    updated_count += 1

        lang_dir.mkdir(parents=True, exist_ok=True)
        with open(target_file, "w", encoding="utf-8") as f:
            json.dump(target_data, f, ensure_ascii=False, indent=2)

        logger.info(f"  -> [{lang}] {target_file.name} synced ({len(target_data)} keys, +{updated_count} updated)")


# ─────────────────────────────────────────────────────────────────────────────
# 8. Main CLI & Runner
# ─────────────────────────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(description="GTE Multi-Language AI + OpenCC Localization")
    parser.add_argument("--langs", type=str, default="all", help="Comma-separated list of target language codes or 'all'")
    parser.add_argument("--opencc-only", action="store_true", help="Run only OpenCC Traditional Chinese (0 Token)")
    parser.add_argument("--dry-run", action="store_true", help="Simulate without writing files")
    args = parser.parse_args()

    if args.langs == "all":
        target_langs = list(LANGUAGES.keys())
    else:
        target_langs = [l.strip() for l in args.langs.split(",") if l.strip() in LANGUAGES]

    logger.info(f"=== GTE Localization Started (Target Languages: {', '.join(target_langs)}) ===")
    provider = resolve_provider()
    if provider:
        logger.info(f"Active LLM Provider: {provider['name']} (Model: {provider['model']})")
    else:
        logger.info("No active LLM API Key detected. Performing OpenCC 0-Token conversion & base synchronization.")

    cache = load_cache()

    if not args.dry_run:
        # 1. Process FTB Quests
        process_ftbquests(cache, target_langs, opencc_only=args.opencc_only)

        # 2. Discover and process all submodule & pack language directories
        all_lang_dirs = find_all_lang_dirs()
        logger.info(f"Discovered {len(all_lang_dirs)} language directories across project.")
        for lang_dir in all_lang_dirs:
            process_submodule_lang_dir(lang_dir, cache, target_langs, opencc_only=args.opencc_only)

        save_cache(cache)

    logger.info("=== GTE Localization Completed Successfully ===")


if __name__ == "__main__":
    main()
