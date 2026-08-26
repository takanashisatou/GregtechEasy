# インターフェース、テクスチャ、Blockbench アートワークフロー

GTE プロジェクトは、自動化された、損失ゼロのアート資産処理パイプラインを確立しました。モデルデザイナーは **Blockbench** を使用してモデルを作成し、オリジナルディレクトリに保存するだけで、Gradle タスクが自動的に資産の分類、形式検証、増分同期を実行します。

---

## 🎨 アートソースファイルディレクトリ (`art_assets/`)

プロジェクトルートディレクトリの `art_assets/` は、アートデザイナーの**唯一の作業ディレクトリ**であり、Git で厳密にバージョン管理されています：

```
art_assets/
├── *.bbmodel                           # Blockbench プロジェクトソースファイル（レイヤーとボーンを保持）
├── *.json                              # Blockbench からエクスポートされた Minecraft ジオメトリモデル
├── *.png                               # テクスチャマップ（アイテム / ブロックケーシング / 陣法テクスチャ）
├── *.png.mcmeta                        # アニメーションとマテリアルメタデータ
└── projectuhv/                         # 高次回路シリーズ専用マテリアルサブディレクトリ
```

---

## 🏷️ 命名規則と自動ルーティング規則

Gradle タスク `syncBlockbenchAssets` は、ファイル名のキーワードに基づいて、ファイルを `modules/gtecore` の対応するリソースパスに自動的に配布します：

| ファイルタイプ | 命名に含まれるキーワード | 自動同期先ディレクトリ (GTECore) |
| :--- | :--- | :--- |
| **アイテムテクスチャ** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **ブロックケーシングテクスチャ** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **ブロックモデル** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **アイテムモデル** (`.json`) | その他のすべてのモデルファイル（`.bbmodel` を除く） | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 ワンクリック資産同期タスク (`syncBlockbenchAssets`)

モデルをエクスポートまたはテクスチャを変更した後、ターミナルで実行します：

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### 自動化機能
1. **自動トリガー**：このタスクは `buildAll`、`copyOutputJars`、および CI ビルドプロセスの前置ノードにマウントされており、ローカルコンパイルやゲーム起動時に自動的に実行されるため、手動で繰り返しコピーする必要はありません。
2. **増分安全性**：バイナリストリームで上書きし、ターゲットリソースディレクトリに不足している親ディレクトリを自動的に補完します。
3. **Git をクリーンに保つ**：`.bbmodel` はソースプロジェクトとして `art_assets/` にのみ保持され、コンパイルで生成された jar パッケージには冗長な Blockbench プロジェクトメタデータが含まれません。