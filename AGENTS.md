# GTE-Multi Agent Guide

Shared instructions for agents working in this repository. Follow the user's explicit scope and existing authorization; this guide does not authorize unrelated packaging, publication, or external actions.

## Task Scope and Completion

- Static analysis/review: inspect the requested commit and deliver findings with evidence. Do not automatically edit code or start the game.
- Source fixes/development: make changes in the owning module, run applicable validation, and complete the authorized source PR and root-pointer PR flow.
- Documentation, skills, and test-fixture changes: validate the changed files or affected tests. Do not turn them into player-pack builds or client launches.
- Production JAR refreshes, pack assembly, releases, and Maven publication are separate workflows, used only when the user requests them.
- CI may automatically create a module-JAR refresh PR after a source merge. Its existence is not permission to follow or merge it. A source task ends when its requested source changes and authorized PR flow are complete.
- When the user excludes production JAR changes, keep `gte/overrides/mods/` out of the submitted diff. Normal source CI may still compile temporary artifacts.
- Preserve current user changes and already granted authorization. Do not repeat permission questions for steps already authorized.

## Repository and Environment

GTE-Multi targets Minecraft Forge 1.20.1 and JDK 21. The root repository is `takanashisatou/GregtechEasy`, base branch `main`.

| Location | Ownership / PR base |
| --- | --- |
| `modules/gtm-reborn` | GregTech Modern Reborn submodule; `satou` |
| `modules/gt--` | GT-- Community Edition submodule; `kotlin`; retains modId `gtnn` |
| `modules/gtecore` | GTE Core submodule; `master` |
| `modules/docs` | Docs/wiki submodule; `main` |
| `modules/gte-dev-runtime` | Root-owned hot-debug runner; not published |
| `gte/` | Root-owned pack configuration and overrides |

Use `.gitmodules`, Gradle configuration, and the current workflows as the source of version/branch details. Do not copy historical version numbers or assume a release is currently blocked/ready from an old note.

