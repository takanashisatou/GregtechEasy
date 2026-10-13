# 开发运行与排障

只按实际症状读取下面对应段落。先看首个异常和启动阶段，再看相关源文件；历史修复不能替代当前版本的诊断。

## 运行依赖与映射

依赖源是当前 `dependencies.gradle`、`gradle/forge.versions.toml` 和运行配置。

- 编译引用使用 `modCompileOnly` / `compileOnly` 或正确的 sibling project 依赖；开发运行使用 `modLocalRuntime` 触发 SRG→named remap。
- 不使用 flatDir 或普通 fileTree 绕过开发 remap；整合包依赖由 `gte-dev-runtime` 的 local Maven 发布/坐标机制提供。版本固定且 `gte.mods` 限定到本地仓库，避免探测所有远端仓库。
- 每个子模块的 `legacyForge.mods` 只包含自己。专用 runner 才能聚合 sibling source set，否则 datagen 可能发生 Registrate provider 的类加载冲突。
- 开发 JAR 排除 `META-INF/jarjar/**`；`jarWithEmbeds` / `reobfJar` 保留生产内嵌库。实际加载模块的运行配置要显式提供命名 standalone 版本的内嵌依赖，包括 Registrate、LDLib、Configuration、Ponder/Flywheel、MixinExtras 或 KotlinForForge（按模块使用情况）。mods.toml-less 库需要保留原 Maven 文件名以便去重。

`NoSuchFieldError` 中出现 `f_...`、`NoSuchMethodError` 中出现 `m_...` 时，先核对当前运行是 named 还是生产 SRG、失败类来自哪个 JAR；不要改第三方 JAR 字节来掩盖映射问题。

## 客户端启动与窗口

需要图形验证时，从根目录用 Gradle：

```powershell
.\gradlew.bat runFullPack
# 等价任务：:modules:gte-dev-runtime:runClient
```

优化/光影组合保持 `config/fml.toml` 的 `earlyWindowControl=false`，并保留运行配置中的 `-Dfml.earlyprogresswindow=false`、`-Dforge.earlyWindow=false`。早期 GLFW 渲染线程可能与 Embeddium/Oculus 冲突。不能把“窗口未出现”当作重新开启早期窗口的依据。

区分两个现象：

1. 日志停在 GLFW/渲染上下文初始化：检查早期窗口配置与实际运行依赖。
2. 日志已完成启动，`GLFW30` 窗口存在但被覆盖：检查该次 JVM 的窗口位置与 raise helper 日志。Gradle 运行路径才会启用 `scripts/dev/raise_game_window.ps1`；不要用自动生成的 `.vscode/launch.json` 替代，也不要手改它。

尺寸与焦点由当前 runner 配置决定；`GTE_NO_WINDOW_RAISE=1`、`GTE_WINDOW_WIDTH` / `GTE_WINDOW_HEIGHT` 是现有可选环境变量。关闭自己启动的测试实例前确认 PID/启动时间，并保留用户正在使用的实例及存档。

## 按异常定位

| 症状 | 核对与修复方向 |
| --- | --- |
| `ClassCastException` 转成 accessor | 使用 `instanceof` 守卫或 vanilla API；不要强转 Mixin 接口 |
| Registrate provider 跨类加载器冲突 | 查子模块 `legacyForge.mods` 是否错误包含 sibling source set |
| `CreativeModeTabs f_...` / 注册器字段错误 | 查开发运行是否抽取了 SRG jarJar embed，以及 standalone 库的映射、坐标和原文件名 |
| `PonderPlugin` / Flywheel 缺失 | 查该运行是否有实际使用版本的命名 Ponder、Flywheel 依赖 |
| datagen 生命周期断言 | 查调用阶段和 provider 是否只在 datagen 初始化；用阶段守卫，不以宽泛 `catch(Throwable)` 吞掉所有错误 |
| Jade 缺少配置翻译的断言 | 核对确实缺失的翻译与第三方 dev assertion；补正确语言源，按需要限制那个包的断言，而不是全局关闭断言 |
| `NoSuchFileException` / 文件被占用 | 核对当前任务拥有的 Gradle/JVM 与具体缓存目录；先释放对应锁。不要杀掉所有用户 JVM、默认清空整个缓存或随意删除根构建目录 |
| IDE JDWP 退出时 `jdwp.dll` dump | 核对是否只发生于带断点调试的退出；不把它当成启动故障 |
| 修改任务/脚本没有进入游戏 | 核对 runner 的 junction/symlink 与 `gte/overrides` 的真实目标；测试世界和日志应留在 `run/` |

运行相关审计时选择实际适用的 `scripts/audit_*.py`。断言失败与环境失败要分开：明确可复现的测试场地错误应修正夹具，不依赖换一台 runner 碰巧通过。
