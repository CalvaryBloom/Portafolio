# Mi Portafolio Futurista de Programador

¡Bienvenido a mi portafolio personal! Esta es una landing page interactiva y con un estilo futurista donde muestro mis proyectos, habilidades y cómo puedes contactarme.

![Captura de Pantalla del Portafolio](https://github.com/user-attachments/assets/45a0e0c3-c583-4cda-98b4-31f295bbbcc1)


## ✨ Características Principales

*   **Diseño Futurista y Animado:** Inspirado en interfaces de alta tecnología, con efectos de "paneles flotantes" y animaciones sutiles.
*   **Menú de Navegación Fijo:** Para un fácil acceso a todas las secciones.
*   **Sección "Sobre Mí":** Una breve introducción personal con mi foto.
*   **Subtítulo Dinámico:** Con efecto de máquina de escribir mostrando diferentes facetas de mi perfil.
*   **Sección de Habilidades:** Un vistazo rápido a las tecnologías y herramientas que domino.
*   **Galería de Proyectos:** Muestra de mis trabajos más destacados con enlaces a demos en vivo y repositorios de GitHub.
*   **Formulario de Contacto Funcional:** Integrado con [Formspree](https://formspree.io/) para que puedas enviarme un mensaje directamente.
*   **Enlaces a Redes Sociales:** Conéctate conmigo en GitHub, LinkedIn, Instagram y X.
*   **Efectos de Fondo:** Rejilla sutil, líneas de código fluyendo y partículas flotantes para ambientación.
*   **Diseño Responsivo:** Adaptado para una buena visualización en diferentes tamaños de pantalla (escritorio, tablet, móvil).

## 🚀 Tecnologías Utilizadas

*   **HTML5:** Para la estructura semántica del contenido.
*   **CSS3:**
    *   Variables CSS para una fácil personalización del tema.
    *   Flexbox y Grid para el layout.
    *   Animaciones y Transiciones CSS para efectos dinámicos.
    *   `backdrop-filter` para efectos de "cristal esmerilado".
    *   Pseudo-elementos para detalles de diseño.
    *   Media Queries para el diseño responsivo.
*   **JavaScript (Vanilla):**
    *   Manipulación del DOM para efectos interactivos.
    *   Efecto de máquina de escribir para el subtítulo.
    *   Generación dinámica de partículas en el fondo.
    *   Resaltado del enlace activo en el menú de navegación al hacer scroll.
    *   Manejo del envío del formulario de contacto mediante `fetch` (AJAX) a Formspree.
*   **Formspree:** Para la funcionalidad del backend del formulario de contacto.
*   **Font Awesome:** Para los iconos de redes sociales.
*   **Google Fonts:** Para las tipografías (`Orbitron` y `Roboto`).

## 🛠️ Instalación y Uso Local

Si deseas ejecutar este portafolio localmente:

1.  **Clona el repositorio (si está en GitHub):**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio-portafolio.git
    cd tu-repositorio-portafolio
    ```
2.  **Abre `index.html`:** Simplemente abre el archivo `index.html` en tu navegador web preferido.

**Personalización:**

*   **Información Personal:** Edita `index.html` para cambiar el nombre, la descripción, el texto "Sobre Mí", los proyectos, las habilidades y los enlaces a redes sociales.
*   **Imágenes:**
    *   Reemplaza `profile.jpg` con tu foto de perfil.
    *   Reemplaza `placeholder-project.png` (o los nombres que uses) con las miniaturas de tus proyectos.
*   **Formulario de Contacto:**
    1.  Crea una cuenta en [Formspree.io](https://formspree.io/).
    2.  Crea un nuevo formulario y obtén tu endpoint URL (ej. `https://formspree.io/f/TU_ID_UNICO`).
    3.  Actualiza el atributo `action` de la etiqueta `<form>` en `index.html` con tu endpoint.
    4.  Asegúrate de que el campo de email en el formulario tenga `name="_replyto"`.
*   **Colores y Estilos:** Modifica las variables CSS en la sección `:root` de `styles.css` para cambiar el esquema de colores principal, fuentes, o la intensidad de los efectos de brillo.
*   **Frases del Typewriter:** Edita el array `phrases` en `script.js` para cambiar el texto del subtítulo animado.

## 🔮 Próximas Mejoras (Ideas)

*   [ ] Añadir un tema claro opcional.
*   [ ] Implementar una carga más optimizada de imágenes.
*   [ ] Integrar animaciones más complejas con librerías como GSAP.
*   [ ] Expandir la sección de proyectos con más detalles o modales.
*   [ ] Añadir internacionalización (i18n) si fuera necesario.

## 🤝 Contribuciones

Si bien este es un portafolio personal, si encuentras algún error o tienes alguna sugerencia de mejora, ¡no dudes en abrir un *issue* o un *pull request*!

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE.md).

---

¡Gracias por visitar mi portafolio! Espero que te guste.

**Borja Pardo Juanes**
[[Enlace a mi LinkedIn](https://www.linkedin.com/in/borja-pardo-juanes-130973335/) | [[Enlace a mi GitHub](https://github.com/eltitoborja/)]
