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
  const enlacesNav = document.querySelectorAll("nav a");
  let linkDark = null;
  
  enlacesNav.forEach(a => {
    if (a.textContent.toLowerCase().includes("modo oscuro")) {
      linkDark = a;
    }
  });

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    if (linkDark) linkDark.textContent = "Modo claro";
  }

  if (linkDark) {
    linkDark.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        linkDark.textContent = "Modo claro";
      } else {
        localStorage.setItem("darkMode", "disabled");
        linkDark.textContent = "Modo oscuro";
      }
    });
  }
});