On this Windows host, set `JAVA_HOME` to the configured JDK 21 before Gradle:

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat :modules:gtecore:compileJava -Pwerror --console=plain
```

Inspect root and affected submodule status before editing. Do not run `git init`, `git reset --hard`, discard changes, or rewrite `main`. For a request about aggregate `main`, use its recorded gitlinks as the baseline, not whichever submodule branch is locally checked out.

## Search and Change Boundaries

- Follow Chinese name -> `zh_cn.json` -> registry ID -> owning Java/Kotlin/assets. Scope `rg` to the relevant module/file; do not run unconstrained root searches for vague terms.
- Trace machine registration, controller/parent, recipe type, conditions/modifiers, and Java/KubeJS recipe sources before diagnosing a recipe failure.
- Extract dimensions, symbol counts, and predicates from large structure matrices instead of printing every giant `.aisle(...)` line.
- Keep feature edits in their owning submodule. Root documentation, shared tooling, pack configuration, and runtime-runner edits belong in the root repository.
- Keep downstream requirements downstream. GTECore-specific behavior, integration, and performance optimizations belong in `modules/gtecore`; do not change `modules/gtm-reborn` or another upstream module to implement them. Before editing upstream code, establish that the defect or requirement belongs to that upstream module independently of GTECore, identify its shared consumers, and keep the change limited to that upstream responsibility. Similar class names or convenient access to an upstream implementation do not justify crossing this boundary. Do not mirror downstream optimizations upstream merely for consistency.
- Prefer one evidence-based fix. Read the first relevant exception/assertion and distinguish implementation, test-fixture, and environment failures before changing unrelated mods or settings.
- Do not refactor or optimize from a local code fragment or a guessed bottleneck. Read the affected interface contract, its callers (including dependency implementations), and downstream consumers before changing behavior; preserve existing semantics across the affected lifecycle.
- Callback, listener, cache, and persistence changes must preserve their API contracts. In particular, a callback getter returns the stored callback and its setter replaces it; adding listeners is a separate operation. Never substitute a dispatcher for a stored callback without checking how callers wrap and invoke it. For these changes, verify initialization, content changes, and save/load behavior using applicable existing checks or direct runtime inspection; do not add tests when the user excludes them.
- Performance claims require measured evidence. Do not present estimated handler-count reductions or lookup savings as verified results, and do not trade correctness or compatibility in another path for a local optimization. State any unverified behavior explicitly.

## Runtime and Registration Invariants

- Never force-cast Mixin accessor interfaces; use guarded `instanceof` or vanilla APIs. Keep remap enabled for `net.minecraft.*` and `net.minecraftforge.*` Mixin targets.
- Use `modLocalRuntime` for named dev-runtime dependencies and the appropriate `modCompileOnly` / `compileOnly` configuration for compile references.
- A submodule's `legacyForge.mods` contains only that module's own source set. Wire sibling code through Gradle project dependencies; only `gte-dev-runtime` aggregates multi-mod source sets.
- Do not rely on SRG jarJar embeds in named dev runs. Dev JARs exclude `META-INF/jarjar/**`; `jarWithEmbeds` feeds production `reobfJar`. Each run loading an embedding module must provide matching named standalone libraries. For mods.toml-less libraries, use Maven coordinates and preserve the artifact filename for deduplication.
- For pack mods used by the dev runner, preserve its versioned local-Maven coordinate/remap path. Avoid version-less `modLocalRuntime(name: ...)` and keep `gte.mods` excluded from unrelated remote repositories.
- For `gtecore`, after adding/renaming registered content, language keys, or tags, update `datagen/Lang.java` with `provider.add(key, en, zh)` and run `:modules:gtecore:runData`. Other modules use their own data/language providers. Never hand-edit `src/generated/`.
- Target textures/models must be fully written before their datagen runs. If asset work is delegated or parallelized, wait for the asset workers before starting dependent datagen.
- The dev runner links selected `run/client` configuration/script directories to `gte/overrides`. In-game quest/script edits may therefore become tracked changes; saves and logs belong under `run/`. Preserve those edits and stage only intended paths.
- Never edit entries inside third-party JARs or copy dev-remapped output into the production pack. Fix dependency coordinates/versions or consume a reproducible published release.

## Validation

| Change | Applicable checks |
| --- | --- |
| Documentation/skills | Structure/frontmatter as applicable, reference links, `git diff --check`; no Gradle or client launch solely for prose |
| Java/Kotlin behavior | Strict compilation plus relevant tests and applicable audits |
| Covers/machine behavior | Run `:modules:gtm-reborn:runGameTestServer` before changing behavior, then validate the affected implementation |
| GTECore GameTest fixtures | `:modules:gtecore:runGameTestServer`; keep required tests and neighboring batch/template conventions |
| GTECore registered content/data | `:modules:gtecore:runData`, followed by generated-resource inspection |
| Requested pack changes | Current pack gates and an actual client launch when validating a pack/runtime fix |

Required tests must pass; optional GameTests may fail without failing CI. Verify the actual final required-test result, not merely a zero process exit code. Rerun/broaden checks only for changed behavior, failures, or unresolved evidence.

`empty` GameTest templates clear only their own footprint. Large structures need an explicitly cleared, isolated site within world height bounds. Creative autobuild preserves non-air blocks and may add optional parts: start quantity assertions from a known part count. Initialize real hatches/tier through formation when testing recipe execution. Details: [GameTest workflow](.agents/skills/gte-multiblock/references/gametest_workflow.md).

When the same mistake repeatedly escapes manual checks, add an appropriate automated gate instead of accumulating longer warnings. Select the relevant existing `scripts/audit_*.py` checks for the change.

## Development Client

Launch only when requested or needed for the runtime/graphics issue. From the root, use `runFullPack` or `:modules:gte-dev-runtime:runClient`; `run_game.bat` / `run_game.sh` use the supported Gradle path too.

With Embeddium/Oculus, keep `earlyWindowControl=false` in `config/fml.toml` and retain `-Dfml.earlyprogresswindow=false` / `-Dforge.earlyWindow=false`. Do not re-enable the early window to solve a missing/covered game window.

Gradle arms the window-raise helper; generated `.vscode/launch.json` configurations bypass it and are not the supported launch path. Do not hand-edit those generated launch configurations. Confirm the run's own JVM/window and logs before calling a launch broken; avoid stopping the user's other instances.

Runtime dependency, window, debug-dump, and linking details are in [runtime troubleshooting](.agents/skills/gte-workflow/references/runtime_troubleshooting.md), read only for the matching symptom.

## Git and PR Flow

1. Create a feature branch in the owning repository (default prefix `codex/`). Confirm the current branch before every commit; never commit/push directly to a target branch, including one-line fixes and CI changes.
2. Commit and push the intended changes, open the PR against the base in the ownership table, and wait for the relevant CI on its actual head SHA to conclude successfully.
3. Squash merge within the user's authorized scope. After a submodule merge, use its merged commit in a separate root-pointer PR and wait for root CI before merging.
4. Do not push another change while that branch's CI is running unless cancelling the old run is intentional. Do not report success from cancelled, in-flight, missing, or different-SHA checks.
5. Read concrete CI failures before retrying. Do not weaken required checks, remove tests, or stack speculative changes to obtain green status. Revert a bad change through a reviewable PR rather than rewriting `main`.

The root requires `PR Validation` through its protected-branch flow. Check current branch protection/workflow behavior when needed; do not assume historical protection status or bypass it. Existing authorization to finish this flow does not authorize additional release or JAR PRs.

## Pack and CI Reference

These constraints apply when the user's task includes the relevant pack/CI operation:

- `gte/overrides/mods/` is CI-owned. Module versions come from module `gradle.properties`; runtime dependency versions come from Gradle coordinates/catalogs. Keep Minecraft/Forge/mapping changes consistent across root configuration, `gradle/libs.versions.toml`, and `gte/pack.toml` where applicable.
- One modId, one JAR. Read only the `[[mods]]` declarations in `META-INF/mods.toml`, not dependency sections. Upstream GT-- and the CE fork both declare `gtnn` and cannot coexist.
- Pack JARs must be reproducible production/SRG artifacts; exclude dev, sources, slim/embedded intermediates as specified by the current assembly workflow. A matching filename or version is not proof of correct mapping or freshness.
- `sync-build.yml` compiles/tests modules and assembles artifacts. Its current push-to-main/master path opens `chore/refresh-module-jars-<run_id>` PRs for rebuilt committed JARs. It has no cron and must not publish the rolling `nightly` prerelease.
- `lazypack.yml` is manual, pack-only, and the sole rolling `nightly` producer. It compiles nothing and ships committed JARs. It enforces duplicate modId (1b), production mapping (1c), module freshness (1d), and dev/pack parity (1e); `publish=false` skips release publication.
- Gate 1d belongs to the committed-pack shipping path, not a build job that has only rebuilt uncommitted files. Gate 1e uses modId keys and exact catalog resource-name values for `packModsAlreadyProvided`; known differences belong in `scripts/dev_pack_parity_baseline.json`, not new unreviewed drift.
- `translate.yml` translates assets; it does not compile/transfer module JARs. Its current docs step directly pushes `main`; the root `create_pr` option does not cover that submodule step. This legacy behavior is not permission to bypass PR rules. Verify a compliant path for requested translation work; do not turn this note into an unrequested workflow repair.
- `release-publish.yml` and `curseforge-publish.yml` handle requested releases/CurseForge operations. Follow their current inputs and [CurseForge release guide](docs/curseforge-release.md).
- Read release assets through the paginated REST assets endpoint; delete authorized assets by id, including `state=starter` entries. Do not rely on the capped `gh release view --json assets` snapshot or delete by guessed name.
- Translation/API credentials come from configured environment/secrets; never hardcode keys.

For a broken pack, compare shipped files/hashes against the last healthy build and read the crash's Mod List / MOD blocks before changing content. Do not guess duplicate JARs by filename, disable unrelated Mixin features, or stack unrelated mod upgrades to hide the first failure.

Read [packaging and release guidance](.agents/skills/gte-workflow/references/packaging_and_release.md) only when that workflow is requested. Source fixes need not resolve stale player-pack JARs as an unrelated follow-up.

## Skills and Delegation

Project `.agents/skills/` is the maintained source. Do not recreate old same-name global copies or archive obsolete instructions inside searchable skill directories. `.codex/rules.md` is only a short entrypoint, not a second rulebook.

| Skill | Use when |
| --- | --- |
| [gte-workflow](.agents/skills/gte-workflow/SKILL.md) | Module development, dependency/runtime diagnosis, source PRs |
| [gte-multiblock](.agents/skills/gte-multiblock/SKILL.md) | Existing/new machines, patterns, recipe conditions/modifiers, structure tests |
| [gte-multiblock-architecture](.agents/skills/gte-multiblock-architecture/SKILL.md) | Designing new shapes or geometric matrices |
| [gte-pixel-lab](.agents/skills/gte-pixel-lab/SKILL.md) | Texture, animation, palette, CTM inspection or edits |
| [gte-quest-lab](.agents/skills/gte-quest-lab/SKILL.md) | In-game quests, chapter dependencies/rewards and quest translations |

Read the relevant skill before changing module, build, CI, asset, or quest content; load references only as needed. Use [README.md](README.md) for the developer quick start.

Delegation is not automatic. When subagents are authorized, follow the user's model preference: use `gpt-6-astra` unless explicitly asked otherwise; report unavailability before substituting another model. Keep shared edits and dependent asset/datagen work coordinated.
