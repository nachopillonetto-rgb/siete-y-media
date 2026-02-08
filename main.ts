// src/main.ts

import { dameCarta, valorCarta, urlCarta } from "./src/motor";
import { puntuacion, setPuntuacion } from "./src/model";
import {
  mostrarCarta,
  mostrarPuntuacion,
  mostrarMensaje,
  onPedirCarta,
  onMePlanto,
  onNuevaPartida,
  setBotones,

} from "./src/ui";


// ---- Lógica ----

const pedirCarta = (): void => {
  const carta = dameCarta();
  const valor = valorCarta(carta);

  setPuntuacion(puntuacion + valor);
  mostrarCarta(urlCarta(carta));
  mostrarPuntuacion(puntuacion);

  if (puntuacion > 7.5) {
    mostrarMensaje("💥 Te has pasado");
    setBotones({ pedirCarta: false, mePlanto: false, nuevaPartida: true });
  }
};

const mePlanto = (): void => {
  mostrarMensaje(`Te plantas con ${puntuacion}`);
  setBotones({ pedirCarta: false, mePlanto: false, nuevaPartida: true });
};

const iniciarPartida = (): void => {
  setPuntuacion(0);
  mostrarPuntuacion(0);

  mostrarMensaje("Pide carta para empezar");
  setBotones({ pedirCarta: true, mePlanto: true, nuevaPartida: false });
};

// ---- Eventos ----

onPedirCarta(pedirCarta);
onMePlanto(mePlanto);
onNuevaPartida(iniciarPartida);

document.addEventListener("DOMContentLoaded", iniciarPartida);
