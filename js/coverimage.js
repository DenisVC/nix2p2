// Realmente no es algo importante, pero es un detalle bastante interesante. Simplemente al
// poner el mouse encima del logo principal ubicado en home, este cambia de color dependiendo
// si está encima o no.

const image = document.querySelector(".logo"); // Definimos en constante la clase del logo (Ya que esta no cambia nunca)
let src = "../src/logos/4.png"; // Reemplazar imagen2.jpg por la ruta de la imagen a cambiar

image.addEventListener("mouseover", function () {
  src = "../src/logos/4.png"; //
  image.src = src;
});

image.addEventListener("mouseout", function () {
  src = "../src/logos/3.png"; // Cambiamos al otro logo.
  image.src = src;
});
