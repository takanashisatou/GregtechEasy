# Documentação Oficial do GregTech Easy (GTE)

Bem-vindo ao guia oficial abrangente do pacote de mods **GregTech Easy (GTE)**!

O GTE é um pacote de mods moderno para Minecraft 1.20.1 com o conceito central de **"Simples, Divertido, Interessante e de Curta Duração"**.

---

## ⚡ Índice de Navegação Rápida

<div class="grid cards" markdown>

-   :material-download: __[Guia do Jogador e do Pacote de Mods](download-and-play/lazy-pack.md)__

    ---

    Baixe o **pacote completo pronto para jogar com 0 compilação**, o pacote padrão CurseForge e o servidor, e aprenda sobre a configuração do ambiente de execução **Java 21** e os tutoriais de importação no launcher.

    [:octicons-arrow-right-24: Ir agora](download-and-play/lazy-pack.md)

-   :material-chip: __[Detalhes do Mod Principal GTECore](gtecore/overview.md)__

    ---

    Aprofunde-se no **Fornalha de Refinamento Yin-Yang Bagua**, **Formação dos Quatro Símbolos**, **Centro de Processamento de Minérios**, **Anel do Milagre**, **Circuitos de Supercordas e Yin-Yang**, **AE2 Modelo de Montagem Plus** e outros conteúdos principais.

    [:octicons-arrow-right-24: Ir agora](gtecore/overview.md)

-   :material-cog: __[Ramo do Mod GTM Reborn](gtm-reborn/index.md)__

    ---

    Conheça as receitas de múltiplos amperes, o modo de processamento em lote, o overclock de 1t Subtick, os testes automatizados GameTest e os recursos de saída de fluido por intervalo trazidos pelo ramo `satou`.

    [:octicons-arrow-right-24: Ir agora](gtm-reborn/index.md)

-   :material-code-tags: __[KubeJS Modding e Ferramentas de Desenvolvimento](kubejs/scripting-guide.md)__

    ---

    Aprenda a registrar materiais, escrever receitas no KubeJS e usar a ferramenta de seleção de machado de madeira `/dumpmultiblock` integrada para exportar código de estrutura de multiblocos com um clique.

    [:octicons-arrow-right-24: Ir agora](kubejs/scripting-guide.md)

-   :material-hammer-wrench: __[Manual Prático para Desenvolvedores e Prevenção de Crash](development/quick-start.md)__

    ---

    Domine o `run_game.bat` para iniciar em segundos sem launcher, o `link_to_launcher.bat` para mapeamento de diretório sem cópia, e a regra de ouro para eliminar crashes de Mixin Accessor.

    [:octicons-arrow-right-24: Ir agora](development/quick-start.md)

-   :material-robot: __[Pipeline CI/CD e Tradução por IA](ci-cd-and-translation/ci-pipeline.md)__

    ---

    Entenda a construção paralela automatizada de múltiplos módulos baseada no GitHub Actions, empacotamento Packwiz, publicação Maven e o script de internacionalização por IA `opencode_translate.py`.

    [:octicons-arrow-right-24: Ir agora](ci-cd-and-translation/ci-pipeline.md)

</div>

---

## 🛠️ Informações Básicas do Projeto

| Item de Configuração | Descrição |
| :--- | :--- |
| **Nome do Projeto** | `GregtechEasy` (`gte-multi`) |
| **Toolchain de Execução e Compilação** | **JDK 21** (Toolchain Java 21 obrigatório, estritamente unificado em todos os submódulos) |
| **Versão do Jogo** | Minecraft `1.20.1` (Forge `47.4.1`) |
| **Licença de Código Aberto** | LGPL-3.0 / MIT |
| **Ramos Padrão** | Repositório principal `main` / `master`, GTM-Reborn `satou`, GT-- `kotlin`, GTECore `master` |