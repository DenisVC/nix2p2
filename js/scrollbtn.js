const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    // Ajustar la cantidad de desplazamiento que se necesita para mostrar el botón
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0); // Subimos a la posición 0,0 de la página, es decir, la inicial.
});
