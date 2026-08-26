# インターフェース、テクスチャ、Blockbench アートワークフロー

GTE プロジェクトは、自動化されたロスレスなアート資産処理パイプラインを構築しました。モデルデザイナーは **Blockbench** を使用してモデルを作成し、オリジナルディレクトリに保存するだけで、Gradle タスクがアセットの分類、フォーマット検証、増分同期を自動的に実行します。

---

## 🎨 アートソースファイルディレクトリ (`art_assets/`)

プロジェクトルート直下の `art_assets/` は、アートデザイナーの**唯一の作業ディレクトリ**であり、Git によって厳密にバージョン管理されています：

```
art_assets/
├── *.bbmodel                           # Blockbench 工程源文件（保留图层与骨骼）
├── *.json                              # Blockbench 导出的 Minecraft 几何模型
├── *.png                               # 纹理贴图（物品 / 方块机壳 / 阵法贴图）
├── *.png.mcmeta                        # 动画与材质元数据
└── projectuhv/                         # 高阶电路系列专用材质子目录
```

---

## 🏷️ 命名規則と自動ルーティング規則

Gradle タスク `syncBlockbenchAssets` は、ファイル名のキーワードに基づいて、ファイルを `modules/gtecore` の対応するリソースパスへ自動的に振り分けます：

| ファイルタイプ | 名前に含まれるキーワード | 自動同期先ディレクトリ (GTECore) |
| :--- | :--- | :--- |
| **アイテムテクスチャ** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **ブロックケーシングテクスチャ** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **ブロックモデル** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **アイテムモデル** (`.json`) | その他のすべてのモデルファイル（`.bbmodel` を除く） | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 ワンクリックアセット同期タスク (`syncBlockbenchAssets`)

モデルをエクスポートした後、またはテクスチャを変更した後に、ターミナルで次のコマンドを実行します：

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### 自動化の特徴
1. **自動トリガー**：このタスクは `buildAll`、`copyOutputJars`、および CI ビルドプロセスの前置ノードに組み込まれており、ローカルでのコンパイルやゲーム起動時に自動的に実行されるため、手動で繰り返しコピーする必要はありません。
2. **増分安全性**：バイナリストリームによる上書きを行い、対象のリソースディレクトリ内に不足している親ディレクトリを自動的に補完します。
3. **Git をクリーンに保つ**：`.bbmodel` はソースプロジェクトとして `art_assets/` にのみ保持され、コンパイルで生成される jar パッケージには冗長な Blockbench プロジェクトメタデータが含まれません。