document.addEventListener("scroll", () => {
  const eliicoptero = document.querySelector(".eliicoptero");
  if (!eliicoptero) return;

  const scrollActual = window.scrollY + window.innerHeight;
  const alturaTotal = document.documentElement.scrollHeight;

  if (scrollActual >= alturaTotal - 10) {
    eliicoptero.classList.add("visible");
  } else {
    eliicoptero.classList.remove("visible");
  }
});
