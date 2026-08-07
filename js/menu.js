document.addEventListener("DOMContentLoaded", () => {
    // Lógica para el botón "Volver Arriba"
    const botonArriba = document.querySelector(".boton-arriba");
    if (botonArriba) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > window.innerHeight * 0.5) {
                botonArriba.classList.add("visible");
            } else {
                botonArriba.classList.remove("visible");
            }
        });

        botonArriba.addEventListener("click", () => {
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
