# GTECore Core Mod Overview

**GTECore** is a custom Java core mod for the GregTech Easy project. It directly depends on the `gtm-reborn` source code, expanding large-scale multiblock industrial structures, advanced formation technology, deep AE2 interaction, and super circuit manufacturing systems.

---

## 🏛️ Mod Architecture and Design Positioning

```mermaid
graph TD
    A[GTM-Reborn Base Framework] --> B[GTECore Core Mod]
    B --> C[Eastern Mystical Industry: Yin-Yang Bagua Immortal Refiner / Four Symbols Formation / Tai Chi Five Elements]
    B --> D[Industrial Extreme Optimization: Ring of Miracles / Comprehensive Ore Processing / Universal Fuel Engine]
    B --> E[AE2 Deep Expansion: ME Pattern Assembly Plus & Mirror / ME Steam Hatch]
    B --> F[Hyperdimensional Circuit System: Superstring Circuit System / Yin-Yang Circuit System]
    B --> G[Automation & Development: Jade Real-time Integration / Structure Testing Terminal / Datagen Internationalization]
```

---

## 📦 Creative Mode Inventory and Categories

GTECore registers a dedicated creative mode tab in-game:

1. **GregTech Easy Machines (`itemGroup.gtecore.gtecore_machines`)**:
   - Contains all GTE original multiblock main blocks (Yin-Yang Bagua Blast Furnace, Ring of Miracles, Ore Processing Center, Chemical Terminator, etc.).
   - Contains multi-tier super battery buffers (Max Super Battery Buffer), ME Steam Hatch, ME Pattern Assembly Plus and Mirror.
2. **GregTech Easy Items (`itemGroup.gtecore.gtecore_items`)**:
   - Contains superstring and yin-yang circuit series items (processors, clusters, supercomputers, mainframes).
   - Contains Five Elements talismans, Bagua chips, Three Pure Particles, Structure Testing Terminal and other special items.

---

## ⚙️ Mod Global Configuration (`GTEConfig`)

GTECore provides rich in-game and file configuration options (located in `config/gtecore-common.toml` or the in-game configuration menu):

| Configuration Option | Default Value | Description |
| :--- | :--- | :--- |
| `superPeace` (Super Peace Mode) | `false` | When enabled, completely disables hostile mob spawning, providing an absolutely pure environment for tech building. |
| `durationMultiplier` (Recipe Duration Multiplier) | `1.0` | Globally adjusts the duration multiplier for GTECore custom recipes. |

---

## 🔍 Jade / TOP Native Integration

GTECore has built-in **`GTEJadePlugin`** plugin support:
- **ME Pattern Assembly Plus Status**: Displays in real-time the number of patterns bound to the current assembly, fluid and item output modes.
- **ME Pattern Assembly Mirror Plus Binding Info**: On hover, directly shows the bound main assembly coordinates `(X, Y, Z)` and network connectivity status.
- **Formation Activation Indicator**: On the Yin-Yang Bagua Immortal Refiner, displays the readiness status of the Four Symbols formations (Azure Dragon, White Tiger, Vermilion Bird, Black Tortoise) in real-time.

---

## 🛠️ Structure Testing Terminal (`Structure Testing Terminal`)

GTECore provides a dedicated handheld tool — **Structure Testing Terminal** (`item.gtecore.check_structure_terminal`):
- **Right-click a multiblock controller**: Scans structural integrity in real-time.
- **Error diagnostic hints**: If the structure is not formed, the terminal will precisely indicate **error block coordinates and positions that should not be placed** in the chat and hover tooltip, greatly accelerating large multiblock construction and troubleshooting.