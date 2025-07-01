# Portafolio - Borja Pardo Juanes

![Vista previa del Portafolio](https://github.com/eltitoborja/Portafolio/blob/main/Captura%20de%20pantalla%202025-07-01%20125832.png?raw=true)

### [➡️ Ver Demo en Vivo ⬅️](https://eltitoborja.github.io/Portafolio/)

---

## 📖 Sobre el Proyecto

Este repositorio contiene el código fuente de mi portafolio personal, una **página web de una sola página (SPA)** totalmente interactiva y responsiva. Ha sido diseñada desde cero para ofrecer una experiencia de usuario moderna y atractiva, con el objetivo de mostrar de manera efectiva mis proyectos, habilidades y trayectoria como desarrollador de software multiplataforma.

El concepto central es "Código Elegante, Experiencias Fluidas", reflejado en un diseño oscuro y limpio, acentuado con un degradado de colores vibrantes y enriquecido con animaciones sutiles y micro-interacciones.

---

## ✨ Características Principales

* **Diseño Moderno y Atractivo:**
    * Interfaz oscura profesional y elegante.
    * Esquema de color basado en un **degradado de violeta a verde menta** que crea una estética tecnológica y única.

* **Experiencia de Usuario Inmersiva:**
    * **Fondo de Partículas Interactivo:** Un `canvas` animado con partículas que reaccionan al movimiento del cursor, creando una sensación de dinamismo.
    * **Efecto Parallax:** Sutil efecto de profundidad en las imágenes al hacer scroll.
    * **Animaciones Suaves:** Las secciones y elementos aparecen con animaciones de `fade-in`, y las tarjetas de proyecto tienen un efecto `tilt` 3D al pasar el cursor sobre ellas.

* **Secciones Claras y Completas:**
    * **Hero Section:** Titular con animación de revelado de caracteres para captar la atención.
    * **Proyectos:** Galería optimizada para mostrar dos proyectos por fila en escritorio, mejorando el enfoque y la legibilidad.
    * **Stack Tecnológico:** Habilidades organizadas visualmente por categorías (Frontend, Backend, Herramientas) con los logos oficiales de cada tecnología para un reconocimiento rápido.
    * **Sobre Mí y Contacto:** Secciones directas para presentarme y facilitar la comunicación.

* **Funcionalidades Clave:**
    * **Formulario de Contacto Funcional:** Utiliza el protocolo `mailto:` para abrir el cliente de correo por defecto del usuario, pre-rellenando el destinatario, asunto y cuerpo del mensaje.
    * **Botón de Descarga de CV:** Permite a los reclutadores y visitantes descargar una versión en `.txt` de mi currículum directamente desde la web.

* **Rendimiento y Compatibilidad:**
    * **100% Responsivo:** Adaptado para una correcta visualización en dispositivos móviles, tablets y escritorio.
    * **Código Vainilla:** Construido con HTML, CSS y JavaScript puros (Vanilla JS) sin dependencias de frameworks pesados, garantizando una carga rápida y un mantenimiento sencillo.

---

## 🚀 Stack Tecnológico

Este proyecto ha sido construido utilizando tecnologías web estándar, enfocándose en la eficiencia y la personalización.

* **Frontend:**
    * **HTML5:** Estructura semántica y accesible.
    * **CSS3:** Estilos avanzados, animaciones y diseño responsivo.
    * **Tailwind CSS:** Framework CSS de utilidad para agilizar el desarrollo del diseño.
    * **JavaScript (ES6+):** Lógica e interactividad del sitio, incluyendo:
        * Manipulación del DOM.
        * Animación del `canvas` de partículas.
        * Efectos de scroll y parallax.
        * Gestión de eventos.

* **Despliegue:**
    * El sitio está desplegado como una página estática, optimizada para un rendimiento máximo.

---

## ⚙️ Cómo Empezar

Para ejecutar este proyecto en tu máquina local, solo necesitas seguir estos sencillos pasos.

### Prerrequisitos

No se requiere ninguna herramienta o dependencia especial. Solo necesitas un navegador web moderno.

### Instalación

1.  **Clona el repositorio:**
    ```sh
    git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
    ```

2.  **Navega al directorio del proyecto:**
    ```sh
    cd tu-repositorio
    ```

3.  **Abre `index.html`:**
    * Puedes abrir el archivo directamente en tu navegador.
    * Para una mejor experiencia (y evitar posibles problemas con CORS si decides añadir más funcionalidades), te recomiendo usar una extensión como **Live Server** en Visual Studio Code.

---

## 🔧 Guía de Personalización

Puedes personalizar fácilmente este portafolio para adaptarlo a tu información.

1.  **Información Personal y de Contacto:**
    * **Email del Formulario:** En el archivo `index.html`, dentro de la etiqueta `<script>`, busca la línea `mailto:borjap99@gmail.com` y reemplázala con tu dirección de correo.
    * **Textos (Sobre Mí, Títulos):** Edita directamente el contenido de texto dentro de las etiquetas HTML correspondientes (`<h2>`, `<p>`, etc.).

2.  **Contenido del CV:**
    * Dentro de la etiqueta `<script>`, busca la constante `cvContent`. Modifica el texto dentro de las comillas invertidas (`` ` ``) para reflejar tu información profesional.

3.  **Proyectos:**
    * La sección de proyectos se compone de varias tarjetas (`<div class="card-tilt">`). Para modificar un proyecto, edita el contenido de una de estas tarjetas: cambia el título, la descripción, las etiquetas de tecnología y la imagen (`<img src="...">`).
    * Para añadir un nuevo proyecto, duplica una de las tarjetas y actualiza su contenido.

4.  **Habilidades:**
    * La sección de habilidades está organizada en filas (`Frontend`, `Backend`, `Herramientas`).
    * Para añadir una nueva habilidad, puedes copiar uno de los `div` que contienen un logo (`<img>`) y un nombre (`<span>`), y actualizar la `src` de la imagen y el texto. Te recomiendo usar logos en formato SVG de [Devicon](https://devicon.dev/) para mantener la consistencia.

5.  **Esquema de Color:**
    * Para cambiar el degradado principal, modifica las variables CSS en la sección `<style>` de la cabecera del `index.html`:
    ```css
    :root {
        --accent-start: #7F00FF; /* Color de inicio del degradado */
        --accent-end: #00FFA3;   /* Color de fin del degradado */
    }
    ```

---

## ☁️ Despliegue

Puedes desplegar este sitio web fácilmente en cualquier plataforma de alojamiento estático. Aquí tienes dos opciones populares:

* **GitHub Pages:**
    1.  Asegúrate de que tu repositorio en GitHub se llame `tu-usuario.github.io` o activa GitHub Pages en la pestaña "Settings" del repositorio.
    2.  Haz `push` de tus cambios a la rama `main`. ¡Y listo!

* **Vercel / Netlify:**
    1.  Conecta tu cuenta de GitHub a Vercel o Netlify.
    2.  Importa este repositorio.
    3.  La plataforma lo detectará como un sitio estático y lo desplegará automáticamente con cada `push` a la rama principal.

---

## 📄 Licencia

Este proyecto está distribuido bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por visitar mi portafolio! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
