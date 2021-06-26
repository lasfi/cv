"use strict";

let btnIdioma = document.getElementById("btn-idioma");
let btnTema = document.getElementById("btn-tema");
// let idiomaActual = "español";
let idioma = 0; // 0 para espanol y 1 para ingles;
let temaActual = 0; //0 para claro y 1 para oscuro;
let texto = {
  js01: ["Contacto", " Contact "],
  js02: ["¡Hola, me dicen lasfito!", "Hi, people call me lasfito!"],
  js03: [
    "Soy desarrollador web front-end",
    "I am a front-end web developer",
  ],
  js04: ["Acerca de mí", "About me"],
  js05: [
    "Desarrollador web con experiencia de 1 año en front-end y UI",
    "Web developer with 1 year experience in front-end and UI",
  ],
  js06: ["-Fuente: creánme", "-Source: trust me"],
  js07: ["Proyectos", "Proyects"],
  js08: ["Ver CV", "Download CV"],
  proyectos: ["Proyectos", "Proyects"],
  js09: ["Proyecto 1", "Proyect 1"],
  js10: [
    "Sitio web para agencia digital con blog, optimización SEO y PWA.",
    "Digital angency's website with blog, SEO and PWA optimization.",
  ],
  js11: ["Construido con Gatsby.js", "Built with Gatsby.js"],
  js12: ["Estilos con SASS", "Styling by SASS"],
  js13: ["Distribuido por Netlify", "Deployed on Netlify"],
  js14: ["Ver en vivo", "See live"],
  js15: ["Ver código", "Code repo"],
  js166: ["Proyecto 3", "Proyect 3"],
  js17: [
    "Simulador de aplicación bancaria con autenticación, divisas, depósitos y transferencias.",
    "Banking application simulator with authentication, currencies, deposits and transfers.",
  ],
  js18: ["Construido con <strong>JavaScript</strong>", "Built with JavaScript"],
  js19: ["Autenticación por <strong>Firebase", "Firebase authentication"],
  js20: ["Distribuido por <strong>Firebase</strong>"],
  js21: ["Ver en vivo", "See live"],
  js22: ["Ver código", "Code repo"],
  js23: ["¿Quieres trabajar conmigo?", "Do you want to work with me?"],
  js24: ["Elije modalidad", "Choose options"],
  js25: ["Mensaje", "Message"],
  js26: ["Enviar", "Send"],
  js27: ["Barato", "Cheap"],
  js28: ["Rápido", "Fast"],
  js29: ["Bueno", "Good"],
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
    document.getElementById(codigo).innerText = texto[codigo][0];
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
