#!/usr/bin/env python3
"""
OpenCode AI Translation Script for GTE-Multi
Translates FTB Quests, GTECore and GTM-Reborn mod language files using OpenCode platform deepseek-v4-flash.
"""

import os
import re
import json
import glob
import logging
from pathlib import Path
from typing import Dict, List, Any

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("OpenCodeTranslate")

OPENCODE_API_KEY = os.environ.get("OPENCODE_API_KEY", "").strip()
OPENCODE_BASE_URL = os.environ.get("OPENCODE_BASE_URL", "https://api.opencode.ai/v1").rstrip("/")
MODEL_NAME = os.environ.get("OPENCODE_MODEL", "deepseek-v4-flash")

PROJECT_ROOT = Path(__file__).resolve().parent.parent
FTB_QUESTS_DIR = PROJECT_ROOT / "gte" / "overrides" / "config" / "ftbquests" / "quests"
FTB_LANG_DIR = FTB_QUESTS_DIR / "lang"
GTECORE_LANG_DIR = PROJECT_ROOT / "modules" / "gtecore" / "src" / "main" / "resources" / "assets" / "gtecore" / "lang"
GTM_LANG_DIR = PROJECT_ROOT / "modules" / "gtm-reborn" / "src" / "main" / "resources" / "assets" / "gtceu" / "lang"
CACHE_FILE = PROJECT_ROOT / ".translation_cache.json"

def load_cache() -> Dict[str, str]:
    if CACHE_FILE.exists():
        try:
            with open(CACHE_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            logger.warning(f"Failed to load cache: {e}")
    return {}

def save_cache(cache: Dict[str, str]):
    try:
        with open(CACHE_FILE, "w", encoding="utf-8") as f:
            json.dump(cache, f, ensure_ascii=False, indent=2)
    except Exception as e:
        logger.warning(f"Failed to save cache: {e}")

def call_opencode_translate(texts: List[str], target_lang: str = "zh_cn", source_lang: str = "en_us") -> Dict[str, str]:
    """
    Translates a batch of texts using OpenCode deepseek-v4-flash.
    """
    if not texts:
        return {}
    if not OPENCODE_API_KEY:
        logger.warning("OPENCODE_API_KEY is not set. Skipping API translation calls.")
        return {t: t for t in texts}

    try:
        import requests
    except ImportError:
        logger.error("requests library is missing. Run `pip install requests`.")
        return {t: t for t in texts}

    prompt = (
        f"You are a professional Minecraft Modpack localization expert specializing in GregTech and tech modpacks.\n"
        f"Translate the following text items from {source_lang} to {target_lang}.\n"
        f"Preserve all Minecraft color formatting codes (e.g. §a, §c, &4), placeholder formatting (%s, %d, {0}), "
        f"and technical GregTech terms (e.g. UHV, EU/t, Amps, Voltage, Overclock, Subtick).\n"
        f"Input is a JSON list of strings. Return ONLY a valid JSON object mapping original text to translated text, without markdown fencing.\n"
    )

    headers = {
        "Authorization": f"Bearer {OPENCODE_API_KEY}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "system", "content": prompt},
            {"role": "user", "content": json.dumps(texts, ensure_ascii=False)}
        ],
        "temperature": 0.2,
    }

    try:
        url = f"{OPENCODE_BASE_URL}/chat/completions"
        logger.info(f"Requesting translation for {len(texts)} entries from OpenCode API ({MODEL_NAME})...")
        resp = requests.post(url, headers=headers, json=payload, timeout=60)
        resp.raise_for_status()
        res_json = resp.json()
        content = res_json["choices"][0]["message"]["content"].strip()
        
        # Strip potential markdown fences
        content = re.sub(r"^```(json)?\s*", "", content, flags=re.MULTILINE)
        content = re.sub(r"\s*```$", "", content, flags=re.MULTILINE)
        
        translated_map = json.loads(content)
        return translated_map
    except Exception as e:
        logger.error(f"OpenCode API translation error: {e}")
        return {t: t for t in texts}

