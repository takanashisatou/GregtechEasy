# Guia de Importação CurseForge e Implantação de Servidor

Além do pacote cliente completo de mods, o GTE oferece um pacote padrão CurseForge e um pacote de servidor construídos automaticamente com base no **Packwiz**.

---

## 📦 Importação do Pacote Padrão CurseForge

O arquivo do pacote de mods no formato CurseForge é nomeado `GTE-CurseForge-<versão>.zip`.

### Método de Importação no Cliente

=== "Importação via PCL2 / HMCL"

    1. Abra o launcher e selecione **Instalar nova versão do jogo / Importar pacote de mods**.
    2. Selecione o arquivo `GTE-CurseForge-<versão>.zip` baixado.
    3. O launcher analisará automaticamente o `manifest.json` e fará o download dos mods dependentes em alta velocidade e de forma concorrente.
    4. Após a importação, vá para as configurações da versão e defina o runtime Java como **Java 21**.
    5. Defina a memória (recomendado 8GB ~ 12GB) e inicie o jogo.

=== "Importação via CurseForge App"

    1. Abra o aplicativo CurseForge.
    2. Clique no ícone **Minecraft** à esquerda e entre em **My Modpacks**.
    3. No menu de configurações no canto superior direito, clique em **Create Custom Profile** ➜ **Import**.
    4. Selecione `GTE-CurseForge-<versão>.zip` e aguarde o download automático e a conclusão da instalação.

=== "Importação via Prism Launcher"

    1. Clique em **Add Instance (Adicionar Instância)** ➜ **Import (Importar)**.
    2. Navegue e selecione `GTE-CurseForge-<versão>.zip`.
    3. Após a criação da instância, defina o caminho do Java como **JDK 21** nas propriedades da instância.

---

## 🖥️ Guia de Implantação do Servidor

O arquivo do pacote do servidor é nomeado `GTE-Server-<versão>.zip`.

### 1. Preparação do Ambiente
- Sistema Operacional: Linux (Ubuntu 22.04+ / Debian 12+) ou Windows Server 2022+
- **JDK 21 deve estar pronto**: Execute `java -version` no terminal e confirme que a saída é `openjdk version "21..."`.
- Configuração recomendada: CPU com 4 núcleos ou mais, 16GB de RAM física (alocar 10G ~ 14G para o servidor Minecraft).

### 2. Passos para Implantação

```bash
# 1. Criar o diretório de trabalho do servidor
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. Descompactar o pacote do servidor
unzip GTE-Server-*.zip -d .

# 3. Instalar o núcleo do servidor Forge 1.20.1-47.4.1 (se não estiver pré-instalado)
# Execute o script de instalação para baixar o minecraft_server e as bibliotecas do forge
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. Aceitar o Contrato EULA do Minecraft
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

    $JAVA_CMD $FLAGS @libraries/net/minecraftforge/forge/1.20.1-47.4.1/unix_args.txt nogui
    ```

=== "Windows (`run_server.bat`)"

    ```bat
    @echo off
    set JAVA_CMD=java
    set MEMORY=12G

    set FLAGS=-Xms%MEMORY% -Xmx%MEMORY% -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch

    %JAVA_CMD% %FLAGS% @libraries/net/minecraftforge/forge/1.20.1-47.4.1/win_args.txt nogui
    pause
    ```

---

## ⚙️ Solução de Problemas Comuns (FAQ)

### P1: O servidor apresenta o erro `UnsupportedClassVersionError: ... class file version 65.0` ao iniciar
> **Causa**: A versão do Java em execução no servidor é inferior ao Java 21 (a versão 65.0 representa o JDK 21).  
> **Solução**: No Linux, use `sudo update-alternatives --config java` para alternar para o OpenJDK 21.

### P2: Jogadores entram no servidor e recebem aviso de incompatibilidade da lista de mods
> **Solução**: Certifique-se de que a versão do cliente e a versão do servidor sejam exatamente as mesmas. Cada build do CI do projeto principal gera simultaneamente os artefatos de Cliente e Servidor correspondentes.