const palabras = [
  "amor",
  "tolerancia",
  "respeto",
  "responsabilidad",
  "amistad",
];
const randomIndex = Math.floor(Math.random() * (palabras.length - 1 + 1));
console.log(palabras[randomIndex]);

let numeroIntentos = "juanpi";

let numeroIntentosDom = document.querySelector(".numero");
numeroIntentosDom.textContent = numeroIntentos;
