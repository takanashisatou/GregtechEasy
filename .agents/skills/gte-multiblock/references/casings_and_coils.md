# GTE 自定义外壳与线圈扩展指南 (Casings & Coils Guide)

本指南说明如何在 `gtecore` 中使用 Registrate 注册全新的机械外壳（Casings）与加热线圈（Heating Coils）。

---

## 1. 自定义机械外壳 (Casings) 注册

机械外壳定义在 `modules/gtecore/src/main/java/org/satou/gtecore/common/data/GTEBlocks.java` 中：

```java
package org.satou.gtecore.common.data;

import com.tterrag.registrate.util.entry.BlockEntry;
import net.minecraft.world.level.block.Block;
import org.satou.gtecore.GTECore;

import static org.satou.gtecore.api.registry.GTECoreRegistration.GTECore_REGISTRATE;
import static org.satou.gtecore.common.data.GTECreativeModeTabs.MORE_MACHINES;

public class GTEBlocks {
    static {
        GTECore_REGISTRATE.creativeModeTab(() -> MORE_MACHINES);
    }

    // 注册标准外壳方块
    public static BlockEntry<Block> MY_ADVANCED_CASING = createCasingBlock(
            "my_advanced_casing",
            GTECore.id("block/casings/my_advanced_casing") // 材质路径位于 assets/gtecore/textures/block/casings/my_advanced_casing.png
    );
}
```

### 材质与模型规范

- 纹理文件放置在：`modules/gtecore/src/main/resources/assets/gtecore/textures/block/casings/...`
- 方块模型由 Registrate 自动生成，通过 `createCasingBlock` 方法绑定六面贴图。

---

## 2. 自定义加热线圈 (Coils) 注册

加热线圈在 GTM 中拥有**工作温度**、**线圈等级（Tier）**与**发光层贴图**。

### 步骤 1：在 `GTECoilBlock.java` 中添加线圈枚举

```java
public enum GTECoilType implements ICoilType {
    YIN_YANG_COIL("yin_yang", 13500, 10, GTMaterials.Neutronium, GTECore.id("block/coils/yin_yang_coil")),
    MY_COIL("my_custom_coil", 15000, 11, GTMaterials.Neutronium, GTECore.id("block/coils/my_custom_coil"));

    private final String name;
    private final int temperature; // 温度（开尔文 K）
    private final int tier;        // 等级
    private final Material material;
    private final ResourceLocation texture;

    // 构造函数与 Getter...
}
```

### 步骤 2：在 `GTEBlocks.java` 中创建方块实例

```java
public static BlockEntry<GTECoilBlock> MY_COIL_BLOCK = createCoilBlock(GTECoilBlock.GTECoilType.MY_COIL);
```

### 步骤 3：注册到全局 API (`GTCEuAPI.HEATING_COILS`)

在模组初始化阶段（如 `GTEBlocks` 静态块或 `SatouAddon` 中）：

```java
GTCEuAPI.HEATING_COILS.put(GTECoilBlock.GTECoilType.MY_COIL, MY_COIL_BLOCK);
```

这样，所有使用 `Predicates.heatingCoils()` 的多方块机器（如 EBF、高炉、裂化机等）都将自动识别新线圈并计算对应的高温加成！
