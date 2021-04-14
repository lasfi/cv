"use strict";

let btnIdioma = document.getElementById("btn-idioma");
let btnTema = document.getElementById("btn-tema");
let idiomaActual = "español";
let temaActual = "claro";

//sticky header
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

//idioma
btnIdioma.addEventListener("click", () => {
  idiomaActual == "english" ? tradEsp() : tradEng();
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

let textoEsp = {
  contacto: "Contáctame",
  saludo: "Saludos",
};

let textoEng = {
  contacto: " Contact me ",
  saludo: "Greetings",
};

function tradEsp() {
  document.querySelector("#contacto").textContent = textoEsp.contacto;
  document.querySelector("#saludo").textContent = textoEsp.saludo;
  btnIdioma.textContent = "🌮";
  idiomaActual = "español";
}

function tradEng() {
  document.querySelector("#contacto").textContent = textoEng.contacto;
  document.querySelector("#saludo").textContent = textoEng.saludo;
  btnIdioma.textContent = "🍔";
  idiomaActual = "english";
}
