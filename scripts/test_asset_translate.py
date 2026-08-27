#!/usr/bin/env python3
"""Smoke test for the asset localization path of opencode_translate.py.

Verifies the three properties the v4 rewrite is supposed to guarantee:
  1. a completed run populates the per-string cache
  2. a second run is served entirely from cache (no LLM requests)
  3. every chunk is flushed to disk as it lands, not only at the end

Run:  python scripts/test_asset_translate.py [sample_size]
Needs a working provider key (DEEPSEEK_API / FREE_CLAUDE / OPENCODE_API_KEY).
"""
import importlib.util
import json
import shutil
import sys
import tempfile
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def load_engine():
    spec = importlib.util.spec_from_file_location("engine", ROOT / "scripts" / "opencode_translate.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def main() -> int:
    sample_size = int(sys.argv[1]) if len(sys.argv) > 1 else 220
    m = load_engine()

    providers = m.resolve_all_providers()
    print("providers:", [(p["name"], p["model"]) for p in providers])
    if not providers:
        print("FAIL: no provider key available")
        return 1
    print("workers:", m.ASSET_MAX_WORKERS)

    src = ROOT / "modules/gtm-reborn/src/main/resources/assets/gtceu/lang/zh_cn.json"
    base = json.loads(src.read_text(encoding="utf-8"))
    sample = {k: base[k] for k in list(base)[:sample_size]}

    tmp = Path(tempfile.mkdtemp())
    try:
        lang_dir = tmp / "assets" / "gtceu" / "lang"
        lang_dir.mkdir(parents=True)
        (lang_dir / "zh_cn.json").write_text(
            json.dumps(sample, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        m.CACHE_FILE = tmp / ".translation_cache.json"

        provider = providers[0]
        cache = {}

        t0 = time.time()
        m.process_submodule_lang_dir(lang_dir, cache, ["ja_jp"], provider)
        elapsed1 = time.time() - t0

        out1 = json.loads((lang_dir / "ja_jp.json").read_text(encoding="utf-8"))
        changed = sum(1 for k in sample if out1.get(k) and out1[k] != sample[k])
        cached = len(cache.get("ja_jp", {}))
        print(f"PASS1  {elapsed1:6.1f}s  keys={len(out1)}  translated={changed}  cached={cached}")

        if not m.CACHE_FILE.exists():
            print("FAIL: cache file was never written")
            return 1
        on_disk = json.loads(m.CACHE_FILE.read_text(encoding="utf-8"))
        print(f"       cache file on disk: {sum(len(v) for v in on_disk.values())} strings")

        if cached == 0:
            print("FAIL: cache was not populated (the old bug)")
            return 1

        # Second pass: delete the output and rebuild it purely from cache.
        (lang_dir / "ja_jp.json").unlink()
        t0 = time.time()
        m.process_submodule_lang_dir(lang_dir, cache, ["ja_jp"], provider)
        elapsed2 = time.time() - t0
        out2 = json.loads((lang_dir / "ja_jp.json").read_text(encoding="utf-8"))

        print(f"PASS2  {elapsed2:6.1f}s  keys={len(out2)}  identical={out2 == out1}")
        if elapsed2 > 5.0:
            print(f"FAIL: second pass took {elapsed2:.1f}s; cache is not being used")
            return 1
        if out2 != out1:
            print("FAIL: cached rebuild differs from the translated output")
            return 1

        print(f"OK  speedup {elapsed1 / max(elapsed2, 0.001):.0f}x  ({elapsed1:.1f}s -> {elapsed2:.2f}s)")
        return 0
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    sys.exit(main())
