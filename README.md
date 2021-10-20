# DesafioRicomida

● Integrando jQuery.
● Bootstrap JS.

El siguiente desafío permitirá al estudiante practicar las habilidades adquiridas hasta el
momento en relación con HTML, CSS, Bootstrap y jQuery. Por consiguiente, este desafío
consiste en la construcción de una página web relacionada con la preparación de comidas y
muestra de recetas, todo el sitio debe estar construido con características responsivas,
partiendo de una maqueta con su guía de estilos, en donde tendrán que desarrollar desde
cero el esqueleto de la página web (HTML), luego ir agregando los estilos indicados para
mejorar la apariencia (CSS), seguidamente agregar elementos y componentes de Bootstrap
para mejorar aún más el estilo y permitir que el sitio se adapte a cualquier dispositivo
(tablet, móvil, entre otros), agregando componentes especiales de Bootstrap que requieren
la incorporación de jQuery, como el caso de los Tooltips. Finalmente, la página web tendrá
tres interacciones que se activan mediante eventos provocados por el usuario, como lo son
los eventos de “click” y “dblclick”, métodos como “toggle” y “on” y selectores de id, etiquetas
y clases, permitiendo la ejecución de ventanas emergentes, el cambio de estilos de textos y
la aparición y desaparición de elementos mediante animaciones.

Requerimientos:

1. Carousel: Utilizar el carousel de Bootstrap con 2 carousel ítems y cada uno con 4
imágenes en su interior. Éste en tamaños sm, xs debe desaparecer.
2. Tooltip: Incluir un botón "Enviar por correo" con un tooltip aplicado.
3. Evento: Utilizar el evento “click” de jquery para mostrar una alerta al hacer un clic
sobre el botón de "Enviar por Correo" mediante el uso de los selectores por Id,
implementar el id a la etiqueta del botón con nombre: "enviarCorreo". El mensaje a
mostrar en la alerta deberá ser: "El correo fue enviado correctamente...".
4. Selectores de etiqueta: Utilizando los selectores de etiqueta y el método de jQuery
`on` con el evento `dblclick`, solamente modificar el color del texto de los títulos
"INGREDIENTES" y "PREPARACIÓN" a color rojo cuando se haga doble clic sobre
cada uno de ellos por individual.
5. Selectores de clase: Implementar los selectores de clases, utilizar el método de
jQuery denominado `toggle` para hacer desaparecer y aparecer el contenido en todas
las tarjetas "card" de la sección de Recetas Relacionadas, esto debe suceder cuando
el usuario haga un clic sobre el título de cualquiera de las tres tarjetas.
