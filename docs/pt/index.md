# Documentação Oficial do GregTech Easy (GTE)

Bem-vindo ao guia oficial abrangente do pacote de mods **GregTech Easy (GTE)**!

GTE é um pacote de mods moderno para Minecraft 1.20.1 com o conceito central de **"simples, divertido, interessante e de curta duração"**.

---

## ⚡ Índice de Acesso Rápido

<div class="grid cards" markdown>

-   :material-download: __[Guia do Jogador e do Pacote](download-and-play/lazy-pack.md)__

    ---

    Baixe o **pacote completo pronto para uso com 0 compilação**, o pacote padrão CurseForge e o servidor, e aprenda sobre a configuração do ambiente de execução **Java 21** e o tutorial de importação do launcher.

    [:octicons-arrow-right-24: Ir agora](download-and-play/lazy-pack.md)

-   :material-chip: __[Detalhes do Mod Principal GTECore](gtecore/overview.md)__

    ---

    Aprofunde-se em conteúdos principais como o **Forno de Refinamento de Imortalidade Yin-Yang Bagua**, a **Formação das Quatro Símbolos**, o **Centro de Processamento de Minérios**, o **Anel do Milagre**, os **Circuitos de Supercordas e Yin-Yang**, e o **AE2 Modelo de Montagem Plus**.

    [:octicons-arrow-right-24: Ir agora](gtecore/overview.md)

-   :material-cog: __[Ramo do Mod GTM Reborn](gtm-reborn/index.md)__

    ---

    Conheça as receitas de múltiplos amperes, o modo de processamento em lote, o overclock de 1 tick Subtick, os testes automatizados GameTest e os recursos de saída de fluidos por intervalo trazidos pelo ramo `satou`.

    [:octicons-arrow-right-24: Ir agora](gtm-reborn/index.md)

-   :material-code-tags: __[KubeJS Modding e Ferramentas de Desenvolvimento](kubejs/scripting-guide.md)__

    ---

    Aprenda a registrar materiais no KubeJS, escrever receitas e usar a ferramenta integrada de seleção de caixa de madeira `/dumpmultiblock` para exportar código de estrutura de multibloco com um clique.

    [:octicons-arrow-right-24: Ir agora](kubejs/scripting-guide.md)

-   :material-hammer-wrench: __[Manual Prático para Desenvolvedores e Prevenção de Crash](development/quick-start.md)__

    ---

    Domine o `run_game.bat` para iniciar em segundos sem launcher, o `link_to_launcher.bat` para mapeamento de diretório sem cópia, e a regra de ouro para evitar crashes de Mixin Accessor.

    [:octicons-arrow-right-24: Ir agora](development/quick-start.md)

-   :material-robot: __[Pipeline CI/CD e Tradução por IA](ci-cd-and-translation/ci-pipeline.md)__

    ---

    Entenda a construção paralela automatizada de múltiplos módulos baseada em GitHub Actions, o empacotamento Packwiz, a publicação Maven e o script de internacionalização por IA `opencode_translate.py`.

    [:octicons-arrow-right-24: Ir agora](ci-cd-and-translation/ci-pipeline.md)

</div>

---

## 🛠️ Informações Básicas do Projeto

| Item de Configuração | Descrição |
| :--- | :--- |
| **Nome do Projeto** | `GregtechEasy` (`gte-multi`) |
| **Cadeia de Ferramentas de Execução e Compilação** | **JDK 21** (uso obrigatório do Toolchain Java 21, todos os submódulos estritamente unificados) |
| **Versão do Jogo** | Minecraft `1.20.1` (Forge `47.4.1`) |
| **Licença de Código Aberto** | LGPL-3.0 / MIT |
| **Ramo Padrão** | Repositório principal `main` / `master`, GTM-Reborn `satou`, GT-- `kotlin`, GTECore `master` |