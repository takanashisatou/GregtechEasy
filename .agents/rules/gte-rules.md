# GTE Project Development Rules

## 1. Mixin & Accessor Safety Rule
- **NEVER** use unchecked direct casts to Mixin `@Accessor` interfaces (e.g. `(AbstractRegistrateAccessor) this`, `(BlockPropertiesAccessor) props`, `(IntegerPropertyAccessor) prop`).
- **ALWAYS** check with `instanceof` and provide a fallback, or use native Vanilla/Forge getters (e.g., `property.getPossibleValues()`).

## 2. Multi-Module Architecture
- Root `build.gradle`: Aggregation tasks (`copyOutputJars`, `publishAllToMaven`, `publishAllToMavenLocal`).
- `modules/gtm-reborn`: GregTech Modern Reborn (branch `satou`).
- `modules/gtecore`: GTE Core Mod (branch `master`).
- `modules/gte-dev-runtime`: Hot debug client/server runtime. Use `modLocalRuntime` for dependencies.
- `gte/overrides/`: Player runtime files. Jars here are for player packs, not raw compile classpaths.

## 3. Dependency Repositories
- All Maven repositories MUST be declared in `gradle/scripts/repositories.gradle`.
- All compile/runtime dependency jars MUST be backed up in `modules/gtecore/gradle/libs/` and registered in `gradle/forge.versions.toml`.
