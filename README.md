<div align="center">
  <img src="https://raw.githubusercontent.com/Tiburonchin/ELENA/main/img/img1.jpeg" width="170" alt="ELENA Project" style="border-radius: 50%; box-shadow: 0 10px 30px rgba(225,29,72,0.22);" />
  <h1>ELENA — Dedicated Interactive Experience</h1>
  <p><i>Un tributo digital interactivo concebido desde la gratitud, el afecto y el diseño web intuitivo.</i></p>

  <p>
    <img src="https://img.shields.io/badge/DEDICATED_TO-ELENA-FF0055?style=for-the-badge&logo=heart&logoColor=white" alt="Dedicated to Elena" />
    <img src="https://img.shields.io/badge/PURPOSE-GRATITUDE_%26_MEMORY-A855F7?style=for-the-badge&logo=affinitydesigner&logoColor=white" alt="Purpose" />
    <img src="https://img.shields.io/badge/ARCHITECTURE-RESPONSIVE_SPA-38BDF8?style=for-the-badge&logo=javascript&logoColor=black" alt="Architecture" />
  </p>
</div>

---

### // NOTA DEL AUTOR &amp; SIGNIFICADO DEL PROYECTO //

> *"En el camino de la ingeniería y la vida universitaria, contar con alguien incondicional que te acompaña, cree en ti en cada desvelo y te impulsa a seguir adelante no tiene precio. Este proyecto fue programado línea por línea con mucho cariño y gratitud profunda hacia mi compañera de vida y apoyo constante: Elena. A través de este espacio interactivo quise plasmar que el software también es un lenguaje para inmortalizar momentos especiales y agradecer a quien siempre ha estado a mi lado."*
> 
> — **Edgar Ramos (Tiburonchin)**

---

### // PROPÓSITO &amp; CONCEPTO DE EXPERIENCIA //

**ELENA** es una aplicación web interactiva diseñada bajo un enfoque de **narrativa guiada por pasos (*multi-step experiential card*)**. Combina micro-animaciones, gamificación afectiva y validaciones dinámicas para construir una experiencia de usuario lúdica, cercana y visualmente armónica:

* **Mecánica Lúdica de Decisión:** Detección de puntero y eventos táctiles en pantalla para generar botones reactivos y evasivos en respuestas humorísticas, dinamizando la interacción.
* **Flujo Progresivo de Estados:** Transición suave entre estados de consulta, mensajes emotivos y confirmación sin recarga de pantalla (SPA ligera).
* **Agenda y Planificación Interactiva:** Módulo de selección de fechas y horarios que valida la disponibilidad de forma amigable.
* **Tarjeta de Invitación Final:** Consolidación gráfica personalizada con stickers, mensajes y confirmación estructurada para compartir.

---

### // ESPECIFICACIÓN TÉCNICA //

A pesar de su naturaleza íntima y emocional, la aplicación fue construida manteniendo estándares rigurosos de desarrollo web frontend:

* **Estructura Semántica (HTML5):** Arquitectura limpia basada en contenedores de estado, modularidad para cada fase del wizard y optimización de meta-etiquetas responsivas.
* **Diseño y Estilizado (CSS3 Moderno):**
  * Variables nativas CSS para paleta tonal cálida y armónica.
  * Transiciones y animaciones `@keyframes` con aceleración por hardware (`transform`, `opacity`).
  * Enfoque *Mobile-First* con adaptabilidad fluida a cualquier resolución de pantalla (smartphones y tablets).
* **Lógica Reactiva (JavaScript ES6+):**
  * Máquina de estados finita en cliente para gestionar el avance entre etapas.
  * Captura de eventos del DOM en tiempo real (`pointermove`, `click`, validación de campos de fecha/hora).
  * Cero dependencias externas pesadas, asegurando una carga ultrarrápida e instantánea.

---

### // DESPLIEGUE &amp; VISUALIZACIÓN //

1. **Clonación del repositorio:**
   ```bash
   git clone https://github.com/Tiburonchin/ELENA.git
   ```
2. **Ejecución inmediata:**
   No requiere entornos Node.js ni compilación backend. Basta con abrir `index.html` en cualquier navegador web moderno o montarlo en GitHub Pages / Vercel para su visualización en línea.

---

<div align="center">
  <sub>Diseñado y programado con afecto y dedicación por <a href="https://github.com/Tiburonchin">Edgar Ramos</a></sub>
</div>
