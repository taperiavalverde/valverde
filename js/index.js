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

window.addEventListener("scroll", () => {
    const badge = document.getElementById("rg26-circle-r-ribbon");
    if (window.scrollY > 50) {
        badge.classList.add("mostrar");
    } else {
        badge.classList.remove("mostrar");
    }
});
