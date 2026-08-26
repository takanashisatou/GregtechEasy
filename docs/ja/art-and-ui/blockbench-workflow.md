# インターフェース、テクスチャ、Blockbench アートワークフロー

GTE プロジェクトは、自動化された、損失ゼロのアート資産処理パイプラインを確立しました。モデルデザイナーは **Blockbench** を使用してモデルを作成し、元のディレクトリに保存するだけで、Gradle タスクが自動的に資産の分類、形式検証、増分同期を実行します。

---

## 🎨 アートソースディレクトリ (`art_assets/`)

プロジェクトルートディレクトリの `art_assets/` は、アートデザイナーの**唯一の作業ディレクトリ**であり、Git による厳格なバージョン追跡の対象です。

```
art_assets/
├── *.bbmodel                           # Blockbench プロジェクトソースファイル（レイヤーとボーンを保持）
├── *.json                              # Blockbench からエクスポートされた Minecraft ジオメトリモデル
├── *.png                               # テクスチャ（アイテム / ブロック筐体 / 陣法テクスチャ）
├── *.png.mcmeta                        # アニメーションとマテリアルメタデータ
└── projectuhv/                         # 高次回路シリーズ専用マテリアルサブディレクトリ
```

---

## 🏷️ 命名規則と自動ルーティング規則

Gradle タスク `syncBlockbenchAssets` は、ファイル命名キーワードに基づいて、ファイルを `modules/gtecore` の対応するリソースパスに自動的に配布します。

| ファイルタイプ | 命名に含まれるキーワード | 自動同期先ディレクトリ (GTECore) |
| :--- | :--- | :--- |
| **アイテムテクスチャ** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **ブロック筐体テクスチャ** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **ブロックモデル** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **アイテムモデル** (`.json`) | その他のすべてのモデルファイル（`.bbmodel` を除く） | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 ワンクリック資産同期タスク (`syncBlockbenchAssets`)

モデルをエクスポートまたはテクスチャを変更した後、ターミナルで実行します：

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### 自動化の特徴

1. **自動トリガー**: このタスクは `buildAll`、`copyOutputJars`、および CI ビルドプロセスの前置ノードにマウントされており、ローカルコンパイルやゲーム起動時に自動的に実行されるため、手動で繰り返しコピーする必要はありません。
2. **増分安全性**: バイナリストリーム上書きを使用し、ターゲットリソースディレクトリに欠落している親ディレクトリを自動的に補完します。
3. **Git のクリーンさを維持**: `.bbmodel` はソースプロジェクトとして `art_assets/` にのみ保持され、コンパイルで生成された jar パッケージには冗長な Blockbench プロジェクトメタデータが含まれません。