# GTE-Multi Agent Guide

This file is the shared instruction set for AI coding agents (Codex, Claude,
Cursor, Gemini, Antigravity, etc.) working in this repository.

## Project Overview

GTE-Multi is a multi-module Minecraft Forge 1.20.1 project running on JDK 21.
It aggregates several git repositories as submodules:

- `modules/gtm-reborn` - GregTech Modern Reborn fork, branch `satou`
- `modules/gt--` - GT-- Community Edition addon, branch `kotlin`
- `modules/gtecore` - GTE Core mod, branch `master`
- `modules/docs` - GregTech Easy Docs & Wiki, branch `main`
- `modules/gte-dev-runtime` - local hot-debug runtime (not published)
- `gte/` - Packwiz modpack root and overrides

Root repository: `takanashisatou/GregtechEasy`, default branch `main`.

## Environment

- JDK 21 is required: `C:\Users\Ex_Je\.jdks\ms-21.0.11`
- Set `JAVA_HOME` before Gradle commands on Windows.
- The repository may be a local git checkout with submodule directories;
  do not run `git init`, `git reset --hard`, or discard user changes.

## Common Commands

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava
.\gradlew.bat :modules:gtm-reborn:test
.\gradlew.bat :modules:gtm-reborn:runGameTestServer
.\gradlew.bat :modules:gte-dev-runtime:runClient
.\gradlew.bat :modules:gtm-reborn:spotlessApply
python scripts/build_full_mod_pack.py <version>
```

`run_game.bat` / `run_game.sh` auto-detect CPU/RAM and start the hot-debug
client without a launcher.

## Development Rules

1. Never force-cast Mixin accessor interfaces. Use `instanceof` guards or
   vanilla APIs instead.
2. Do not add Oculus, Embeddium, ModernFix, or ModernUI to `gte-dev-runtime`;
   production shader/optimizer jars break deobfuscated dev runs.
3. Use `modLocalRuntime` for dev runtime mods and `modCompileOnly` /
   `compileOnly` for compile-time dependencies.
4. Preserve existing uncommitted changes. Work with them; do not revert them.
5. Keep edits scoped to the submodule that owns the feature.
6. Never set `remap = false` on Mixin targets targeting `net.minecraft.*` or
   `net.minecraftforge.*` classes. It will pass dev runs but crash in production.

## Game Tests

- Game tests live under `modules/gtm-reborn/src/test`.
- Required tests must pass; optional tests may fail without failing CI.
- Run `:modules:gtm-reborn:runGameTestServer` before changing cover or machine
  behavior.
- When adding a test, use the same batch/template conventions as nearby tests.

## Git and PR Workflow

1. Create a feature branch inside the owning submodule.
2. Commit and push it to the submodule remote.
3. Open a PR:
   - `gtm-reborn` -> base `satou`
   - `gtecore` -> base `master`
   - `gt--` -> base `kotlin`
   - root `GregtechEasy` -> base `main`
4. Wait for CI to go green, then squash merge.
5. After a submodule merge, bump the submodule pointer in the root repository
   with a separate root PR and wait for root CI.

## CI / Release

- `.github/workflows/sync-build.yml` builds all modules in one Gradle call,
  runs gtm-reborn tests/game tests, translates language files, and packs
  Full-Mod & Server artifacts. It publishes rolling nightlies and tags.
- `.github/workflows/release-publish.yml` implements manual releases:
  dispatch with a version -> create `dev -> release` PR -> squash merge ->
  tag `v<version>` -> tag workflow publishes.
- `.github/workflows/curseforge-publish.yml` implements standalone CurseForge
  publishing: compiles and publishes submodule mods (`gtm-reborn`, `gtecore`,
  `gt--`) to CurseForge first, builds a pure `manifest.json` modpack with
  ZERO bundled jars in `overrides/`, and uploads to CurseForge platform.
- Translation providers are selected through environment variables
  (`DEEPSEEK_API_KEY`, `GEMINI_API_KEY`, `OPENAI_API_KEY`,
  `DASHSCOPE_API_KEY`, `MOONSHOT_API_KEY`, `ZHIPU_API_KEY`,
  `OPENCODE_API_KEY`, or `LLM_API_KEY`). Never hardcode keys.

## Cross-Agent Skills

Project-specific guidance also lives in:

- `.agents/skills/gte-workflow/SKILL.md` - GTE development runbook
- `.codex/rules.md` - detailed project rules
- `README.md` - developer-facing quick start

Read the relevant skill before changing build, Gradle, CI, or module code.
