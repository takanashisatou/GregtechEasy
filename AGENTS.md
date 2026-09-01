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
.\gradlew.bat :modules:gtecore:runData
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
2. When running `runClient` with optimization and shader mods (Embeddium / Oculus) in `modLocalRuntime`, ALWAYS ensure `earlyWindowControl = false` in `config/fml.toml` (as well as passing `-Dfml.earlyprogresswindow=false` and `-Dforge.earlyWindow=false` in `runs.client`).
   - On Windows with discrete GPUs (e.g. NVIDIA RTX series), Forge's `fmlearlywindow` (Early Progress Window) spawns a separate background GLFW/OpenGL rendering thread (`pool-2-thread-1`) that conflicts with Embeddium/Oculus pipeline hooks during window creation, causing silent GLFW context deadlocks where the client freezes in background and never pops up.
   - Forge 47.4.1's `FMLConfig` prioritizes `earlyWindowControl` inside `config/fml.toml`. Setting `earlyWindowControl = false` causes Forge to use `DummyProvider` (`ImmediateWindowProvider not loading because splash screen is disabled`), forcing GLFW window creation directly on the main Render Thread so the window pops up smoothly.
3. Use `modLocalRuntime` for dev runtime mods and `modCompileOnly` /
   `compileOnly` for compile-time dependencies.
4. Preserve existing uncommitted changes. Work with them; do not revert them.
5. Keep edits scoped to the submodule that owns the feature.
6. Never set `remap = false` on Mixin targets targeting `net.minecraft.*` or
   `net.minecraftforge.*` classes. It will pass dev runs but crash in production.
7. Follow the systematic 3-step search pipeline: Chinese names -> `zh_cn.json` ->
   Registry IDs -> Target Java class/assets. Never run unconstrained root greps.
   (See `.agents/skills/gte-workflow/references/code_search_runbook.md`).
8. After adding or renaming any registered content in `gtecore` (items, blocks,
   machines, tooltips), ALWAYS run `.\gradlew.bat :modules:gtecore:runData` to
   regenerate `src/generated/resources/` (lang files, item models, circuit/item
   tags). NEVER hand-edit files under `src/generated/` — datagen overwrites
   them. Bilingual lang entries belong in
   `modules/gtecore/.../datagen/Lang.java` (`provider.add(key, en, zh)`), which
   is the source of truth that `runData` uses to regenerate
   `en_us.json` / `zh_cn.json`.
9. Never rely on `jarJar` embeds in dev runs. jarJar resolves SRG
   (production-mapped) jars, and FML extracts them verbatim into named dev
   runtimes, causing probabilistic `NoSuchFieldError` crashes (see
   `.agents/skills/gte-workflow/SKILL.md` Case 6). Dev jars exclude
   `META-INF/jarjar/**`; production `reobfJar` output keeps embeds via
   `jarWithEmbeds`. Any library a module embeds via `jarJar` must also be
   declared as a named `modLocalRuntime(...)` in every run configuration that
   loads that module (Registrate, ldlib, configuration, ponder, flywheel,
   mixinextras 0.5.5, kotlinforforge as applicable). For mods.toml-less
   libraries, FML dedup matches by jar file name — use maven coordinates so
   the standalone jar keeps its artifact name, never renamed curse files.
10. Never attach sibling source sets (e.g. `gtceu { sourceSet(...) }` or `gtnn { sourceSet(...) }`) inside a submodule's `legacyForge.mods {}` block.
    - Doing so registers sibling mods as active Datagen/Runtime contributors in Forge's `DatagenModLoader` and ModLauncher, causing Registrate classloader collisions (`ClassCastException: RegistrateBlockstateProvider cannot be cast to GTBlockstateProvider`) during `.\gradlew.bat :modules:gtecore:runData` as well as classloading/lifecycle conflicts during `runClient`.
    - Cross-submodule code dependencies must strictly use standard Gradle dependency wiring (`implementation(requireSibling(':modules:gtm-reborn', 'gtm-reborn')) { transitive = false }`), keeping each submodule's `mods {}` strictly to its own `"${mod_id}"`. (Only the dedicated runner `gte-dev-runtime` aggregates multi-mod source sets for full-pack hot debug).
11. Strictly respect Parallel Subagent Asset Dependencies during DataGen.
    - When using parallel subagents for asset creation (textures/models) and code registration, `runData` MUST NEVER be triggered prematurely by code subagents while asset subagents are still generating or writing PNG textures to disk.
    - Registrate / Forge Datagen requires all target texture PNG files to be firmly written on disk before execution to avoid corrupt/missing model JSON definitions. Always ensure all parallel asset workers have finished before running `.\gradlew.bat :modules:gtecore:runData`.
12. Real-Time Dev Environment Linking:
    - `modules/gte-dev-runtime` automatically creates Directory Junctions (`mklink /J` on Windows, symlinks on POSIX) linking `run/client/{kubejs, config/ftbquests, defaultconfigs, tlm_custom_pack}` to `gte/overrides/`.
    - This allows in-game quest editing and KubeJS script development during `runClient` to be reflected and committed to Git in real-time, while keeping test saves and runtime logs safely confined to `run/client/`.

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

## Recommended LLMs / AI Models

For coding, refactoring, multiblock architecture, and multi-module submodule maintenance in this repository, the following high-capability reasoning models are recommended:

- **Google Gemini (Gemini 3.7 Flash)** - Exceptional long-context comprehension, strong multi-module project awareness, and robust build issue diagnosis.
- **DeepSeek (DeepSeek-V4 Flash / Flash Vision Exp)** - High precision code generation, rapid algorithmic reasoning, and accurate texture/asset awareness.
- **OpenAI (GPT 5.6 系列 / GPT-5.6 Sol)** - Advanced multi-step planning, strict schema compliance, and architectural refactoring.

## Cross-Agent Skills

Project-specific guidance also lives in:

- `.agents/skills/gte-workflow/SKILL.md` - GTE development runbook
- `.agents/skills/gte-pixel-lab/SKILL.md` - Universal Minecraft pixel art, CTM inspection, and animation toolset (`python scripts/texture_lab/pixel_tool.py <cmd>`)
- `.agents/skills/gte-multiblock/SKILL.md` - GTE multiblock structure creation, registry, and recipe modifiers
- `.agents/skills/gte-multiblock-architecture/SKILL.md` - Multiblock 3D geometric modeling and pattern generation
- `.codex/rules.md` - detailed project rules
- `README.md` - developer-facing quick start

Read the relevant skill before changing build, Gradle, CI, texture, or module code.
