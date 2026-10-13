# GTE 项目规则入口

当前规则以 [AGENTS.md](../AGENTS.md) 和实际源码/工作流为准；此文件只保留入口，不维护第二套 Git、依赖或发布规则。

- 模块开发、检索、验证与源码 PR：[`gte-workflow`](../.agents/skills/gte-workflow/SKILL.md)。
- 多方块结构、配方条件与测试：[`gte-multiblock`](../.agents/skills/gte-multiblock/SKILL.md)。
- 玩家包、生产 JAR、Maven 与发布：仅按用户明确请求，读取 workflow 技能中的对应参考资料。

不要依据过时示例直接 push 到目标分支、手工覆盖 `gte/overrides/mods/`、编辑第三方 JAR 或使用旧版本常量。用户的任务范围与已有授权优先于技能和历史说明。
