// ===============================
// Estado del juego
// ===============================
let puntuacion: number = 0;

// ===============================
// Referencias al DOM
// ===============================
const puntuacionElemento = document.getElementById("puntuacion");
const cartaImg = document.getElementById("carta") as HTMLImageElement | null;
const btnCarta = document.getElementById("btnCarta");
const btnPlanto = document.getElementById("btnPlanto");
const btnNueva = document.getElementById("btnNueva");

// ===============================
// Mostrar puntuación
// ===============================
const mostrarPuntuacion = (): void => {
  if (puntuacionElemento) {
    puntuacionElemento.textContent = puntuacion.toString();
  }
};

// ===============================
// Obtener carta aleatoria
// ===============================
const dameCarta = (): number => {
  const numero = Math.floor(Math.random() * 10) + 1; // 1..10
  return numero > 7 ? numero + 2 : numero; // 8,9 -> 10,11,12
};

// ===============================
// Mostrar carta en la imagen
// ===============================
const mostrarCarta = (carta: number): void => {
  if (!cartaImg) return;

  let url = "";

  switch (carta) {
    case 1:
      url =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      url =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      url =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      url =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      url =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      url =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      url =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      url =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      url =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      url =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
  }

  cartaImg.src = url;
};

// ===============================
// Pedir carta
// ===============================
const pedirCarta = (): void => {
  const carta = dameCarta();
  console.log("Carta:", carta);
  mostrarCarta(carta);
};

// ===============================
// Eventos
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  mostrarPuntuacion();
});

btnCarta?.addEventListener("click", pedirCarta);
