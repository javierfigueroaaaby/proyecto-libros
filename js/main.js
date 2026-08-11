document.addEventListener("DOMContentLoaded", () => {
  const inputBuscar = document.querySelector("#buscador, input[type='text'], .form-control");
  
  if (inputBuscar) {
    const botonBuscar = document.querySelector("#btn-buscar, button[type='submit']");
    if (botonBuscar && botonBuscar.textContent.includes("Buscar")) {
      botonBuscar.remove();
    }

    inputBuscar.addEventListener("input", (e) => {
      const texto = e.target.value.toLowerCase().trim();
      const tarjetas = document.querySelectorAll(".card, .book-card");
      let encontrados = 0;

      tarjetas.forEach(tarjeta => {
        const contenido = tarjeta.textContent.toLowerCase();
        const contenedorPadre = tarjeta.closest(".col-md-6, .col-lg-4, div");
        
        if (contenedorPadre) {
          if (contenido.includes(texto)) {
            contenedorPadre.style.display = "";
            encontrados++;
          } else {
            contenedorPadre.style.display = "none";
          }
        }
      });

      let mensajeError = document.querySelector("#no-resultados-msg");
      if (encontrados === 0) {
        if (!mensajeError) {
          mensajeError = document.createElement("div");
          mensajeError.id = "no-resultados-msg";
          mensajeError.className = "alert alert-warning text-center mt-4";
          mensajeError.innerHTML = "¡Ups! No encontramos ningún libro con ese nombre en nuestra biblioteca mágica. Intenta buscar otra palabra.";
          const contenedorCatalogo = document.querySelector("main .container") || document.body;
          contenedorCatalogo.appendChild(mensajeError);
        } else {
          mensajeError.style.display = "block";
        }
      } else {
        if (mensajeError) {
          mensajeError.style.display = "none";
        }
      }
    });
  }
/*bloque modo oscuro*/ 

  /*bloque modo oscuro*/
  const linkDark = document.querySelector("#btn-tema");

  if (localStorage.getItem("darkMode") === "enabled") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (linkDark) linkDark.textContent = "Modo claro";
  }

  if (linkDark) {
    linkDark.addEventListener("click", (e) => {
      e.preventDefault();

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("darkMode", "disabled");
        linkDark.textContent = "Modo oscuro";
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("darkMode", "enabled");
        linkDark.textContent = "Modo claro";
      }
    });
  }

  /* Mostrar / ocultar bloque de info extra en Home */
  function iniciarToggleExtra() {
    const boton = document.querySelector("#btn-extra-info");
    const panel = document.querySelector("#extra-info");
    if (!boton || !panel) return;

    boton.addEventListener("click", () => {
      const visible = panel.classList.toggle("is-visible");
      boton.textContent = visible ? "Ocultar tips de lectura" : "Ver tips de lectura";
      boton.setAttribute("aria-expanded", visible ? "true" : "false");
    });
  }
  iniciarToggleExtra();
});

