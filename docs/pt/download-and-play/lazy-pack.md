# Guia de Download do Modpack e Pacote para Jogadores

GTE (GregTech Easy) oferece três formas de entrega prontas para uso, para jogadores e administradores de servidores com diferentes níveis de conhecimento técnico:

1. **Pacote completo para jogadores sem compilação (`GTE-LazyPack-*.zip`)** : Contém todos os mods pré-compilados, configurações, scripts de modificação e a estrutura completa do diretório `.minecraft`. **Basta clicar duas vezes ou arrastar para o launcher para jogar**.
2. **Pacote no formato CurseForge (`GTE-CurseForge-*.zip`)** : Formato padrão CurseForge, pode ser importado diretamente no PCL2 / HMCL / CurseForge App / Prism Launcher com um clique.
3. **Pacote de servidor (`GTE-Server-*.zip`)** : Contém configurações de servidor limpas, mods e scripts de inicialização, para criar servidores e jogar online.

---

## 🚀 Pacote para Jogadores (Recomendado)

### Características e Vantagens
- **0 dependências de compilação**: Não é necessário instalar ambiente de compilação JDK, IntelliJ IDEA ou Git.
- **Pacote completo**: Os JARs mais recentes de `gtecore`, `gtm-reborn`, `gt--` e os mods de extensão pré-requisitos já estão incluídos no diretório `mods/`.
- **Arraste e jogue**: Suporta importação com um clique arrastando para a janela do PCL2 / HMCL.

### Passos de Importação e Inicialização

=== "Método 1: Arrastar e soltar no launcher (Recomendado)"

    1. Abra o **PCL2 (Plain Craft Launcher 2)** ou **HMCL (Hello Minecraft! Launcher)**.
    2. Arraste o arquivo `GTE-LazyPack-<versão>.zip` baixado diretamente para a janela principal do launcher com o **botão esquerdo do mouse**.
    3. O launcher reconhecerá automaticamente e extrairá para a lista de versões do jogo.
    4. Vá para as **configurações da versão** e defina o runtime Java como **Java 21**.
    5. Aloque **8GB ~ 12GB** de memória e clique em iniciar o jogo!

=== "Método 2: Modo de extração manual"

    1. Extraia o arquivo compactado para qualquer caminho sem caracteres chineses e sem espaços (por exemplo, `D:\Games\GTE\`).
    2. Após a extração, você obterá um diretório `.minecraft` contendo `mods/`, `config/`, `kubejs/`.
    3. No launcher, adicione uma versão do jogo e selecione o diretório raiz do jogo como a pasta `.minecraft` extraída.
    4. Certifique-se de selecionar o núcleo **Java 21** e iniciar.

---

## ⚠️ Requisitos do Ambiente de Execução Java 21 (Extremamente Importante)

> [!CAUTION]
> **Este modpack exige obrigatoriamente o ambiente de execução Java 21 (JDK 21)!**
> Não use **Java 17** ou **Java 8**, caso contrário o jogo irá travar ou se recusará a iniciar!

### Por que é necessário usar Java 21?
- Os mods principais do GTE (`gtecore`, `gtm-reborn`, `gt--`) utilizam amplamente **recursos modernos da linguagem Java 21** (como Record Patterns, Virtual Threads, Switch Pattern Matching aprimorado).
- Os scripts de build do Gradle configuram globalmente `JavaLanguageVersion.of(21)` para forçar a verificação da toolchain.

### Links de Download Recomendados para JDK 21

| Distribuição | Link de Download | Motivo da Recomendação |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [Clique para ir ao site da Azul](https://www.azul.com/downloads/?version=java-21-lts) | Excelente desempenho, ótima otimização para multithreading em larga escala do Minecraft |
| **Eclipse Temurin 21 (LTS)** | [Clique para ir ao site da Adoptium](https://adoptium.net/temurin/releases/?version=21) | Recomendação oficial, alta compatibilidade e estabilidade |
| **Microsoft OpenJDK 21** | [Clique para ir ao site da Microsoft](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Boa adaptação nativa para plataforma Windows |

### Configurando Java 21 no Launcher

```mermaid
graph LR
    A[Abrir o launcher] --> B[Entrar nas configurações da versão GTE]
    B --> C[Caminho do Java / Runtime]
    C --> D[Selecionar o javaw.exe do JDK 21 instalado]
    D --> E[Alocar 8192MB ~ 12288MB de memória]
    E --> F[Salvar e iniciar o jogo]
```

---

## 🎮 Atalhos no Jogo e Comandos Comuns

| Comando / Atalho | Descrição da Função | Requisito de Permissão |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | Ativa o modo de edição visual do livro de missões (modo autor) | Permissão de OP |
| `/ftbquests reload` | Recarrega os arquivos de configuração do FTB Quests | Todos |
| `/kubejs reload server_scripts` | Recarrega os scripts de modificação do servidor e receitas | Permissão de OP |
| `/kubejs reload client_scripts` | Recarrega os scripts de modificação do cliente e lógica de exibição | Sem permissão necessária |
| `/dumpmultiblock` | Exporta o código da estrutura multibloco com um clique após selecionar a área com o machado de madeira | Permissão de OP |
| <kbd>U</kbd> / <kbd>R</kbd> | Ver o uso (Usage) / receita (Recipe) do item sob o cursor | Atalhos do EMI / JEI |
| <kbd>F7</kbd> | Ver o nível de luz ao redor (X vermelho indica área de spawn de mobs) | Atalho do cliente |