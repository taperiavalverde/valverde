document.addEventListener("DOMContentLoaded", () => {
  // Animación de aparición para el bloque de info
  const infoBloque = document.querySelector(".pantalla1abajo");
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
  const flecha = document.querySelector(".flecha-scroll");
  flecha.addEventListener("click", () => {
    infoBloque.scrollIntoView({ behavior: "smooth" });
  });

  // Lógica del Vídeo de Fondo
  const video = document.querySelector(".video-fondo");
  const slogan = document.querySelector(".slogan");

  // El vídeo se reproduce siempre. Al terminar:
  video.addEventListener("ended", () => {
    video.classList.add("oculto");
    slogan.classList.remove("video-activo"); // Aparece el eslogan
    setTimeout(() => video.remove(), 1000);
  });
});
