"use strict";

let btnIdioma = document.getElementById("btn-idioma");
let btnTema = document.getElementById("btn-tema");
let idiomaActual = "español";
let idioma = 0; // 0 para espanol y 1 para ingles;
let temaActual = "claro";
let texto = {
  contacto: ["Contáctame", "Contact me"],
  saludo: ["¡Hola, me dicen lasfito!", "Hi, people call me lasfito!"],
  hook: [
    "Soy desarrollador de páginas y aplicaciones web",
    "I am a front-end web & app developer",
  ],
  acerca: ["Wenas noshes", "Good night"],
};

const getLanguage = () =>
  navigator.userLanguage ||
  (navigator.languages &&
    navigator.languages.length &&
    navigator.languages[0]) ||
  navigator.language ||
  navigator.browserLanguage ||
  navigator.systemLanguage;
var idiomaUsuario = getLanguage().slice(0, 2);

//traducir automaticamente
if (idiomaUsuario === "en") {
  tradEng();
}

//sticky header mostrar
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.remove("invisible", window.scrollY > 50);
});

//idioma
btnIdioma.addEventListener("click", () => {
  if (idioma == 0) {
    tradEng();
  } else if (idioma == 1) {
    tradEsp();
  }
});

//tema
btnTema.addEventListener("click", () => {
  temaActual == "claro" ? oscurecer() : aclarar();
});

function oscurecer() {
  btnTema.textContent = "🌞";
  temaActual = "oscuro";
  document.body.classList.toggle("oscuro");
}

function aclarar() {
  btnTema.textContent = "🌙";
  temaActual = "claro";
  document.body.classList.toggle("oscuro");
}

function tradEsp() {
  let keys = Object.keys(texto);
  console.log("leer keys del objeto", keys);
  keys.forEach((codigo) => {
    document.getElementById(codigo).textContent = texto[codigo][0];
  });

  btnIdioma.textContent = "🌮";
  idioma = 0;
}

function tradEng() {
  let keys = Object.keys(texto);
  console.log("leer keys del objeto", keys);
  keys.forEach((codigo) => {
    document.getElementById(codigo).textContent = texto[codigo][1];
  });

  btnIdioma.textContent = "🍔";
  idioma = 1;
}
