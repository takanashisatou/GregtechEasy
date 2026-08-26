# AE2 Deep Integration and Pattern Buffer Plus System

GTECore builds an extremely powerful direct data interconnection bridge between Applied Energistics 2 (AE2) and GregTech multiblock structures.

---

## 🧩 ME Pattern Buffer Plus (`me_pattern_buffer_plus`)

In traditional tech mods, connecting AE2 pattern providers to multiblock machines often faces the pain points of **insufficient slots, inability to mix fluid and item outputs, and difficulty in sharing patterns across multiple machines**.

GTECore's **ME Pattern Buffer Plus** completely solves this problem:

```mermaid
graph TD
    A[AE2 ME Network] --> B[ME Pattern Buffer Plus Host<br/>81 Pattern Slots / Shared Inventory / Programmable Storage]
    B -->|Datastick Binding| C[ME Pattern Buffer Proxy Plus #1<br/>Connected to Multiblock Machine A]
    B -->|Datastick Binding| D[ME Pattern Buffer Proxy Plus #2<br/>Connected to Multiblock Machine B]
    B -->|Datastick Binding| E[ME Pattern Buffer Proxy Plus #3<br/>Connected to Multiblock Machine C]
```

### Core Features
1. **Massive Pattern Capacity**: A single buffer host has **81 pattern slots** (equivalent to the total of 9 standard AE2 pattern providers).
2. **All-in-one Hatch Capabilities**: Simultaneously possesses `IMPORT_ITEMS`, `IMPORT_FLUIDS`, `EXPORT_ITEMS`, `EXPORT_FLUIDS` capabilities, supporting mixed fluid and item interactions in the same hatch.
3. **Programmable Storage Support**: Internally integrates the Programmable Storage mechanism, supporting precise ingredient insertion and caching for complex recipes.

---

## 🪞 ME Pattern Buffer Proxy Plus (`me_pattern_buffer_proxy_plus`)

**Pattern Buffer Proxy Plus** is a revolutionary distributed automation structure component:

### Working Principle and Cross-Machine Sharing
- Install the proxy buffer in the hatch position of any multiblock machine.
- Hold a **Datastick** and right-click the main **ME Pattern Buffer Plus** to read coordinates, then right-click the **Pattern Buffer Proxy Plus** to bind.
- **All bound proxies will share all 81 patterns placed in the main buffer in real time**!
- When the AE2 network initiates automated crafting tasks, the network automatically load-balances and assigns them to all idle proxy machines to work in parallel!

### Jade Hover Status Display
When pointing at the pattern buffer or proxy, Jade automatically displays:
- Main buffer: `Connected proxies: X`
- Proxy component: `Bound to - X: ..., Y: ..., Z: ...`

---

## 💨 ME Steam Hatch (`me_steam_hatch`)

- **Function**: Directly connects the AE2 fluid network to steam multiblock structures.
- **Effect**: Steam multiblock structures no longer need complex high-speed steam pipes and tanks; they can directly draw steam from the ME network at maximum throughput for power, eliminating pipeline transmission bottlenecks.