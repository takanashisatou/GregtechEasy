let selection = {}

// 左键选 pos1
BlockEvents.leftClicked(event => {
  if (!event.player || event.player.level.isClientSide()) return
  if (event.item.id != 'minecraft:wooden_axe') return
  let pos = event.block.pos
  let uuid = event.player.uuid.toString()
  selection[uuid] = selection[uuid] || {}
  selection[uuid].pos1 = pos
  event.player.tell(`§a已设置 Pos1: ${pos.x}, ${pos.y}, ${pos.z}`)
})

// 右键选 pos2
BlockEvents.rightClicked(event => {
  if (!event.player || event.player.level.isClientSide()) return
  if (event.item.id != 'minecraft:wooden_axe') return
  let pos = event.block.pos
  let uuid = event.player.uuid.toString()
  selection[uuid] = selection[uuid] || {}
  selection[uuid].pos2 = pos
  event.player.tell(`§a已设置 Pos2: ${pos.x}, ${pos.y}, ${pos.z}`)
})

// /dumpmultiblock
ServerEvents.commandRegistry(e => {
  const { commands: Commands } = e
  e.register(
    Commands.literal('dumpmultiblock')
      .requires(src => src.hasPermission(2))
      .executes(ctx => {
        let player = ctx.source.player
        if (!player) {
          ctx.source.sendFailure(Component.string("只能玩家执行"))
          return 0
        }
        let uuid = player.uuid.toString()
        let sel = selection[uuid]
        if (!sel || !sel.pos1 || !sel.pos2) {
          player.tell("§c请先用木斧左/右键设置 pos1 和 pos2")
          return 0
        }

        let minX = Math.min(sel.pos1.x, sel.pos2.x)
        let maxX = Math.max(sel.pos1.x, sel.pos2.x)
        let minY = Math.min(sel.pos1.y, sel.pos2.y)
        let maxY = Math.max(sel.pos1.y, sel.pos2.y)
        let minZ = Math.min(sel.pos1.z, sel.pos2.z)
        let maxZ = Math.max(sel.pos1.z, sel.pos2.z)

        // 字符集
        let chars = []
        for (let c = 65; c <= 90; c++) chars.push(String.fromCharCode(c)) // A-Z
        for (let c = 97; c <= 122; c++) chars.push(String.fromCharCode(c)) // a-z
        for (let c = 48; c <= 57; c++) chars.push(String.fromCharCode(c)) // 0-9
        chars.unshift('.') // '.' 表示空气

        let blockToChar = { 'minecraft:air': '.' }
        let charToBlock = { '.': 'minecraft:air' }
        let charIndex = 1

        let row = ""
        for (let z = minZ; z <= maxZ; z++) {
            row += ".aisle("
          for (let y = minY; y <= maxY; y++) {
          
            row += "'"
            for (let x = minX; x <= maxX; x++) {
              let id = player.level.getBlock(x, y, z).id
              if (!(id in blockToChar)) {
                if (charIndex >= chars.length) {
                  player.tell("§c字符集用完了！")
                  return 0
                }
                let ch = chars[charIndex++]
                blockToChar[id] = ch
                charToBlock[ch] = id
              }
              //row += blockToChar[id]
              row += blockToChar[id]
            }
            if(y != maxY) row +="',"
          }
          row += "')\n"
          //layers.push(rows)
        }
        //console.log("Test")
        // 输出 .pattern 格式
        /*
        player.tell("§e----- GTM .pattern 格式 -----")
        var str="";
        layers.forEach(rows => {
            str+=`.aisle(`;
          //player.tell(`.pattern(`)
          rows.forEach((line, idx) => {
            let comma = idx < rows.length - 1 ? ',' : ''
            str+=(`"${line}"${comma}`)
          })
          str+=(`)\n`)
        })
        */
        // 输出 key 表
        for (let ch in charToBlock) {
          row+=(`.where('${ch}', easy(\"${charToBlock[ch]}\"))\n`)
        }
        console.log(row);
        player.tell("已输出到日志文件")
        return 1
      })
  )
})
