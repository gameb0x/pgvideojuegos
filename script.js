// Obtener todos los contenedores de oferta
var containers = document.getElementsByClassName('container');

// Recorrer los contenedores
for (var i = 0; i < containers.length; i++) {
  // Obtener la imagen y el botón de oferta de cada contenedor
  var image = containers[i].getElementsByTagName('img')[0];
  var offerButton = containers[i].getElementsByClassName('discount')[0];

  // Añadir el evento de pasar el mouse a la imagen
  image.addEventListener('mouseover', function() {
    // Agregar una clase CSS para el realce
    this.classList.add('highlight');
  });

  // Añadir el evento de quitar el mouse de la imagen
  image.addEventListener('mouseout', function() {
    // Remover la clase CSS para quitar el realce
    this.classList.remove('highlight');
  });

  // Añadir el evento de hacer clic en el botón de oferta
  offerButton.addEventListener('click', function(event) {
    // Prevenir cualquier acción predeterminada al hacer clic en el botón
    event.preventDefault();
  });
}