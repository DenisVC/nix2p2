function showSection(id) {
  // Ocultar todas las secciones
  var secciones = document.getElementsByClassName("seccion");
  for (var i = 0; i < secciones.length; i++) {
    secciones[i].style.display = "none";
  }

  // Desactivar todos los botones
  var botones = document
    .getElementsByClassName("selec tor")[0]
    .getElementsByTagName("button");
  for (var i = 0; i < botones.length; i++) {
    botones[i].className = "";
  }
  zo;
  // Mostrar la sección correspondiente y activar el botón correspondiente
  document.getElementById(id).style.display = "block";
  event.currentTarget.className = "active";
}
