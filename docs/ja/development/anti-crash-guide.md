# クラッシュ防止開発規範と実戦トラブルシューティング経験庫（アンチクラッシュガイド）

マルチモジュール、マルチクラスローダー、複雑なMixinバイトコード強化を伴うMinecraft開発環境では、何気ない書き方が壊滅的な実行時クラッシュを引き起こすことがあります。

このマニュアルは、GTEエンジニアリング実戦で蓄積された **五大クラッシュ防止鉄則** と **高頻度クラッシュトラブルシューティング経験庫** をまとめたものです。

---

## 🛡️ 五大クラッシュ防止開発鉄則（CRITICAL）

### 鉄則 1：Mixin Accessor インターフェースへの強制キャスト禁止（Never Force-Cast Accessors）

- **クラッシュの根本原因**：マルチモジュール環境やAddon読み込み中に、Minecraftネイティブクラス（例：`BlockBehaviour.Properties`）が早期クラスローダーでインスタンス化され、その時点でMixinインターフェースがまだバイトコード織り込みを完了していない可能性があり、強制キャストは即座に `ClassCastException` を引き起こします！
- **誤った書き方（禁止）**：
  ```java
  // 誤り！早期クラスロード時に必ずClassCastExceptionが発生
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **正しい書き方（安全ガード）**：
  ```java
  // 正しい：instanceofパターンガードを使用
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **より良い方法**：Vanilla/ForgeネイティブAPIを優先的に使用（例：`property.getPossibleValues()` で整数範囲を取得し、`IntegerPropertyAccessor` への強制キャストを避ける）。

---

### 鉄則 2：本番環境最適化/シェーダーModを開発環境に配置禁止

- **クラッシュの根本原因**：`Oculus`、`Embeddium`、`ModernFix`、`ModernUI` などの本番環境最適化Modは、ハードコードされたSRG難読化Mixinマッピング（例：`f_117950_`, `m_91302_`）を内蔵しています。一方、Gradle `runClient` 開発環境は難読化解除されたMojangマッピングで動作するため、直接 `InvalidMixinException` クラッシュを引き起こします。
- **管理原則**：最適化Modは `gte/overrides/mods/` に配置し（通常のランチャー用）、`modules/gte-dev-runtime` のビルド依存関係に追加してはなりません。

---

### 鉄則 3：開発環境依存関係は必ず `modLocalRuntime` を使用

- **クラッシュの根本原因**：通常の `localRuntime` や `fileTree` はModDevGradleの難読化解除リマッパー（Remapper）をトリガーせず、実行時にシンボルが見つからない、または難読化名が壊れる原因となります。
- **管理原則**：`modules/gte-dev-runtime/build.gradle` では、必ず `modLocalRuntime(...)` を宣言し、`obfuscation.createRemappingConfiguration(configurations.localRuntime)` を設定してください。

---

### 鉄則 4：Gradleインクリメンタルコンパイルのデッドロック（`NoSuchFileException`）解決法

- **現象**：`compileJava` または `build` 実行時に `NoSuchFileException: ...\build\classes\java\main\...` または `Unable to delete directory 'build'` が表示される。
- **根本原因**：バックグラウンドに残ったGradle DaemonプロセスがWindowsファイルロックを占有している。
- **標準的な解決策**：
  ```powershell
  # 1. バックグラウンドに残ったGradleデーモンプロセスを完全に終了
  .\gradlew.bat --stop

  # 2. 競合するbuildキャッシュディレクトリを削除して再コンパイル
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### 鉄則 5：基盤 `gtm-reborn` 変更後の強制連携セルフチェック

`gtm-reborn` の基本機械、材料システム、RecipeType、レシピ条件、Capabilityを変更した場合、以下の3ステップのチェックを順に実行する必要があります：
1. **`gtecore` のコンパイル整合性を確認**：`.\gradlew.bat :modules:gtecore:compileJava` を実行。
2. **KubeJS連携スクリプトを確認**：`startup_scripts/` 内のGTCEu登録イベントと `server_scripts/` 内のMachine参照を確認。
3. **FTB Questsのアイテム参照を確認**：タスクブックが名前変更または削除されたアイテムIDを参照していないか確認。

---

## 📚 実クラッシュの振り返りと修正レシピ庫（Post-Mortems）

### ケース 1: `GTBlocks.copy` / 鉱石登録で `ClassCastException`
- **エラースタック**：`BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **修正方法**：`if (props instanceof BlockPropertiesAccessor acc)` を使用してすべてのプロパティコピーロジックを保護。

### ケース 2: `GrowingPlantRender` で `IntegerPropertyAccessor` への強制キャストクラッシュ
- **エラースタック**：`IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **修正方法**：ネイティブのストリーム操作に置き換え：
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### ケース 3: `GregTechDatagen.initPre` で `AssertionError`
- **エラースタック**：`AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **修正方法**：`RegistrateDataProvider` の静的Mapは `--datagen` パラメータでのみ初期化されるため、呼び出しを `try { ... } catch (Throwable ignored) { }` で囲むことで通常起動時のエラーを回避。

### ケース 4: `PonderPlugin` 欠落による `NoClassDefFoundError`
- **エラースタック**：`GTMachines.<clinit>` が `NoClassDefFoundError: PonderPlugin` をスローし、その後Ponderが `requires flywheel` でクラッシュ
- **修正方法**：`modules/gte-dev-runtime/build.gradle` に `modLocalRuntime(forge.ponder)` と `modLocalRuntime(forge.flywheel.forge)` の両方を追加。