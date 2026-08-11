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
    document.documentElement.setAttribute("data-bs-theme", "dark");
    if (linkDark) linkDark.textContent = "Modo claro";
  }

  if (linkDark) {
    linkDark.addEventListener("click", (e) => {
      e.preventDefault();

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        document.documentElement.removeAttribute("data-bs-theme");
        localStorage.setItem("darkMode", "disabled");
        linkDark.textContent = "Modo oscuro";
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("darkMode", "enabled");
        linkDark.textContent = "Modo claro";
      }
    });
  }

  /* JS Mostrar / ocultar bloque de info extra en Home */
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


  //Lista de libros 
  const libros = [
    {
      id: "1",
      titulo: "Harry Potter y la piedra filosofal",
      autor: "J.K. Rowling",
      genero: "Magia",
      precio: "$12.990",
      imagen: "img/hp-la-piedra-filosofal.jpg",
      sinopsis: "Un niño descubre en su undécimo cumpleaños que es mago y viaja a Hogwarts para comenzar su formación."
    },
    {
      id: "2",
      titulo: "Harry Potter y la cámara secreta",
      autor: "J.K. Rowling",
      genero: "Misterio",
      precio: "$14.990",
      imagen: "img/hp-la-camara-secreta.jpg",
      sinopsis: "En su segundo año, el protagonista investiga una serie de ataques misteriosos dentro del colegio."
    },
    {
      id: "3",
      titulo: "Harry Potter y el prisionero de Azkaban",
      autor: "J.K. Rowling",
      genero: "Aventura",
      precio: "$10.990",
      imagen: "img/hp-el-prisionero-de-azkaban.jpg",
      sinopsis: "Un peligroso fugitivo anda suelto y el protagonista deberá enfrentar secretos de su propio pasado familiar."
    },
    {
      id: "4",
      titulo: "Harry Potter y el cáliz de fuego",
      autor: "J.K. Rowling",
      genero: "Fantasía",
      precio: "$13.990",
      imagen: "img/hp-el-caliz-de-fuego.jpg",
      sinopsis: "Un torneo mágico entre escuelas pone al protagonista frente a pruebas cada vez más peligrosas."
    },
    {
      id: "5",
      titulo: "Harry Potter y la Orden del Fénix",
      autor: "J.K. Rowling",
      genero: "Magia",
      precio: "$11.990",
      imagen: "img/hp-la-orden-del-fenix.jpg",
      sinopsis: "Ante la desconfianza del mundo mágico, el protagonista forma un grupo secreto de estudiantes."
    },
    {
      id: "6",
      titulo: "Harry Potter y el misterio del príncipe",
      autor: "J.K. Rowling",
      genero: "Misterio",
      precio: "$13.490",
      imagen: "img/hp-el-misterio-del-principe.jpg",
      sinopsis: "El protagonista recibe un libro de texto anotado que esconde secretos sobre el pasado de un enemigo temido."
    }
  ];

  // 2) Función: buscar un libro por su id
  function obtenerLibroPorId(idBuscado) {
    for (let i = 0; i < libros.length; i++) {
      if (libros[i].id === idBuscado) {
        return libros[i];
      }
    }
    return libros[0]; // si no encuentra, muestra el primero
  }

  // 3) Función: dibujar el detalle en la página
  function mostrarDetalleLibro() {
    const contenedor = document.querySelector("#detalle-libro");

    // Si no estamos en detalle.html, no hacemos nada
    if (!contenedor) {
      return;
    }

    // Leemos el id de la URL: detalle.html?id=3  -->  "3"
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "1";

    // Buscamos el libro que corresponde
    const libro = obtenerLibroPorId(id);

    // Cambiamos el título de la pestaña del navegador
    document.title = libro.titulo + " · Estantería Abierta";

    // Insertamos HTML con la imagen y los datos de ESE libro
    contenedor.innerHTML = `
      <div class="row g-4 align-items-center">
        <div class="col-md-5">
          <img
            src="${libro.imagen}"
            alt="Portada de ${libro.titulo}"
            class="img-fluid rounded border"
          >
        </div>
        <div class="col-md-7">
          <span class="badge bg-secondary mb-2">${libro.genero}</span>
          <h1 class="h2 fw-bold mb-2">${libro.titulo}</h1>
          <p class="text-muted mb-3">Autor: ${libro.autor}</p>
          <p class="fw-semibold mb-3">${libro.precio}</p>
          <p class="mb-4">${libro.sinopsis}</p>
          <div class="d-flex flex-wrap gap-2">
            <a href="contacto.html" class="btn btn-dark">Consultar disponibilidad</a>
            <a href="listado.html" class="btn btn-outline-dark">Volver al catálogo</a>
          </div>
        </div>
      </div>
    `;
  }

  // 4) Llamamos la función para que se ejecute
  mostrarDetalleLibro();
});
