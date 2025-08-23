/*BlockEvents.rightClicked(event => {
    const player = event.player
    const block = event.block
    player.tell([Text.of('测试2')])
    if (block.id !== 'minecraft:crying_obsidian') return
    player.tell([Text.of('OK')])
        const currentDim = player.level.dimension
        const isInFlatWorld = (currentDim === 'flat_world')
        
        if (player.isCrouching()) {
            // Shift+右键返回主世界出生点
            player.teleportToDimension(
                'minecraft:overworld',
                player.level.getSpawnPoint().x,
                player.level.getSpawnPoint().y + 1,
                player.level.getSpawnPoint().z
            )
            player.tell(Text.of('已返回主世界出生点').green())
        } else {
            if (isInFlatWorld) {
                // 维度内随机传送
                const angle = Math.random() * Math.PI * 2
                const radius = 12
                player.teleport(
                    8 + Math.cos(angle) * radius,
                    5,
                    8 + Math.sin(angle) * radius
                )
                player.tell(Text.of('已在超平坦世界内传送!').gold())
            } else {
                
                // 传送到超平坦世界中心
                player.teleportTo(7.5,7.3,7.2)
                
                //player.give('gtceu:acetic_acid_bucket')
                //player.teleportTo(77,77,77)
                player.tell(Text.of("BYD"))
                player.tell(Text.of('已到达超平坦世界').gold())
            }
        }
    player.tell([Text.of('OEK')])
})
// ========== 4. 玩家引导 ========== //
PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('portal_guide')) {
        event.player.stages.add('portal_guide')
        event.player.tell([
            Text.of('传送系统提示').bold().underlined().gold(),
            Text.of('\n右键 ').gray(),
            Text.of('哭泣黑曜石').darkPurple(),
            Text.of(' → 跨维度传送').gray(),
            Text.of('\nShift+右键 → 返回主世界').darkGray()
        ])
    }
})
*/