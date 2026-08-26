# Guia de Desenvolvimento Anti-Crash e Biblioteca de Experiências de Solução de Problemas (Guia Anti-Crash)

Em ambientes de desenvolvimento Minecraft com múltiplos módulos, múltiplos Classloaders e complexo aprimoramento de bytecode Mixin, algumas práticas de codificação descuidadas podem levar a falhas catastróficas em tempo de execução.

Este manual resume as **Cinco Regras de Ferro Anti-Crash** e a **Biblioteca de Experiências de Solução de Problemas de Falhas de Alta Frequência** destiladas da prática de engenharia do projeto GTE.

---

## 🛡️ As Cinco Regras de Ferro para Desenvolvimento Anti-Crash (CRÍTICO)

### Regra de Ferro 1: Proibido Forçar Cast de Interfaces Mixin Accessor (Nunca Forçar Cast de Accessors)

- **Causa Raiz da Falha**: Em ambientes de múltiplos módulos ou durante o carregamento de Addons, classes nativas do Minecraft (como `BlockBehaviour.Properties`) são instanciadas pelo Classloader inicial. Neste momento, a interface Mixin pode ainda não ter passado pela tecelagem de bytecode, e o forçar cast disparará diretamente uma `ClassCastException`!
- **Escrita Incorreta (Proibida)**:
  ```java
  // Errado! Irá falhar com ClassCastException durante o carregamento inicial de classes
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **Escrita Correta (Com Guarda de Segurança)**:
  ```java
  // Correto: Usar guarda de padrão instanceof
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **Melhor Abordagem**: Priorizar o uso de APIs nativas Vanilla/Forge (por exemplo, obter o intervalo de inteiros via `property.getPossibleValues()` em vez de forçar cast para `IntegerPropertyAccessor`).

---

### Regra de Ferro 2: Proibido Colocar Mods de Otimização/Shader de Produção no Ambiente de Desenvolvimento

- **Causa Raiz da Falha**: Mods de otimização de produção como `Oculus`, `Embeddium`, `ModernFix`, `ModernUI` possuem mapeamentos Mixin SRG ofuscados codificados (ex: `f_117950_`, `m_91302_`). No entanto, o ambiente de desenvolvimento Gradle `runClient` opera sob mapeamentos Mojang desofuscados, levando diretamente a uma falha `InvalidMixinException`.
- **Princípio de Governança**: Colocar mods de otimização em `gte/overrides/mods/` (para uso com lançadores normais). É estritamente proibido adicioná-los como dependências de construção do `modules/gte-dev-runtime`.

---

### Regra de Ferro 3: Dependências do Ambiente de Desenvolvimento Devem Usar Uniformemente `modLocalRuntime`

- **Causa Raiz da Falha**: `localRuntime` comum ou `fileTree` não acionam o Remapeador de desofuscação do ModDevGradle, resultando em símbolos não encontrados ou nomes de ofuscação quebrados em tempo de execução.
- **Princípio de Governança**: Em `modules/gte-dev-runtime/build.gradle`, é obrigatório declarar `modLocalRuntime(...)` e configurar `obfuscation.createRemappingConfiguration(configurations.localRuntime)`.

---

### Regra de Ferro 4: Solução para o Deadlock de Compilação Incremental do Gradle (`NoSuchFileException`)

- **Sintoma**: Ao executar `compileJava` ou `build`, é exibido `NoSuchFileException: ...\build\classes\java\main\...` ou `Unable to delete directory 'build'`.
- **Causa Raiz**: Processos Gradle Daemon residuais em segundo plano estão segurando travas de arquivo do Windows.
- **Solução Padrão**:
  ```powershell
  # 1. Encerrar completamente os processos Gradle Daemon residuais em segundo plano
  .\gradlew.bat --stop

  # 2. Excluir os diretórios de cache 'build' conflitantes e recompilar
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### Regra de Ferro 5: Verificação de Integração Forçada Após Modificar o `gtm-reborn` Subjacente

Ao modificar máquinas base, sistema de materiais, RecipeType, condições de receita ou Capabilities do `gtm-reborn`, as seguintes três etapas de verificação devem ser executadas em ordem:
1. **Verificar a integridade da compilação do `gtecore`**: Executar `.\gradlew.bat :modules:gtecore:compileJava`.
2. **Verificar os scripts de integração KubeJS**: Checar os eventos de registro GTCEu em `startup_scripts/` e as referências de Machine em `server_scripts/`.
3. **Verificar as referências de itens do FTB Quests**: Checar se o livro de missões referencia IDs de itens que foram renomeados ou removidos.

---

## 📚 Biblioteca de Revisão de Falhas Reais e Receitas de Correção (Post-Mortems)

### Caso 1: `GTBlocks.copy` / Registro de Minérios reporta `ClassCastException`
- **Stack Trace de Erro**: `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **Solução de Correção**: Usar `if (props instanceof BlockPropertiesAccessor acc)` para proteger toda a lógica de cópia de propriedades.

### Caso 2: Falha no `GrowingPlantRender` ao Forçar Cast de `IntegerPropertyAccessor`
- **Stack Trace de Erro**: `IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **Solução de Correção**: Substituir por operação de fluxo nativa:
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### Caso 3: `AssertionError` em `GregTechDatagen.initPre`
- **Stack Trace de Erro**: `AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **Solução de Correção**: O Map estático do `RegistrateDataProvider` só é inicializado sob o parâmetro `--datagen`. Envolver a chamada em `try { ... } catch (Throwable ignored) { }` evita o erro durante a inicialização normal.

### Caso 4: `NoClassDefFoundError` devido à falta do `PonderPlugin`
- **Stack Trace de Erro**: `GTMachines.<clinit>` lança `NoClassDefFoundError: PonderPlugin`, seguido por falha do Ponder indicando `requires flywheel`
- **Solução de Correção**: Em `modules/gte-dev-runtime/build.gradle`, adicionar tanto `modLocalRuntime(forge.ponder)` quanto `modLocalRuntime(forge.flywheel.forge)`.