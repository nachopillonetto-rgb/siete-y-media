// =======================
// ESTADO
// =======================
let puntuacion: number = 0;

// =======================
// DOM
// =======================
const puntuacionElemento = document.getElementById("puntuacion");
const mensajeElemento = document.getElementById("mensaje");

const cartaImg = document.getElementById("carta") as HTMLImageElement | null;

const btnCarta = document.getElementById("btnCarta") as HTMLButtonElement | null;
const btnPlanto = document.getElementById("btnPlanto") as HTMLButtonElement | null;
const btnNueva = document.getElementById("btnNueva") as HTMLButtonElement | null;

// =======================
// FUNCIONES
// =======================
const mostrarPuntuacion = (): void => {
  if (puntuacionElemento) {
    puntuacionElemento.textContent = puntuacion.toString();
  }
};

const mostrarMensaje = (texto: string): void => {
  if (mensajeElemento) {
    mensajeElemento.textContent = texto;
  }
};

const mostrarCartaBocaAbajo = (): void => {
  if (cartaImg) {
    cartaImg.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

const dameCarta = (): number => {
  // 1..10 y si es 8,9,10 -> 10,11,12
  const n = Math.floor(Math.random() * 10) + 1;
  return n > 7 ? n + 2 : n;
};

const valorCarta = (carta: number): number => {
  // Figuras: 10,11,12 valen 0.5
  return carta >= 10 ? 0.5 : carta;
};

const mostrarCarta = (carta: number): void => {
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

  if (cartaImg) {
    cartaImg.src = url;
  }
};

const terminarPartida = (): void => {
  if (btnCarta) btnCarta.disabled = true;
  if (btnPlanto) btnPlanto.disabled = true;
  if (btnNueva) btnNueva.disabled = false;
};

// =======================
// ACCIONES
// =======================
const pedirCarta = (): void => {
  const carta = dameCarta();
  mostrarCarta(carta);

  puntuacion += valorCarta(carta);
  mostrarPuntuacion();

  if (puntuacion > 7.5) {
    mostrarMensaje("Game Over");
    terminarPartida();
  }
};

const mePlanto = (): void => {
  if (puntuacion < 4) {
    mostrarMensaje("Has sido muy conservador");
  } else if (puntuacion === 5) {
    mostrarMensaje("Te ha entrado el canguelo eh?");
  } else if (puntuacion === 6 || puntuacion === 7) {
    mostrarMensaje("Casi casi...");
  } else if (puntuacion === 7.5) {
    mostrarMensaje("¡ Lo has clavado! ¡Enhorabuena!");
  }

  terminarPartida();
};

const nuevaPartida = (): void => {
  puntuacion = 0;
  mostrarPuntuacion();
  mostrarCartaBocaAbajo();
  mostrarMensaje("Pide carta para empezar");

  if (btnCarta) btnCarta.disabled = false;
  if (btnPlanto) btnPlanto.disabled = false;
  if (btnNueva) btnNueva.disabled = true;
};

// =======================
// ARRANQUE
// =======================
document.addEventListener("DOMContentLoaded", () => {
  mostrarPuntuacion();
  mostrarCartaBocaAbajo();
  mostrarMensaje("Pide carta para empezar");

  if (btnNueva) btnNueva.disabled = true;
});

btnCarta?.addEventListener("click", pedirCarta);
btnPlanto?.addEventListener("click", mePlanto);
btnNueva?.addEventListener("click", nuevaPartida);
