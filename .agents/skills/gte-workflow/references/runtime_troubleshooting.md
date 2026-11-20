# 开发运行与排障

按实际症状查对应条目。先看第一条抛出的异常和卡在哪个启动阶段，别上来就乱改无关配置。

## 1. 依赖与映射原理

所有依赖版本统一以 `gradle/forge.versions.toml` 和各模块 Gradle 配置为准：

- 编译期用 `modCompileOnly` / `compileOnly` 或 sibling project 依赖；开发运行用 `modLocalRuntime`（触发 SRG → named 重映射）。
- 别用 `flatDir` 或裸 `fileTree` 绕过 remap；整合包里自带的第三方模组由 `gte-dev-runtime` 通过本地 Maven 坐标提供，且 `gte.mods` 限定只查本地仓库，避免拖慢远端解析。
- 子模块的 `legacyForge.mods` 只列自己的 sourceSet；多模块聚合只放 `gte-dev-runtime`。
- 开发 JAR 排除 `META-INF/jarjar/**`，生产 `reobfJar` 才带 jarJar 内嵌库。所以开发运行配置必须显式配齐对应的 named standalone 库（如 Registrate、LDLib、Configuration、Ponder/Flywheel、MixinExtras、KotlinForForge）。没有 `mods.toml` 的库保留原始 Maven 文件名用于去重。

看到 `NoSuchFieldError: f_...` 或 `NoSuchMethodError: m_...`，第一时间查当前运行是 named 还是 SRG、出事的类来自哪个 JAR。

## 2. 启动客户端与窗口拉起

图形验证统一从根目录用 Gradle 启动：

```powershell
.\gradlew.bat runFullPack
# 等价于 .\gradlew.bat :modules:gte-dev-runtime:runClient
```

- Embeddium + Oculus 组合下，早期 GLFW 窗口线程会和渲染上下文打架，必须保持 `config/fml.toml` 里的 `earlyWindowControl=false`，以及 JVM 参数 `-Dfml.earlyprogresswindow=false`、`-Dforge.earlyWindow=false`。
- 启动后没看到窗口，先分清两种情况：
  1. **日志停在 GLFW / 渲染初始化**：查早期窗口参数和运行依赖。
  2. **日志已经进主菜单，`GLFW30` 窗口在但被挡住了**：Gradle 路径会自动挂 `scripts/dev/raise_game_window.ps1` 拉前窗口；自动生成的 `.vscode/launch.json` 不走这条链路，别用它启动也别手改它。
- 可选环境变量：`GTE_NO_WINDOW_RAISE=1`、`GTE_WINDOW_WIDTH`、`GTE_WINDOW_HEIGHT`。
- 关自己拉起的测试进程前先核对 PID，别误杀用户开着的实例。

## 3. 常见报错速查表

| 报错 / 症状 | 原因与修法 |
| --- | --- |
| `ClassCastException` 强转 Mixin accessor | 改成 `instanceof` 守卫或调原版 API，别强转 Mixin 接口 |
| `runData` 报 Registrate provider 跨类加载器冲突 | 检查子模块 `legacyForge.mods` 是否误加了 sibling sourceSet |
| `CreativeModeTabs f_...` / 注册器字段找不到 | 开发环境误解包了 SRG jarJar，或缺少对应 named standalone 库 / 文件名被改导致去重失败 |
| `PonderPlugin` / Flywheel 类缺失 | 运行配置补齐当前版本的 named Ponder & Flywheel 依赖 |
| datagen 生命周期断言失败 | 查 provider 是否只在 datagen 阶段初始化；补阶段守卫，别用 `catch(Throwable)` 糊弄过去 |
| Jade 缺配置翻译的 dev 断言 | 先补漏掉的翻译；确属第三方 dev 断言干扰时只针对该包关断言，别全局关 `-da` |
| `NoSuchFileException` / 文件被占用 | 查自己拉起的 Gradle daemon 或残留 JVM，只清对应锁，别全杀或删根构建目录 |
| 带断点调试退出时炸 `jdwp.dll` dump | IDE JDWP 退出时的已知现象，不是游戏启动故障 |
| 改了任务或 KubeJS 进游戏没生效 | 查 `run/client/` 到 `gte/overrides/` 的目录联接（可用 `:modules:gte-dev-runtime:linkDevEnvironment` 修复）；语言 JSON 改完还要按 **F3+T** |
