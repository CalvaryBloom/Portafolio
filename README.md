Portafolio Interactivo de Desarrollador - Borja Pardo Juanes
Este repositorio contiene el código fuente de mi portafolio personal, una página web interactiva y moderna de una sola página diseñada para mostrar mis proyectos, habilidades y experiencia como desarrollador de aplicaciones multiplataforma.

✨ Características Principales
Diseño Moderno y Atractivo: Interfaz oscura con un degradado de violeta a verde menta que crea una estética tecnológica y elegante.

Fondo Animado Interactivo: Un fondo de partículas generadas con canvas que reaccionan al movimiento del cursor, creando una experiencia inmersiva.

Animaciones y Micro-interacciones:

Efecto Parallax sutil en las imágenes para añadir profundidad al hacer scroll.

Efectos de "tilt" en las tarjetas de proyecto que reaccionan al cursor.

Animaciones de entrada para las secciones que aparecen suavemente al desplazarse.

Secciones Claras y Completas:

Hero Section: Titular con animación de revelado de caracteres.

Proyectos: Galería de tarjetas con dos proyectos por fila para una mejor visualización en escritorio.

Habilidades: Sección visualmente atractiva con los logos de las tecnologías, organizadas por categorías (Frontend, Backend y Herramientas).

Sobre Mí y Contacto: Secciones claras y directas.

Totalmente Funcional:

Formulario de Contacto: El botón "Enviar Mensaje" abre el cliente de correo por defecto del usuario con la información pre-rellenada (mailto:).

Descarga de CV: Botón funcional para descargar un archivo de texto con la información del CV.

Diseño Responsivo: Adaptado para una correcta visualización en dispositivos móviles, tablets y escritorio.

🚀 Tecnologías Utilizadas
HTML5: Estructura semántica del contenido.

CSS3 (con Tailwind CSS): Diseño y estilos modernos. Se utilizan variables CSS para una fácil personalización del tema.

JavaScript (Vanilla JS): Para toda la interactividad, incluyendo:

Animación del canvas de partículas.

Lógica del menú móvil.

Animaciones de scroll.

Funcionalidad del formulario de contacto y descarga de CV.

⚙️ Cómo Empezar
Este es un proyecto de sitio web estático. No requiere dependencias ni un proceso de compilación.

Clona este repositorio:

git clone https://github.com/tu-usuario/tu-repositorio.git

Abre el archivo index.html en tu navegador web preferido.

🔧 Personalización
Puedes personalizar fácilmente los aspectos clave del portafolio editando el archivo index.html:

Información de Contacto:

Para cambiar el email de destino del formulario, busca la línea mailto:borjap99@gmail.com en el script y reemplázala con tu correo.

Contenido del CV:

Busca la constante cvContent en el script y edita el texto para que coincida con tu CV.

Proyectos y Habilidades:

El contenido de los proyectos y las habilidades está directamente en el HTML. Puedes modificar los títulos, descripciones, imágenes y logos editando las secciones correspondientes.

Esquema de Color:

Para cambiar el degradado de color, modifica las variables CSS en la sección <style> de la cabecera:

:root {
    --accent-start: #7F00FF; /* Color de inicio del degradado */
    --accent-end: #00FFA3;   /* Color de fin del degradado */
}

📄 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

¡Gracias por visitar mi portafolio! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
