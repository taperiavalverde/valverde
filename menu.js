document.addEventListener("DOMContentLoaded", () => {
  const platos = document.querySelectorAll(".plato");

  const actualizarVisibilidad = () => {
    const centroViewport = window.innerHeight / 2;
    const distancias = [];

    // 1. Calcular la distancia de cada imagen al centro de la pantalla
    platos.forEach((plato, index) => {
      const img = plato.querySelector(".plato-img");
      if (!img) return; // Si un plato no tiene imagen, lo saltamos

      const rect = img.getBoundingClientRect();
      const centroImg = rect.top + rect.height / 2;
      // Usamos Math.abs para obtener la distancia absoluta (sin signo)
      const distancia = Math.abs(centroViewport - centroImg);
      distancias.push({ index, distancia, plato });
    });

    // 2. Ordenar los platos por distancia (los más cercanos primero)
    distancias.sort((a, b) => a.distancia - b.distancia);

    // 3. Seleccionar los 3 platos más cercanos
    const platosVisibles = distancias.slice(0, 3).map((d) => d.plato);

    // 4. Aplicar o quitar la clase .visible a la imagen
    platos.forEach((plato) => {
      const img = plato.querySelector(".plato-img");

      if (platosVisibles.includes(plato)) {
        img?.classList.add("visible");
      } else {
        img?.classList.remove("visible");
      }
    });
  };

  // Escuchar el evento scroll y ejecutar al inicio
  window.addEventListener("scroll", () => requestAnimationFrame(actualizarVisibilidad));
  actualizarVisibilidad();

  // Lógica para el botón "Volver Arriba"
  const btnArriba = document.querySelector(".btn-arriba");
  if (btnArriba) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btnArriba.classList.add("visible");
      } else {
        btnArriba.classList.remove("visible");
      }
    });

    btnArriba.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Lógica para resaltar la sección activa en el menú (Scroll Spy)
  const secciones = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".barraNav a");

  const observerSecciones = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remover clase activa de todos
          navLinks.forEach((link) => link.classList.remove("activo"));
          // Buscar el link correspondiente y activarlo
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`.barraNav a[href="#${id}"]`);
          if (activeLink) activeLink.classList.add("activo");
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }, // Se activa cuando la sección cruza el centro de la pantalla
  );

  secciones.forEach((seccion) => observerSecciones.observe(seccion));
});
