let footer = document.querySelector("#footer");

window.addEventListener("scroll", function () {
  // Altura del cuerpo de la página
  const bodyHeight = document.body.clientHeight;
  // Altura de la ventana del navegador
  const windowHeight = window.innerHeight;
  // Posición vertical del usuario en la página
  const scrollPosition =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  // Si la posición vertical del usuario es mayor o igual a la altura del cuerpo menos la altura de la ventana, se muestra el footer
  if (scrollPosition >= bodyHeight - windowHeight) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
});
