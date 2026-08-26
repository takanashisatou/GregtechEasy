# Fluxo de Trabalho de Interface, Texturas e Arte no Blockbench

O projeto GTE estabeleceu um pipeline automatizado e sem perdas para processamento de ativos de arte. Os designers de modelos precisam apenas usar o **Blockbench** para criar modelos e salvá-los no diretório de origem; as tarefas do Gradle cuidam automaticamente da classificação de ativos, validação de formato e sincronização incremental.

---

## 🎨 Diretório de Arquivos de Arte (`art_assets/`)

O diretório `art_assets/` na raiz do projeto é o **único diretório de trabalho** para designers de arte, estritamente versionado pelo Git:

```
art_assets/
├── *.bbmodel                           # Arquivos de projeto do Blockbench (preserva camadas e ossos)
├── *.json                              # Modelos geométricos do Minecraft exportados do Blockbench
├── *.png                               # Texturas (itens / invólucros de blocos / texturas de formação)
├── *.png.mcmeta                        # Metadados de animação e material
└── projectuhv/                         # Subdiretório dedicado a texturas da série de circuitos de alto nível
```

---

## 🏷️ Regras de Nomenclatura e Roteamento Automático

A tarefa Gradle `syncBlockbenchAssets` distribui automaticamente os arquivos para os caminhos de recursos correspondentes em `modules/gtecore`, com base em palavras-chave no nome do arquivo:

| Tipo de Arquivo | Palavras-chave no Nome | Diretório de Destino da Sincronização Automática (GTECore) |
| :--- | :--- | :--- |
| **Texturas de itens** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **Texturas de invólucros de blocos** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **Modelos de blocos** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **Modelos de itens** (`.json`) | Todos os outros arquivos de modelo (excluindo `.bbmodel`) | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 Tarefa de Sincronização de Ativos com Um Clique (`syncBlockbenchAssets`)

Após exportar modelos ou modificar texturas, execute no terminal:

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### Recursos de Automação
1. **Disparo Automático**: Esta tarefa está vinculada aos nós anteriores de `buildAll`, `copyOutputJars` e ao pipeline de CI, sendo executada automaticamente durante compilação local ou inicialização do jogo, sem necessidade de cópia manual repetida.
2. **Segurança Incremental**: Usa sobrescrita binária em fluxo contínuo, criando automaticamente os diretórios pai ausentes no diretório de recursos de destino.
3. **Mantém o Git Limpo**: Os arquivos `.bbmodel` permanecem apenas em `art_assets/` como projeto de origem; o jar compilado não incluirá metadados redundantes do projeto Blockbench.