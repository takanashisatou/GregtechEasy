# 介面、材質與 Blockbench 美術工作流

GTE 工程建立了一套自動化、零丟失的美術資產處理流水線。模型設計師只需使用 **Blockbench** 製作模型並儲存在原件目錄，Gradle 任務會自動完成資產分類、格式校驗與增量同步。

---

## 🎨 美術原始檔目錄 (`art_assets/`)

專案根目錄下的 `art_assets/` 是美術設計師的**唯一工作目錄**，受 Git 嚴格版本追蹤：

```
art_assets/
├── *.bbmodel                           # Blockbench 工程源文件（保留图层与骨骼）
├── *.json                              # Blockbench 导出的 Minecraft 几何模型
├── *.png                               # 纹理贴图（物品 / 方块机壳 / 阵法贴图）
├── *.png.mcmeta                        # 动画与材质元数据
└── projectuhv/                         # 高阶电路系列专用材质子目录
```

---

## 🏷️ 命名規範與自動路由規則

Gradle 任務 `syncBlockbenchAssets` 根據檔案命名關鍵詞，自動將檔案分發至 `modules/gtecore` 對應的資源路徑中：

| 檔案型別 | 命名包含關鍵詞 | 自動同步目標目錄 (GTECore) |
| :--- | :--- | :--- |
| **物品貼圖** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **方塊機殼貼圖** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **方塊模型** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **物品模型** (`.json`) | 其餘所有模型檔案（排除 `.bbmodel`） | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 一鍵資產同步任務 (`syncBlockbenchAssets`)

在匯出模型或修改貼圖後，在終端執行：

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### 自動化特性
1. **自動觸發**：該任務已被掛載至 `buildAll`、`copyOutputJars` 以及 CI 構建流程的前置節點，在本地編譯或啟動遊戲時會自動執行，無需手動反覆複製。
2. **增量安全**：使用二進位制流式覆寫，自動在目標資源目錄中補全缺失的父級目錄。
3. **保持 Git 清潔**：`.bbmodel` 僅保留在 `art_assets/` 作為源工程，編譯生成的 jar 包中不會夾帶冗餘的 Blockbench 專案後設資料。
