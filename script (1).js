window.onload = function(event) {
    var app = new App();
    window.app = app;
  }
  
  // Activar el movimiento automático del carrusel
  setInterval(function() {
    app.autoMove();
  }, 3000); // Cambia 3000 por el intervalo de tiempo deseado en milisegundos


// Agregar el siguiente método a la clase App
App.prototype.autoMove = function() {
  const carruselList = document.querySelector('.carrousel-list');
  const track = carruselList.querySelector('.carrousel-track');
  const carrusel = track.querySelectorAll('.carrusel');
  
  const carruselWidth = carrusel[0].offsetWidth;
  
  const trackWidth = track.offsetWidth;
  const listWidth = carruselList.offsetWidth;
  
  let leftPosition = track.style.left !== "" ? parseFloat(track.style.left.slice(0, -2) * -1) : 0;
  
  // Mover al siguiente carrusel automáticamente
  if (leftPosition < (trackWidth - listWidth)) {
    track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
  } else {
    // Volver al inicio del carrusel
    track.style.left = '0px';
  }
}
  function App() {}
  
  App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentElement;
    const track = carruselList.querySelector('.carrousel-track');
    const carrusel = track.querySelectorAll('.carrusel');
  
    const carruselWidth = carrusel[0].offsetWidth;
  
    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;
  
    let leftPosition = track.style.left !== "" ? parseFloat(track.style.left.slice(0, -2) * -1) : 0;
    btn.dataset.button == "button-prev" ? this.prevAction(leftPosition, carruselWidth, track) : this.nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
  }
  
  App.prototype.prevAction = function(leftPosition, carruselWidth, track) {
    if (leftPosition > 0) {
      track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
  }
  
  App.prototype.nextAction = function(leftPosition, trackWidth, listWidth, carruselWidth, track) {
    if (leftPosition < (trackWidth - listWidth)) {
      track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
  }


     






