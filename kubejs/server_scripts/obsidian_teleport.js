// 监听玩家交互事件 - 适配 KubeJS 2001.6.5+
BlockEvents.rightClicked(event => {
    const { player, block, hand , item } = event;

    // 检查是否右键了黑曜石
    if (block.id !== 'minecraft:obsidian') return;
    if (hand !== 'MAIN_HAND') return;

    // 检查是否为空手（主手没有物品或者物品为空气）
    if (!item.isEmpty()) return;

    // 获取玩家当前维度
    const currentDimension = player.level.dimension;

    // 定义维度ID
    const overworldId = 'minecraft:overworld';
    const flatDimensionId = 'gte:custom_flat_dimension'; // 确保这与你的数据包中的维度ID匹配

    // 获取玩家位置和朝向
    const x = block.x;
    const y = block.y;
    const z = block.z;
    const yaw = player.yaw;
    const pitch = player.pitch;

    // 根据当前维度决定传送目标
    if (currentDimension === overworldId) {
        // 从主世界传送到超平坦维度
        player.persistentData.putDouble('overworldX', x);
        player.persistentData.putDouble('overworldY', y);
        player.persistentData.putDouble('overworldZ', z);

        // 传送到超平坦维度的相同位置
        player.teleportTo(flatDimensionId, x, 0, z, yaw, pitch);
        player.tell(Text.green('已传送到超平坦维度'));
    } else if (currentDimension === flatDimensionId) {
        // 从超平坦维度传送到主世界
        // 尝试读取之前保存的位置
        const savedX = player.persistentData.getDouble('overworldX');
        const savedY = player.persistentData.getDouble('overworldY');
        const savedZ = player.persistentData.getDouble('overworldZ');

        // 如果有保存的位置，传送到那里，否则传送到世界出生点
        if (savedX !== 0 && savedY !== 0 && savedZ !== 0) {
            player.teleportTo(overworldId, savedX, savedY + 1, savedZ, yaw, pitch);
        } else {
            // 传送到世界出生点
            const spawnPos = player.level.getSpawnPos();
            player.teleportTo(overworldId, spawnPos.x, spawnPos.y, spawnPos.z, yaw, pitch);
        }
        player.tell(Text.green('已传送到主世界'));
    }

    // 取消事件以防止其他操作（如放置方块）
    event.cancel();
});