// 在 server_scripts 文件夹中创建 superpeace.js

let superpeaceTask = null;
// 持久化数据键名
const DATA_KEY = 'superpeace_data';

// 获取持久化数据
function getData() {
    
    const data = JsonIO.read('super_peace.json')
    if (data.enabled) {
       return data;
    }
    return {
        enabled: false,
        interval: 20
    };
}

// 保存持久化数据
function saveData(data) {
    JsonIO.write('super_peace.json',data)
}

// 启动清除任务
function startCleaning(server) {

    
    const data = getData();
    if (!data.enabled) return;
    const executeCleaning = (callback) => {
        const currentData = getData();
        if (currentData.enabled) {
            // 执行清除命令，排除玩家和女仆
            server.runCommandSilent('kill @e[type=!minecraft:player,type=!touhou_little_maid:maid]');
            server.runCommandSilent('/time set day')
            server.runCommandSilent('/weather clear')
            startCleaning(server)
        } else {

            superpeaceTask = null;
        }
    };
    
    superpeaceTask = server.scheduleInTicks(data.interval, executeCleaning);

}
// 停止清除任务
function stopCleaning() {
    if (superpeaceTask) {
        superpeaceTask.clear();
        superpeaceTask = null;
    }
}
// 服务器启动时恢复任务
ServerEvents.loaded(event => {
    const data = getData();
    if (data.enabled) {
        console.log(`SuperPeace: 恢复自动清除任务 (间隔: ${data.interval}tick)`);
        startCleaning(event.server);
    }
});

// 注册命令
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    
    event.register(
        Commands.literal('superpeace')
            .then(Commands.literal('start')
                .executes(context => {
                    const data = getData();
                    if (data.enabled) {
                        context.getSource().sendSystemMessage('§cSuperPeace 已经在运行中！');
                        return 0;
                    }
                    
                    data.enabled = true;
                    saveData(data);
                    startCleaning(context.getSource().getServer());
                    
                    context.getSource().sendSystemMessage(`§aSuperPeace 已启动！每${data.interval}tick清除一次实体。`);
                    context.getSource().sendSystemMessage('§b状态已保存，重启服务器后会自动恢复。');
                    return 1;
                })
            )
            .then(Commands.literal('stop')
                .executes(context => {
                    const data = getData();
                    if (!data.enabled) {
                        context.getSource().sendSystemMessage('§cSuperPeace 没有在运行！');
                        return 0;
                    }
                    
                    data.enabled = false;
                    saveData(data);
                    stopCleaning();
                    
                    context.getSource().sendSystemMessage('§aSuperPeace 已停止！');
                    context.getSource().sendSystemMessage('§b状态已保存，重启服务器后不会自动启动。');
                    return 1;
                })
            )
            .then(Commands.literal('interval')
                .then(Commands.argument('ticks',Arguments.INTEGER.create(event))
                    .executes(context => {
                        const ticks = Arguments.INTEGER.getResult(context, 'ticks');
                        const data = getData();
                        const oldInterval = data.interval;
                        data.interval = ticks;
                        saveData(data);
                        
                        context.getSource().sendSystemMessage(`§a清除间隔已从 ${oldInterval}tick 改为: ${ticks}tick (${(ticks/20).toFixed(1)}秒)`);
                        
                        // 如果正在运行，重启任务
                        if (data.enabled) {
                            startCleaning(context.getSource().getServer());
                            context.getSource().sendSystemMessage('§b已重新启动清除任务应用新间隔');
                        }
                        return 1;
                    })
                )
            )
            .then(Commands.literal('status')
                .executes(context => {
                    const data = getData();
                    const status = data.enabled ? '§a运行中' : '§c已停止';
                    const seconds = (data.interval / 20).toFixed(1);
                    context.getSource().sendSystemMessage(`§6SuperPeace 状态: ${status}`);
                    context.getSource().sendSystemMessage(`§6执行间隔: ${data.interval}tick (${seconds}秒)`);
                    context.getSource().sendSystemMessage('§6清除目标: 所有非玩家和非女仆实体');
                    context.getSource().sendSystemMessage('§b状态持久化: §a已启用');
                    return 1;
                })
            )
            .executes(context => {
                context.getSource().sendSystemMessage('§6=== SuperPeace 命令 ===');
                context.getSource().sendSystemMessage('§6/superpeace start §f- 启动实体清除');
                context.getSource().sendSystemMessage('§6/superpeace stop  §f- 停止实体清除');
                context.getSource().sendSystemMessage('§6/superpeace status §f- 查看状态');
                context.getSource().sendSystemMessage('§6/superpeace interval <ticks> §f- 设置执行间隔(1-1200)');
                context.getSource().sendSystemMessage('§b状态会自动保存，重启服务器后保持');
                return 1;
            })
    );
});