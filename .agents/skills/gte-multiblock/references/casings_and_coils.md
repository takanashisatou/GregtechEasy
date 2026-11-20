# 自定义外壳与线圈注册指南

位置：`modules/gtecore/src/main/java/org/satou/gtecore/common/data/GTEBlocks.java` 与 `modules/gtecore/src/main/java/org/satou/gtecore/common/GTECoilBlock.java`。

## 1. 注册机械外壳

### 普通六面外壳

```java
public static BlockEntry<Block> MY_ADVANCED_CASING = createCasingBlock(
        "my_advanced_casing",
        GTECore.id("block/casings/my_advanced_casing")
);
```

贴图放在：`modules/gtecore/src/main/resources/assets/gtecore/textures/block/casings/my_advanced_casing.png`。模型和 blockstate 由 Registrate 在 `runData` 时生成。

### 带运行态发光的外壳（Active + Bloom）

需要机器运行时点亮纹理的，直接用 `GTEBlocks.createActiveLightCasingBlock`：

```java
public static BlockEntry<ActiveBlock> MY_GLOW_CASING = createActiveLightCasingBlock(
        "my_glow_casing",
        GTECore.id("block/casings/my_theme/my_glow_casing"),
        8,  // 待机亮度
        15  // 运行亮度
);
```

注意：**必须同时准备两张图**——`<name>.png` 和 `<name>_bloom.png`，`createActiveBloomModel` 会把 `_bloom` 作为双层模型的顶层自发光贴图。缺 `_bloom.png` 运行时会紫黑块。

## 2. 注册自定义加热线圈

### 步骤 1：在 `GTECoilBlock.GTECoilType` 加枚举

注意构造签名是 6 个参数 `(name, coilTemperature, level, energyDiscount, material, texture)`，`getTier()` 默认返回 `ordinal()`：

```java
public enum GTECoilType implements StringRepresentable, ICoilType {
    YIN_YANG_COIL("yin_yang", 10800, 16, 8, GTMaterials.Tritanium,
            GTECore.id("block/casings/coils/yin_yang_coil")),
    IMAGINARY_COIL("imaginary", 12600, 32, 16, GTMaterials.Neutronium,
            GTECore.id("block/casings/coils/imaginary_coil_block")),
    MY_COIL("my_coil", 14400, 64, 32, GTMaterials.Neutronium,
            GTECore.id("block/casings/coils/my_coil"));
    // ...
}
```

同样要准备 `<texture>.png` 和 `<texture>_bloom.png`（`createCoilModel` 会用到 `_bloom` 后缀）。

### 步骤 2：在 `GTEBlocks.java` 创建方块

```java
public static BlockEntry<GTECoilBlock> MY_COIL = createCoilBlock(GTECoilBlock.GTECoilType.MY_COIL);
```

注册出来的方块 ID 会自动加上 `_coil_block` 后缀（即 `gtecore:my_coil_coil_block`）。

### 步骤 3：接入全局线圈表（如需被 `Predicates.heatingCoils()` 识别）

当前 `GTEBlocks.createCoilBlock` 里的 `GTCEuAPI.HEATING_COILS.put(...)` 是注释掉的。如果你希望所有使用 `Predicates.heatingCoils()` 的标准机器（如 EBF、裂化机）都能识别你的新线圈，记得在初始化阶段把它放进 `GTCEuAPI.HEATING_COILS`：

```java
GTCEuAPI.HEATING_COILS.put(GTECoilBlock.GTECoilType.MY_COIL, MY_COIL);
```

最后别忘了把新方块的中英文名加进 `datagen/Lang.java` 并跑 `:modules:gtecore:runData`。
