/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function mostrarTextarea() {
  var imagen = document.getElementById("muneco");
  var texto = document.getElementById("texto");
  var textarea1 = document.getElementById("textarea1");
  var textarea2 = document.getElementById("textarea2");
  var textoAux = textarea1.value;
  imagen.classList.remove("mostrar");
  imagen.classList.add("oculto");
  texto.classList.remove("mostrar");
  texto.classList.add("oculto");
  textarea1.classList.remove("mostrar");
  textarea1.classList.add("oculto");
  textarea2.classList.remove("oculto");
  textarea2.classList.add("mostrar");
  var nuevoTexto = textoAux
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  textarea2.value = nuevoTexto;
}

var btnMostrar = document.getElementById("btn-encriptar");
btnMostrar.addEventListener("click", mostrarTextarea);

function desencriptarTextarea() {
  var imagen = document.getElementById("muneco");
  var texto = document.getElementById("texto");
  var textarea1 = document.getElementById("textarea1");
  var textarea2 = document.getElementById("textarea2");
  var textoAux = textarea2.value;
  imagen.classList.remove("oculto");
  imagen.classList.add("mostrar");
  texto.classList.remove("oculto");
  texto.classList.add("mostrar");
  textarea1.classList.remove("oculto");
  textarea1.classList.add("mostrar");
  textarea2.classList.remove("mostrar");
  textarea2.classList.add("oculto");
  var nuevoTexto = textoAux
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  textarea1.value = nuevoTexto;
}

var btnDesencriptar = document.getElementById("btn-desencriptar");
btnDesencriptar.addEventListener("click", desencriptarTextarea);
