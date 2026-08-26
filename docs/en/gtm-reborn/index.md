# GregTech Modern Reborn (GTM Reborn)

`modules/gtm-reborn` is the deeply customized GregTech Modern fork of GTE-Multi (branch name: `satou`).

---

## 🚀 Core Enhanced Features of the `satou` Branch

Compared to the upstream original, GTM-Reborn achieves multiple revolutionary technological advancements and industrial experience upgrades on modern high-version Minecraft 1.20.1:

```mermaid
graph TD
    A[GTM-Reborn satou Branch] --> B[Multi-Amp and Extreme Speed Computing: Multi-Amp Recipes & Subtick 1t OC]
    A --> C[Ultra-Large Batch Processing: 64-bit Long Parallel Computing & Batch Mode]
    A --> D[Full Automation Quality Assurance: GameTest Server-Side Real-Machine Test Suite]
    A --> E[External Integration: CC:Tweaked Computer Interface & EMI/JEI Deep Display]
    A --> F[Fluid and Pipe Network: Ranged Fluid Outputs & Wireless Cover Plates]
```

### 1. 64-bit Long Integer Parallelism and Batch Mode
- **Breaking the 32-bit integer limit**: Parallel computing fully adopts the `long` data type, completely solving numerical overflow or computation truncation issues in ultra-large industrial clusters under extremely high parallelism.
- **Intelligent Batch Mode**: When raw materials are extremely abundant, machines can package hundreds or thousands of tiny recipes into a single cycle, greatly reducing server tick load.

### 2. 1T Subtick Instant Overclocking (OC_PERFECT_SUBTICK)
- Optimizes the machine Recipe Logic execution pipeline, allowing designated advanced machines to complete multiple recipe iterations within a single tick, unleashing the pure limit of industrial production.

### 3. Multi-Amp Input and Recipe Support
- Machine recipes support single-recipe consumption/output of multiple amperes of current, with EMI/JEI interfaces visually rendering multi-amp values and wire specification hints.

### 4. Ranged Fluid Outputs
- Allows high-tier distillation towers and chemical reactors to output fluid products with ranged fluctuations based on different temperature and pressure conditions.

### 5. CC:Tweaked (ComputerCraft) Modern Peripheral Integration
- All standard machines expose peripheral interfaces to ComputerCraft:
  - Real-time query of recipe progress, remaining time, and current EU/t consumption.
  - Dynamically start, pause machines, or switch working modes via Lua scripts.

---

## 🧪 Automated Testing and GameTest Verification

GTM-Reborn includes a complete Minecraft native GameTest automated test suite (located in `src/test`):

```powershell
# Run GameTest automated server-side tests
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat :modules:gtm-reborn:runGameTestServer
```

### Test Coverage Scope
- **Cover System**: Tests throughput and leak-prevention logic of fluid pump covers, item conveyor covers, and energy conduit covers.
- **Machine Recipe Logic**: Tests multi-amp, batch processing, cross-recipe parallelism, and overclocking calculations.
- **Multiblock Formation and Rotation**: Tests structural validation of various casings and hatches under different orientations.

---

## 🌿 Sub-Module Git Workflow Standards

`modules/gtm-reborn` corresponds to the independent Git repository `takanashisatou/GregTech-Modern-Reborn`, with the default development branch `satou`:

```bash
# Develop and commit independently in the submodule
cd modules/gtm-reborn
git checkout satou
git add .
git commit -m "feat: optimize multiblock recipe logic"
git push origin satou

# Return to the main project to update the submodule pointer
cd ../..
git add modules/gtm-reborn
git commit -m "chore: bump gtm-reborn submodule pointer"
```