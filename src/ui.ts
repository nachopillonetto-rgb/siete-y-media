// src/ui.ts

const cartaImg = document.getElementById("carta") as HTMLImageElement;
const puntuacionSpan = document.getElementById("puntuacion") as HTMLSpanElement;
const mensajeP = document.getElementById("mensaje") as HTMLParagraphElement;

const btnCarta = document.getElementById("btnCarta") as HTMLButtonElement;
const btnPlanto = document.getElementById("btnPlanto") as HTMLButtonElement;
const btnNueva = document.getElementById("btnNueva") as HTMLButtonElement;

// ---- Pintar UI ----

export const mostrarCarta = (url: string): void => {
  cartaImg.src = url;
};

export const mostrarPuntuacion = (puntuacion: number): void => {
  puntuacionSpan.textContent = puntuacion.toString();
};

export const mostrarMensaje = (texto: string): void => {
  mensajeP.textContent = texto;
};

// ---- Botones ----

export const setBotones = (estado: {
  pedirCarta: boolean;
  mePlanto: boolean;
  nuevaPartida: boolean;
}): void => {
  btnCarta.disabled = !estado.pedirCarta;
  btnPlanto.disabled = !estado.mePlanto;
  btnNueva.disabled = !estado.nuevaPartida;
};

// ---- Eventos ----

export const onPedirCarta = (callback: () => void): void => {
  btnCarta.addEventListener("click", callback);
};

export const onMePlanto = (callback: () => void): void => {
  btnPlanto.addEventListener("click", callback);
};

export const onNuevaPartida = (callback: () => void): void => {
  btnNueva.addEventListener("click", callback);
};