def extract_ftb_quest_strings() -> Dict[str, str]:
    """
    Extracts all translatable quest strings from chapters.
    """
    entries = {}
    chapters_dir = FTB_QUESTS_DIR / "chapters"
    if not chapters_dir.exists():
        logger.warning(f"FTB chapters directory not found at {chapters_dir}")
        return entries

    for snbt_path in chapters_dir.glob("*.snbt"):
        try:
            with open(snbt_path, "r", encoding="utf-8") as f:
                content = f.read()

            # Regex for quest keys, titles, descriptions
            titles = re.findall(r'title:\s*"([^"]+)"', content)
            subtitles = re.findall(r'subtitle:\s*"([^"]+)"', content)
            descriptions = re.findall(r'"([^"]+)"', re.sub(r'id:\s*"[^"]+"', '', content))

            for t in titles + subtitles:
                if t.strip() and not t.startswith("{") and not t.startswith("item.") and not t.startswith("block."):
                    entries[t] = t
        except Exception as e:
            logger.warning(f"Failed to parse {snbt_path}: {e}")
    return entries

def translate_and_save_ftbquests(cache: Dict[str, str]):
    quest_strings = extract_ftb_quest_strings()
    logger.info(f"Found {len(quest_strings)} translatable strings in FTB Quests.")
    
    needed = [k for k in quest_strings if k not in cache]
    if needed and OPENCODE_API_KEY:
        # Batch in chunks of 50
        chunk_size = 50
        for i in range(0, len(needed), chunk_size):
            chunk = needed[i:i + chunk_size]
            translations = call_opencode_translate(chunk, target_lang="zh_cn")
            cache.update(translations)
        save_cache(cache)

    FT_LANG_DIR = FTB_QUESTS_DIR / "lang"
    FT_LANG_DIR.mkdir(parents=True, exist_ok=True)

    zh_snbt_path = FT_LANG_DIR / "zh_cn.snbt"
    en_snbt_path = FT_LANG_DIR / "en_us.snbt"

    with open(zh_snbt_path, "w", encoding="utf-8") as f:
        f.write("{\n")
        for orig in quest_strings:
            trans = cache.get(orig, orig).replace('"', '\\"')
            orig_esc = orig.replace('"', '\\"')
            f.write(f'  "{orig_esc}": "{trans}",\n')
        f.write("}\n")

    with open(en_snbt_path, "w", encoding="utf-8") as f:
        f.write("{\n")
        for orig in quest_strings:
            orig_esc = orig.replace('"', '\\"')
            f.write(f'  "{orig_esc}": "{orig_esc}",\n')
        f.write("}\n")

    logger.info(f"Saved FTB Quests language files to {FT_LANG_DIR}")

def translate_json_lang_file(json_path: Path, target_json_path: Path, cache: Dict[str, str]):
    if not json_path.exists():
        return
    try:
        with open(json_path, "r", encoding="utf-8") as f:
            src_data: Dict[str, str] = json.load(f)
    except Exception as e:
        logger.warning(f"Could not read {json_path}: {e}")
        return

    dest_data = {}
    if target_json_path.exists():
        try:
            with open(target_json_path, "r", encoding="utf-8") as f:
                dest_data = json.load(f)
        except Exception:
            dest_data = {}

    needed_keys = [k for k, v in src_data.items() if k not in dest_data and v not in cache]
    needed_values = list({src_data[k] for k in needed_keys if src_data[k]})

    if needed_values and OPENCODE_API_KEY:
        chunk_size = 50
        for i in range(0, len(needed_values), chunk_size):
            chunk = needed_values[i:i + chunk_size]
            translations = call_opencode_translate(chunk, target_lang="zh_cn")
            cache.update(translations)
        save_cache(cache)

    for k, v in src_data.items():
        if k in dest_data:
            continue
        dest_data[k] = cache.get(v, v)

    target_json_path.parent.mkdir(parents=True, exist_ok=True)
    with open(target_json_path, "w", encoding="utf-8") as f:
        json.dump(dest_data, f, ensure_ascii=False, indent=2)
    logger.info(f"Updated language file: {target_json_path}")

def main():
    logger.info("=== Starting GTE OpenCode AI Translation ===")
    cache = load_cache()

    # 1. Translate FTB Quests
    translate_and_save_ftbquests(cache)

    # 2. Translate GTECore lang
    if GTECORE_LANG_DIR.exists():
        en_file = GTECORE_LANG_DIR / "en_us.json"
        zh_file = GTECORE_LANG_DIR / "zh_cn.json"
        if en_file.exists():
            translate_json_lang_file(en_file, zh_file, cache)

    # 3. Translate GTM-Reborn lang
    if GTM_LANG_DIR.exists():
        en_file = GTM_LANG_DIR / "en_us.json"
        zh_file = GTM_LANG_DIR / "zh_cn.json"
        if en_file.exists():
            translate_json_lang_file(en_file, zh_file, cache)

    save_cache(cache)
    logger.info("=== Translation completed successfully ===")

if __name__ == "__main__":
    main()
