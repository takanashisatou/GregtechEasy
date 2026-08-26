# 防崩溃开发守则与实战排错经验库 (Guia Anti-Crash)

Em ambientes de desenvolvimento Minecraft com múltiplos módulos, múltiplos Classloaders e complexo aprimoramento de bytecode Mixin, algumas práticas descuidadas podem levar a falhas catastróficas em tempo de execução.

Este manual resume as **cinco regras de ouro anti-crash** e a **biblioteca de experiência de solução de problemas de falhas frequentes** acumuladas na prática do projeto GTE.

---

## 🛡️ As Cinco Regras de Ouro do Desenvolvimento Anti-Crash (CRÍTICO)

### Regra de Ouro 1: Proibido Forçar Cast de Interfaces Mixin Accessor (Nunca Force-Cast Accessors)

- **Causa raiz da falha**: Em ambientes multi-módulo ou durante o carregamento de Addons, classes nativas do Minecraft (como `BlockBehaviour.Properties`) são instanciadas pelo Classloader inicial. Nesse momento, as interfaces Mixin podem ainda não ter passado pela tecelagem de bytecode, e o cast forçado disparará diretamente uma `ClassCastException`!
- **Escrita errada (proibida)**:
  ```java
  // Errado! Durante o carregamento inicial de classes, causará ClassCastException
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **Escrita correta (com guarda de segurança)**:
  ```java
  // Correto: usar guarda de padrão instanceof
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **Melhor solução**: Priorizar APIs nativas Vanilla/Forge (por exemplo, obter o intervalo de inteiros via `property.getPossibleValues()` em vez de forçar cast para `IntegerPropertyAccessor`).

---

### Regra de Ouro 2: Proibido Colocar Mods de Otimização/Shaders de Produção no Ambiente de Desenvolvimento

- **Causa raiz da falha**: Mods de otimização de produção como `Oculus`, `Embeddium`, `ModernFix`, `ModernUI` possuem mapeamentos Mixin SRG hardcoded (como `f_117950_`, `m_91302_`). No entanto, o ambiente de desenvolvimento Gradle `runClient` roda sob mapeamentos Mojang desofuscados, causando diretamente a falha `InvalidMixinException`.
- **Princípio de governança**: Colocar mods de otimização em `gte/overrides/mods/` (para uso com lançadores comuns) e proibir sua inclusão nas dependências de build de `modules/gte-dev-runtime`.

---

### Regra de Ouro 3: Dependências do Ambiente de Desenvolvimento Devem Usar Uniformemente `modLocalRuntime`

- **Causa raiz da falha**: `localRuntime` comum ou `fileTree` não acionam o remapeador (Remapper) de desofuscação do ModDevGradle, resultando em símbolos não encontrados ou nomes de ofuscação quebrados em tempo de execução.
- **Princípio de governança**: Em `modules/gte-dev-runtime/build.gradle`, deve-se declarar `modLocalRuntime(...)` e configurar `obfuscation.createRemappingConfiguration(configurations.localRuntime)`.

---

### Regra de Ouro 4: Solução para Deadlock de Compilação Incremental do Gradle (`NoSuchFileException`)

- **Sintoma**: Ao executar `compileJava` ou `build`, aparece `NoSuchFileException: ...\build\classes\java\main\...` ou `Unable to delete directory 'build'`.
- **Causa raiz**: Processos Gradle Daemon residuais em segundo plano ocupam travas de arquivo do Windows.
- **Solução padrão**:
  ```powershell
  # 1. Encerrar completamente os processos Gradle Daemon residuais em segundo plano
  .\gradlew.bat --stop

  # 2. Excluir os diretórios de cache de build conflitantes e recompilar
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### Regra de Ouro 5: Auto-Verificação Obrigatória de Integração Após Modificar o `gtm-reborn` Subjacente

Ao modificar máquinas base, sistema de materiais, RecipeType, condições de receita ou Capabilities do `gtm-reborn`, é obrigatório executar as três etapas de verificação a seguir em ordem:
1. **Verificar a integridade de compilação do `gtecore`**: Executar `.\gradlew.bat :modules:gtecore:compileJava`.
2. **Verificar scripts de integração KubeJS**: Verificar os eventos de registro GTCEu em `startup_scripts/` e as referências de Machine em `server_scripts/`.
3. **Verificar referências de itens no FTB Quests**: Verificar se o livro de missões referencia IDs de itens que foram renomeados ou removidos.

---

## 📚 Biblioteca de Revisão de Falhas Reais e Receitas de Correção (Post-Mortems)

### Caso 1: `GTBlocks.copy` / Registro de Minérios com `ClassCastException`
- **Stack trace de erro**: `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **Solução**: Usar `if (props instanceof BlockPropertiesAccessor acc)` para proteger toda a lógica de cópia de propriedades.

### Caso 2: Falha de Cast Forçado de `GrowingPlantRender` para `IntegerPropertyAccessor`
- **Stack trace de erro**: `IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **Solução**: Substituir por operação de stream nativa:
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### Caso 3: `AssertionError` em `GregTechDatagen.initPre`
- **Stack trace de erro**: `AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **Solução**: O Map estático de `RegistrateDataProvider` só é inicializado sob o parâmetro `--datagen`. Envolver a chamada em `try { ... } catch (Throwable ignored) { }` evita o erro durante a inicialização normal.

### Caso 4: `NoClassDefFoundError` devido à ausência de `PonderPlugin`
- **Stack trace de erro**: `GTMachines.<clinit>` lança `NoClassDefFoundError: PonderPlugin`, seguido de falha do Ponder indicando `requires flywheel`
- **Solução**: Em `modules/gte-dev-runtime/build.gradle`, incluir tanto `modLocalRuntime(forge.ponder)` quanto `modLocalRuntime(forge.flywheel.forge)`.