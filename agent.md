# GTE-Multi Agent Guide (alias)

This lowercase file exists only so agents that look for `agent.md` find the
guide. **It is not the source of truth — do not add rules here.**

> 📖 Read [**`AGENTS.md`**](AGENTS.md) instead. It is the authoritative,
> maintained instruction set for AI coding agents in this repository.

Quick pointers to the sections agents ask for most:

- Environment and JDK 21 requirement → [`AGENTS.md`](AGENTS.md) § Environment
- Build commands → [`AGENTS.md`](AGENTS.md) § Common Commands
- **How to launch the dev client** → [`AGENTS.md`](AGENTS.md) § Launching the Dev Client
- Anti-crash rules (Mixin, jarJar, early window) → [`AGENTS.md`](AGENTS.md) § Development Rules
- Git / PR / submodule workflow → [`AGENTS.md`](AGENTS.md) § Git and PR Workflow
- Detailed runbook and crash post-mortems → [`.agents/skills/gte-workflow/SKILL.md`](.agents/skills/gte-workflow/SKILL.md)

The one-line version of the launch answer, since it is the most common question:

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat runFullPack
```

No window appears for the first ~25 s by design; it is then created behind the
active window and pulled to the front by `scripts/dev/raise_game_window.ps1`.
Never launch via `.vscode/launch.json` — it bypasses `runClient` and the raise.
