document.addEventListener("DOMContentLoaded", function () {
  // Crear un enlace al archivo CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.type = 'text/css';
  cssLink.href = 'Styles/header-footer.css';

  // Agregar el enlace CSS al head del documento
  document.head.appendChild(cssLink);
  
  // Genera el header
  function generateHeader() {
    const header = document.createElement('header');
    header.innerHTML = `    
      <a id="logo" href="index.html">LOGOTIPO</a>
      <nav>
        <a href="about me.html">About me</a>
        <a href="galería.html">My little cat (responsive photo gallery)</a>
        <a href="Bulma.html">BULMA</a>        
        <div id="switch">
        DARK MODE
        </div>
      </nav>
    `;
    document.body.prepend(header);

    // Agregar evento de clic al botón para cambiar entre las imágenes y el color de fondo
    const switchButton = document.getElementById("switch");
    let isLightMode = true; // Por defecto, el modo es claro
  
    switchButton.addEventListener("click", function () {
      // Alternar el modo
      isLightMode = !isLightMode;  
      // Obtener el elemento body
      const body = document.body;  
      // Cambiar las clases según el modo actual
      if (isLightMode) {
        // Modo claro
        switchButton.innerHTML = "DARK MODE";
        body.classList.remove("dark");
        body.classList.add("light");
      } else {
        // Modo oscuro
        switchButton.innerHTML = "LIGHT MODE";
        body.classList.remove("light");
        body.classList.add("dark");
      }
    });
  }
  // Genera una flechita para subir al inicio de la página
  function generateUpArrow() {
    const upArrow = document.createElement('div');
    upArrow.id = 'upButton'; // Asigna el id
    upArrow.innerHTML = `
      <a href="#" title="volver arriba">
        <img src="https://www.euroresidentes.com/tecnologia/trucos-diseno-web/wp-content/uploads/sites/7/2014/08/up1_azul1.png" alt="Volver arriba" />
      </a>
    `;
    document.body.appendChild(upArrow); // Cambia 'prepend' a 'appendChild' para ubicarlo al final del body
  }

  // Genera el footer
  function generateFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <p>© All rights reserved <span id="yearPlaceholder"></span></p>
      <section id="redesSociales">¡Seguime en mis redes sociales!<br>
        <a href="https://www.facebook.com/daniel.cabj88" class="fa fa-facebook" title="Facebook"></a>
        <a href="https://www.instagram.com/daniel_cabj88/" class="fa fa-instagram" title="Instagram"></a>
        <a href="https://www.linkedin.com/in/danielalejandrosalas/" class="fa fa-linkedin" title="LinkedIn"></a>
        <a href="https://www.youtube.com/@daniel_cabj88" class="fa fa-youtube" title="YouTube"></a>
        <a href="mailto:daniel.salas@bue.edu.ar" class="fa fa-envelope" title="Email"></a>
      </section>
    `;
    document.body.appendChild(footer);
    // Obtén el elemento del marcador de posición del año y el año actual
    var yearPlaceholder = document.getElementById("yearPlaceholder");
    var currentYear = new Date().getFullYear();

    // Coloca el año actual en el marcador de posición
    yearPlaceholder.textContent = currentYear; // Cambia 'prepend' a 'appendChild' para ubicarlo al final del body
  }
  
  // Agrega la clase "active" al enlace del menú correspondiente según la ubicación actual
  function setActiveMenuLink() {
    // Obtén la ubicación actual de la página
    var currentLocation = window.location.href;

    // Obtén todos los enlaces del menú
    var menuLinks = document.querySelectorAll("header nav a");

    // Itera a través de los enlaces del menú
    for (var i = 0; i < menuLinks.length; i++) {
      var menuLink = menuLinks[i];

      // Compara la ubicación actual con la URL del enlace
      if (currentLocation === menuLink.href) {
        // Agrega la clase "active" al enlace actual
        menuLink.classList.add("active");
      }
    }

    // Verifica si la ubicación actual es la página de inicio
    if (currentLocation.endsWith("index.html") || currentLocation === "https://danielcabj88.github.io/daniel-repository/") {
      var logoLink = document.getElementById("logo");
      if (logoLink) {
        // Agrega la clase "active" al enlace del logo en la página de inicio
        logoLink.classList.add("active");
      }
    }
  }
  generateHeader();
  generateUpArrow();
  generateFooter();
  setActiveMenuLink();
});