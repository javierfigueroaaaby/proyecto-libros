document.addEventListener("DOMContentLoaded", () => {
  const inputBuscar = document.querySelector("input[type='text'], .form-control");
  
  if (inputBuscar) {
    inputBuscar.addEventListener("input", (e) => {
      const texto = e.target.value.toLowerCase();
      const tarjetas = document.querySelectorAll(".card, .book-card");

      tarjetas.forEach(tarjeta => {
        const contenido = tarjeta.textContent.toLowerCase();
        const contenedorPadre = tarjeta.closest(".col-md-6, .col-lg-4, div");
        
        if (contenedorPadre) {
          if (contenido.includes(texto)) {
            contenedorPadre.style.display = "";
          } else {
            contenedorPadre.style.display = "none";
          }
        }
      });
    });
  }
});