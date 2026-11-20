# 打包与发布格式速查

不同分发形态走不同脚本，按需对号入座：

| 你要打什么包 | 入口 | 说明 |
| --- | --- | --- |
| **正式 CurseForge 整合包（零 JAR）** | [gte-release-publish](../../gte-release-publish/SKILL.md) + `docs/curseforge-release.md` | 本机 Gradle 编生产 JAR → 本机 `build_curseforge_pack.py` 生成零 JAR ZIP → 手动上传 CurseForge |
| **Full-Mod 离线整包 / Nightly** | `scripts/build_full_mod_pack.py` 或手动触发 `lazypack.yml` | 内置已提交的 `gte/overrides/mods/` JAR；`lazypack.yml` 不编译源码，`publish=false` 只打不发 |
| **服务端整合包** | `scripts/build_server_pack.py` | 基于已提交整合包生成开服包 |
| **GitHub 分支 / Tag 发布** | `release-publish.yml` | 单独的 GitHub Release 流程，不替代 CurseForge 上传 |
| **Maven 发布** | 各模块 Gradle publishing 配置 | 仅需要发库给下游时使用 |

## 打包硬规范

- **官方命名**：正式包 ZIP 和显示名固定为 `GregTech Easy <版本号>(Use Java 21).zip`（版本号和 `(` 之间**没有空格**）。
- **一 modId 一 JAR**：检查 `META-INF/mods.toml` 的 `[[mods]]` 段（不是依赖段）。例如上游 GT-- 和 CE 分支都叫 `gtnn`，绝不能并存。
- **只收生产 SRG JAR**：`gte/overrides/mods/` 里严禁混入 `-dev`、`-dev-embeds`、`-slim`、`-sources`、`-all` 或开发重映射产物。
- **打包前 4 个核心审计**：

```powershell
python scripts/audit_modids.py
python scripts/audit_pack_mappings.py
python scripts/audit_module_jar_freshness.py
python scripts/audit_dev_pack_parity.py
```

- **清理 GitHub Release 资产**：用分页 REST API 查 assets 列表并按 `id` 删除（包括 `state=starter` 的半成品），别用有数量上限的 `gh release view --json assets`。
- **已弃用工作流**：`sync-build.yml`、`curseforge-publish.yml` 已不再用于正式发版，别去触发它们。
