"use strict";

const mainText = document.getElementById('aboutMe__main');
const switchButton = document.createElement("button");
switchButton.id = "halloweenSwitch";
switchButton.innerHTML = 'HALLOWEEN MODE';
let isHalloweenMode = false;

switchButton.addEventListener("click", function () {
  // Alternar la clase 'halloween' para aplicar estilos
  switchButton.classList.toggle('halloween');
  // Alternar entre los modos Halloween y Normal
  isHalloweenMode = !isHalloweenMode;
  // Cambiar el contenido del botón
  if (isHalloweenMode) {
    switchButton.innerHTML = 'NORMAL MODE';
    mainText.style.fontFamily = 'Creepster';
    mainText.style.color = 'red'
  } else {
    switchButton.innerHTML = 'HALLOWEEN MODE';
    mainText.style.fontFamily = 'inherit'
    mainText.style.color = 'inherit'
  }
});


const main = document.querySelector("main");
main.appendChild(switchButton);
