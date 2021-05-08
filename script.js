"use strict";

let btnIdioma = document.getElementById("btn-idioma");
let btnTema = document.getElementById("btn-tema");
// let idiomaActual = "español";
let idioma = 0; // 0 para espanol y 1 para ingles;
let temaActual = 0; //0 para claro y 1 para oscuro;
let texto = {
  contacto: ["Contacto", "Contact"],
  saludo: ["¡Hola, me dicen lasfito!", "Hi, people call me lasfito!"],
  hook: [
    "Soy desarrollador de páginas y aplicaciones web",
    "I am a front-end web & app developer",
  ],
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
// window.addEventListener("scroll", () => {
//   let header = document.querySelector("header");
//   header.classList.remove("invisible", window.scrollY > 50);
// });

//idioma
btnIdioma.addEventListener("click", () => {
  idioma === 0 ? tradEng() : tradEsp();
});

//tema
btnTema.addEventListener("click", () => {
  temaActual == 0 ? oscurecer() : aclarar();
});

function oscurecer() {
  btnTema.textContent = "🌞";
  temaActual = 1;
  document.body.classList.toggle("oscuro");
}

function aclarar() {
  btnTema.textContent = "🌙";
  temaActual = 0;
  document.body.classList.toggle("oscuro");
}

function tradEsp() {
  btnIdioma.textContent = "[eng]";
  idioma = 0;
  let keys = Object.keys(texto);
  keys.forEach((codigo) => {
    document.getElementById(codigo).textContent = texto[codigo][0];
  });
}

function tradEng() {
  btnIdioma.textContent = "[esp]";
  idioma = 1;
  let keys = Object.keys(texto);
  keys.forEach((codigo) => {
    document.getElementById(codigo).textContent = texto[codigo][1];
  });
}

// checboxes locochones
let contadorCheck = 0;
let truesAhora = 0;

let checkBoxes = document.querySelectorAll('input[type="checkbox"]');

checkBoxes.forEach((checkbox) =>
  checkbox.addEventListener("change", function (e) {
    checarTrues();
    contadorCheck = truesAhora;
    truesAhora = 0;
    // console.log(contadorCheck);
    if (contadorCheck == 3) {
      let copiaBoxes = Array.from(checkBoxes);
      let index = copiaBoxes.indexOf(e.target);
      copiaBoxes.splice(index, 1);

      let random = Math.trunc(Math.random() * 2);
      let desactivar = copiaBoxes[random];

      document.getElementById(desactivar.id).checked = false;
    }
  })
);

function checarTrues() {
  checkBoxes.forEach((checkbox) => checkbox.checked && truesAhora++);
}
