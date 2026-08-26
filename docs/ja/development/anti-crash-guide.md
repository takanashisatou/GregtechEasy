# クラッシュ防止開発の心得と実戦トラブルシューティング経験ライブラリ (Anti-Crash Guide)

マルチモジュール、複数 Classloader、複雑な Mixin バイトコード拡張を伴う Minecraft 開発環境では、何気ない書き方が壊滅的な実行時クラッシュを引き起こすことがあります。

本マニュアルは、GTE プロジェクトの実戦で蓄積された **五大クラッシュ防止鉄則** と **高頻度クラッシュのトラブルシューティング経験ライブラリ** をまとめたものです。

---

## 🛡️ 五大クラッシュ防止開発鉄則 (CRITICAL)

### 鉄則 1：Mixin Accessor インターフェースへの強制キャスト禁止 (Never Force-Cast Accessors)

- **クラッシュの根本原因**：マルチモジュール環境や Addon のロード中に、Minecraft のネイティブクラス（例: `BlockBehaviour.Properties`）が初期の Classloader によってインスタンス化されると、その時点では Mixin インターフェースのバイトコード織り込みが完了していない可能性があり、強制キャストは即座に `ClassCastException` を引き起こします！
- **誤った書き方（禁止）**：
  ```java
  // 错误！早期类加载时必崩 ClassCastException
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **正しい書き方（安全なガード）**：
  ```java
  // 正确：使用 instanceof 模式守卫
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **より良い方法**：Vanilla/Forge のネイティブ API を優先的に使用します（例: `IntegerPropertyAccessor` に強制キャストするのではなく、`property.getPossibleValues()` で整数範囲を取得する）。

---

### 鉄則 2：本番環境向け最適化/シェーダー Mod を開発環境に配置しない

- **クラッシュの根本原因**：`Oculus`、`Embeddium`、`ModernFix`、`ModernUI` などの本番環境向け最適化 Mod には、ハードコードされた SRG 難読化 Mixin マッピング（例: `f_117950_`, `m_91302_`）が組み込まれています。一方、Gradle `runClient` 開発環境は難読化解除された Mojang マッピングで動作するため、`InvalidMixinException` クラッシュが直接発生します。
- **管理原則**：最適化 Mod は `gte/overrides/mods/` に配置し（通常のランチャーで使用）、`modules/gte-dev-runtime` のビルド依存関係に追加することを固く禁じます。

### 鉄則 3：開発環境の依存関係は必ず `modLocalRuntime` を使用する

- **クラッシュの根本原因**：通常の `localRuntime` や `fileTree` は ModDevGradle の難読化解除リマッパー（Remapper）をトリガーしないため、実行時にシンボルが見つからない、または難読化名が壊れる原因となります。
- **管理原則**：`modules/gte-dev-runtime/build.gradle` で `modLocalRuntime(...)` を宣言し、`obfuscation.createRemappingConfiguration(configurations.localRuntime)` を設定する必要があります。

### 鉄則 4：Gradle インクリメンタルコンパイルのデッドロック (`NoSuchFileException`) 解決法

- **現象**：`compileJava` または `build` 実行時に `NoSuchFileException: ...\build\classes\java\main\...` または `Unable to delete directory 'build'` が表示される。
- **根本原因**：バックグラウンドに残った Gradle Daemon プロセスが Windows のファイルロックを占有している。
- **標準的な解決法**：
  ```powershell
  # 1. 彻底终止后台残留 Gradle 守护进程
  .\gradlew.bat --stop

  # 2. 删除冲突的 build 缓存目录后重新编译
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

### 鉄則 5：基盤 `gtm-reborn` 変更後の強制連携セルフチェック

`gtm-reborn` の基本機械、材料システム、RecipeType、レシピ条件、または Capability を変更した場合は、以下の 3 つのチェックを順に実行する必要があります：
1. **`gtecore` のコンパイル整合性を確認**：`.\gradlew.bat :modules:gtecore:compileJava` を実行します。
2. **KubeJS 連携スクリプトを確認**：`startup_scripts/` 内の GTCEu 登録イベントと `server_scripts/` 内の Machine 参照を確認します。
3. **FTB Quests のアイテム参照を確認**：タスクブックがリネームまたは削除されたアイテム ID を参照していないか確認します。

---

## 📚 実際のクラッシュの振り返りと修正レシピライブラリ (Post-Mortems)

### ケース 1: `GTBlocks.copy` / 鉱石登録で `ClassCastException`

- **エラースタック**：`BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **修正方法**：`if (props instanceof BlockPropertiesAccessor acc)` を使用してすべてのプロパティコピーロジックを保護します。

### ケース 2: `GrowingPlantRender` の `IntegerPropertyAccessor` 強制キャストクラッシュ

- **エラースタック**：`IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **修正方法**：ネイティブのストリーム操作に置き換えます:
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### ケース 3: `GregTechDatagen.initPre` で `AssertionError` が発生

- **エラースタック**：`AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **修正方法**：`RegistrateDataProvider` の静的 Map は `--datagen` パラメータでのみ初期化されるため、呼び出しを `try { ... } catch (Throwable ignored) { }` で囲むことで通常起動時のエラーを回避できます。

### ケース 4: `PonderPlugin` の欠落による `NoClassDefFoundError`

- **エラースタック**：`GTMachines.<clinit>` が `NoClassDefFoundError: PonderPlugin` をスローし、その後 Ponder が `requires flywheel` というクラッシュを表示
- **修正方法**：`modules/gte-dev-runtime/build.gradle` で `modLocalRuntime(forge.ponder)` と `modLocalRuntime(forge.flywheel.forge)` の両方を導入します。