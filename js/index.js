document.addEventListener("DOMContentLoaded", () => {
    // Animación de aparición para el bloque de info
    const infoBloque = document.querySelector(".pantalla-abajo");
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                infoBloque.classList.add("visible");
                observer.unobserve(entry.target); // Deja de observar una vez es visible
            }
        },
        { threshold: 0.1 },
    );
    observer.observe(infoBloque);

    // Scroll suave al hacer clic en la flecha
    const flecha = document.querySelector(".boton-abajo");
    flecha.addEventListener("click", () => {
        infoBloque.scrollIntoView({ behavior: "smooth" });
    });
});
