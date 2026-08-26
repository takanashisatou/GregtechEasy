# Guia de Importação do CurseForge e Implantação do Servidor

Além do pacote pronto para uso sem compilação, o GTE fornece pacotes padrão CurseForge e pacotes de servidor construídos automaticamente com base no **Packwiz**.

---

## 📦 Importação do Pacote Padrão CurseForge

O arquivo do pacote de mods no formato CurseForge é nomeado como `GTE-CurseForge-<versão>.zip`.

### Métodos de Importação no Cliente

=== "PCL2 / HMCL"

    1. Abra o launcher e selecione **Instalar nova versão do jogo / Importar pacote de mods**.
    2. Selecione o arquivo `GTE-CurseForge-<versão>.zip` baixado.
    3. O launcher analisará automaticamente o `manifest.json` e baixará os mods dependentes em alta velocidade e concorrência.
    4. Após a importação, vá para as configurações da versão e especifique o runtime Java como **Java 21**.
    5. Defina a memória de execução (recomendado 8GB ~ 12GB) e inicie o jogo.

=== "CurseForge App"

    1. Abra o aplicativo CurseForge.
    2. Clique no ícone **Minecraft** à esquerda e entre em **My Modpacks**.
    3. Clique em **Create Custom Profile** ➜ **Import** no menu de configurações no canto superior direito.
    4. Selecione `GTE-CurseForge-<versão>.zip` e aguarde o download automático e a conclusão da instalação.

=== "Prism Launcher"

    1. Clique em **Add Instance (Adicionar Instância)** ➜ **Import (Importar)**.
    2. Navegue e selecione `GTE-CurseForge-<versão>.zip`.
    3. Após criar a instância, defina o Java para o caminho do **JDK 21** nas propriedades da instância.

---

## 🖥️ Guia de Implantação do Servidor

O pacote de arquivos do servidor é nomeado como `GTE-Server-<versão>.zip`.

### 1. Preparação do Ambiente
- Sistema operacional: Linux (Ubuntu 22.04+ / Debian 12+) ou Windows Server 2022+
- **JDK 21 deve estar pronto**: Execute `java -version` no terminal e confirme que a saída é `openjdk version "21..."`.
- Configuração recomendada: CPU com 4 núcleos ou mais, 16GB de memória física (alocar 10G ~ 14G para o servidor Minecraft).

### 2. Passos de Implantação

```bash
# 1. Criar diretório de trabalho do servidor
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. Extrair o pacote do servidor
unzip GTE-Server-*.zip -d .

# 3. Instalar o núcleo do servidor Forge 1.20.1-47.3.0 / 47.4.4 (se não pré-instalado)
# Executar o script de instalação para baixar o minecraft_server e as bibliotecas do forge
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. Aceitar o contrato EULA do Minecraft
echo "eula=true" > eula.txt
```

### 3. Configuração do Script de Inicialização (`run_server.sh` / `run_server.bat`)

Recomenda-se usar os parâmetros de otimização Aikar para iniciar o servidor:

=== "Linux (`run_server.sh`)"

    ```bash
    #!/bin/bash
    JAVA_CMD="java"
    MEMORY="12G"

    FLAGS="-Xms${MEMORY} -Xmx${MEMORY} \
      -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 \
      -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch \
      -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1ReservePercent=20 \
      -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 \
      -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 \
      -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1"

    $JAVA_CMD $FLAGS @libraries/net/minecraftforge/forge/1.20.1-47.3.0/unix_args.txt nogui
    ```

=== "Windows (`run_server.bat`)"

    ```bat
    @echo off
    set JAVA_CMD=java
    set MEMORY=12G

    set FLAGS=-Xms%MEMORY% -Xmx%MEMORY% -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch

    %JAVA_CMD% %FLAGS% @libraries/net/minecraftforge/forge/1.20.1-47.3.0/win_args.txt nogui
    pause
    ```

---

## ⚙️ Solução de Problemas Comuns (FAQ)

### Q1: Ao iniciar o servidor, aparece `UnsupportedClassVersionError: ... class file version 65.0`
> **Causa**: A versão do Java em execução no servidor é inferior ao Java 21 (a versão 65.0 representa o JDK 21).  
> **Solução**: No Linux, alterne para OpenJDK 21 usando `sudo update-alternatives --config java`.

### Q2: Jogadores entram no servidor e recebem aviso de lista de mods incompatível
> **Solução**: Certifique-se de que a versão do cliente e a versão do servidor sejam exatamente iguais. Cada build de CI do projeto principal gera simultaneamente os artefatos correspondentes de Cliente e Servidor.