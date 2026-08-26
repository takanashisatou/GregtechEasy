# Sistema de Horno de Refinación de Inmortales de Ocho Trigramas Yin-Yang y Formación de Cuatro Símbolos

GTECore ha creado de forma única el **“Sistema de Formación de Ocho Trigramas Taiji y Cuatro Símbolos”**, que combina la filosofía taoísta oriental con la ingeniería industrial moderna. Este sistema constituye el núcleo central para la metalurgia, la síntesis de materiales superconductores y la transición tecnológica inmortal en las etapas media y tardía del juego.

---

## 🌌 Horno de Refinación de Inmortales de Ocho Trigramas Yin-Yang (`yin_yang_eight_trigmas_blast_furnace`)

**El Horno de Refinación de Inmortales de Ocho Trigramas Ziwei** es una de las estructuras multibloque más grandes y mecánicamente precisas en el mundo de los mods de tecnología (ocupa más de 55×55 bloques):

```mermaid
graph TD
    A[Controlador del Horno de Refinación de Inmortales de Ocho Trigramas] --> B[Núcleo central del horno: Bloques mecánicos Li Huo/Kan Shui/Kun Gen y Bobinas Yin-Yang]
    A --> C[Este: Módulo de Formación Qing Long (Dragón Azul)]
    A --> D[Oeste: Módulo de Formación Bai Hu (Tigre Blanco)]
    A --> E[Sur: Módulo de Formación Zhu Que (Pájaro Bermellón)]
    A --> F[Norte: Módulo de Formación Xuan Wu (Tortuga Negra)]
```

### 🧭 Regla de Orientación Feng Shui (Mecanismo Clave)
> [!IMPORTANT]
> **Ley de Orientación Feng Shui**: Debido a restricciones de feng shui y campos magnéticos, **el controlador principal del horno de refinación de inmortales debe colocarse mirando hacia el sur** para conectarse con la energía Yin-Yang del cielo y la tierra y funcionar correctamente.

### Capacidades Básicas del Horno
- **Biblioteca de recetas compatible**: Compatible nativamente con recetas de alto horno estándar (`blast_recipes`), recetas de horno de fundición (`furnace_recipes`), recetas de fundición de aleaciones (`alloy_smelter_recipes`), recetas de alto horno de aleaciones gigantes de GCYM (`alloy_blast_recipes`) y la exclusiva **receta de Ocho Trigramas Yin-Yang (`yin_yang_eight_trigmas_blast`)**.
- **Características de overclocking**: Soporta perfectamente **overclocking instantáneo de 1T Subtick** y **modo por lotes (Batch Mode)**.

---

## 🐉 Submódulos de Formación de Cuatro Símbolos y Detección de Condiciones Dinámicas

Alrededor del horno de refinación de inmortales, se pueden extender cuatro alas de formación: **Este Qing Long, Oeste Bai Hu, Sur Zhu Que, Norte Xuan Wu**:

| Módulo de Formación | Orientación de Formación | Bloque de Formación | Condición de Receta (`RecipeCondition`) | Beneficios y Efectos al Activar |
| :--- | :--- | :--- | :--- | :--- |
| **Formación Qing Long** (`Qing Long`) | **Este (East)** | `qinglong_module` | `QING_LONG_CONDITION` | Activa la tendencia de la madera que genera fuego, reduce significativamente el consumo de energía en la fundición a altas temperaturas y desbloquea recetas de catálisis avanzada de regeneración continua. |
| **Formación Bai Hu** (`Bai Hu`) | **Oeste (West)** | `baihu_module` | `BAI_HU_CONDITION` | El metal maligno domina la conquista, desbloquea recetas para la fisión de metales divinos de alta dureza, elementos de núcleo pesado superdensos y transmutación de metales cuánticos. |
| **Formación Zhu Que** (`Zhu Que`) | **Sur (South)** | `zhuque_module` | `ZHU_QUE_CONDITION` | Fuego de la llama del sur, proporciona temperatura de horno ilimitada, desbloquea recetas de fusión de plasma a nivel estelar y refinación de píldoras divinas. |
| **Formación Xuan Wu** (`Xuan Wu`) | **Norte (North)** | `xuanwu_module` | `XUAN_WU_CONDITION` | El agua de Kan protege, enfría rápidamente productos de alta temperatura, desbloquea recetas de solidificación instantánea y estabilización de antimateria. |

### Detección Dinámica y Retroalimentación de Estado
- El controlador llama automáticamente a `checkModule()` cada vez que escanea la estructura y coincide con la receta para calcular si los bloques de formación en las coordenadas de desplazamiento de las cuatro direcciones están listos.
- Usando **Jade** para apuntar al controlador, se puede ver visualmente el estado de activación de las cuatro formaciones actuales (verde indica activado, rojo indica no listo).

---

## 🔮 Núcleos Derivados del Tao y Matriz de Estrellas

Basado en el horno de refinación de inmortales de ocho trigramas, GTECore extiende aún más una serie de multibloques de técnicas celestiales:

```
Grupo industrial de matriz de alto nivel GTE
├── Matriz de Separación de Cinco Elementos Tai Chi (Tai Chi Five Elements Separation Array)
├── Núcleo Estelar Kun Gen (Kun Gen Star Hub)
├── Motor Qian Qiong (Qian Qiong Engine)
├── Núcleo Tao del Sol Rojo (Red Sun Tao Core)
└── Matriz de Fusión de Estrella en Cenizas (Ashing Star Fusion Array)
```

1. **Matriz de Separación de Cinco Elementos Tai Chi (`taichi_five_elements_separation_array`)**:
   - Separa y analiza cualquier mineral y sustancia química de la realidad y la fantasía en los elementos fundamentales puros de los **Cinco Elementos: Metal, Madera, Agua, Fuego y Tierra**.
2. **Núcleo Estelar Kun Gen (`kun_gen_star_hub`)**:
   - Conecta las ondas gravitacionales de la tierra y las estrellas, utilizado para concentrar gravitones microscópicos y construir micro agujeros negros.
3. **Motor Qian Qiong (`qian_qiong_engine`)**:
   - Motor de extracción de energía del vacío, extrae energía del vacío ilimitada de las fluctuaciones cuánticas de la nada.
4. **Núcleo Tao del Sol Rojo (`red_sun_tao_core`)**:
   - Núcleo estelar artificial ultramicro, simula condiciones físicas extremas de billones de grados de la corona estelar.
5. **Matriz de Fusión de Estrella en Cenizas (`ashing_star_fusion_array`)**:
   - Matriz de fusión de aniquilación de restos de supernova, utilizada para reconstruir el estado de equilibrio de la materia oscura y la antimateria.