# Pipeline de CI/CD para Build Automatizado, Empacotamento e Publicação Maven

A GTE estabeleceu um pipeline de **GitHub Actions CI/CD** altamente automatizado e com múltiplos artefatos em paralelo (arquivos de configuração localizados em `.github/workflows/sync-build.yml` e `release-publish.yml`).

---

## 🔄 Arquitetura Completa do Pipeline CI (`sync-build.yml`)

Sempre que código é enviado para os ramos `master` / `main` / `satou`, um PR é submetido ou uma Release Tag é acionada, o GitHub Actions executa automaticamente o seguinte pipeline padrão:

```mermaid
flowchart TD
    A[Push de código / Acionamento de Tag] --> B[Checkout de submódulos recursivos & Configuração de JDK 21 / Python 3.11 / Go]
    B --> C[Sincronização incremental de ativos de arte Blockbench via Gradle syncBlockbenchAssets]
    C --> D[Compilação de alta concorrência em múltiplos módulos & Testes automatizados GameTest em ambiente real]
    D --> E[Copiar Jars gerados para overrides/mods & Coletar para build/artifacts]
    E --> F[Executar opencode_translate.py para tradução internacional AI completa/incremental]
    F --> G[Empacotamento padrão Packwiz: Pacote CurseForge + Patch do manifest Java 21]
    G --> H[Python constrói o pacote cliente completo de mods GTE-FullMod]
    H --> I[Packwiz exporta pacote de servidor puro]
    I --> J[Enviar todos os artefatos de Release para o armazenamento de Actions Artifacts]
    J --> K[Construir repositório Maven estático e implantar no GitHub Pages (gh-pages)]
    J --> L[Quando Tag é acionada: Publicação automática na plataforma CurseForge]
```

---

## 📦 Detalhes das Três Principais Tarefas de Empacotamento

### 1. Pacote Padrão CurseForge e Patch Java 21
- **Exportação Packwiz**: Execute `packwiz curseforge export` para gerar o pacote padrão.
- **Patch automático do manifest.json**: Para o problema de alguns launchers de terceiros que atribuem Java 17 por padrão ao analisar pacotes CurseForge, o CI descompacta automaticamente o zip, usa um script Python para **forçar a gravação de 21** em `minecraft.javaVersion` e no `javaVersion` de nível superior no `manifest.json`, e então reempacota.

### 2. Pacote Cliente Completo de Mods para Jogadores (`build_full_mod_pack.py`)
- O script Python extrai automaticamente os Jars principais mais recentes de `build/libs/` de cada módulo.
- Mescla automaticamente os Mods de extensão chave em `modules/gtecore/gradle/libs/`.
- Empacota todas as configurações, scripts KubeJS e o manual de Patchouli em um `GTE-FullMod-*.zip` plano (com `mods/`, `config/`, `defaultconfigs/` e `kubejs/` no nível superior), com o guia de instalação em chinês `README_安装必看.txt` incluso.

### 3. Pacote de Exportação para Servidor (`packwiz server export`)
- Remove automaticamente Mods de otimização exclusivos do cliente (como camadas de skin 3D, shaders, bindings de teclas, etc.), gerando um servidor puro que pode ser implantado diretamente em servidores de produção Linux/Windows.

---

## 🌐 Implantação do Repositório Maven Estático no GitHub Pages

O pipeline usa a tarefa `publish` do Gradle para construir todos os submódulos (`gtecore`, `gtm-reborn`, `gt--`) como artefatos Maven padrão e os implanta no ramo `gh-pages`:

```groovy
// Referencie o repositório Maven GTE diretamente em Mods de terceiros ou projetos de desenvolvimento
repositories {
    maven {
        name = "GTE GitHub Pages Maven"
        url = "https://takanashisatou.github.io/GregtechEasy/"
    }
}

dependencies {
    implementation fg.deobf("org.satou.gtecore:gtecore-1.20.1:1.0.0")
}
```

---

## 🏷️ Fluxo de Trabalho de Publicação Manual e Versionamento (`release-publish.yml`)

O projeto adota um fluxo de Release Git padronizado:
1. Acione manualmente **Manual Publish Release** na página do GitHub Actions, inserindo o número da versão (ex.: `2.3.0`).
2. O fluxo de trabalho cria automaticamente um PR `dev -> release`, executa a validação CI e faz Squash Merge automaticamente.
3. Cria automaticamente a Git Tag `v2.3.0` no ramo `release` e faz push.
4. O evento de push da Tag aciona automaticamente `sync-build.yml`, concluindo a publicação de artefatos em todos os canais.