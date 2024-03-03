"use strict";

// Agregar evento de clic al botón para cambiar entre los modos Halloween y Normal
const switchButton = document.createElement("button");
switchButton.className = "light-mode-button";
switchButton.id = "switch";
switchButton.innerHTML = '<span class="icon moon" style="color:#FFF; font-family: Creepster; letter-spacing: 2px;">HALLOWEEN MODE</span>';

switchButton.addEventListener("click", function () {
  document.body.classList.toggle('light'); // Alternar la clase 'light' en el body

  // Cambiar el contenido del botón
  const modeText = switchButton.querySelector('.icon.moon'); // Cambiar a .icon.moon
  if (modeText.textContent === 'HALLOWEEN MODE') { // Cambiar a 'HALLOWEEN MODE'
    modeText.textContent = 'NORMAL MODE';
    modeText.style.fontFamily = "Arial, sans-serif";
    modeText.style.color = "black";
  } else {
    modeText.textContent = 'HALLOWEEN MODE';
    modeText.style.fontFamily = "Creepster, sans-serif";
    modeText.style.color = "white";
  }
});

const main = document.querySelector("main");
main.appendChild(switchButton);
