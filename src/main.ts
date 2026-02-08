// src/main.ts

import { puntuacion, setPuntuacion } from "./model";
import { dameCarta, valorCarta, urlCarta } from "./motor";
import {
  mostrarCarta,
  mostrarPuntuacion,
  mostrarMensaje,
  setBotones,
  onPedirCarta,
  onMePlanto,
  onNuevaPartida,
} from "./ui";

const pedirCarta = (): void => {
  const carta = dameCarta();
  const valor = valorCarta(carta);

  setPuntuacion(puntuacion + valor);

  mostrarCarta(urlCarta(carta));
  mostrarPuntuacion(puntuacion);

  if (puntuacion > 7.5) {
    mostrarMensaje("Te has pasado 😵");
    setBotones({
      pedirCarta: false,
      mePlanto: false,
      nuevaPartida: true,
    });
  }
};

const mePlanto = (): void => {
  mostrarMensaje(`Te plantas con ${puntuacion}`);
  setBotones({
    pedirCarta: false,
    mePlanto: false,
    nuevaPartida: true,
  });
};

const iniciarPartida = (): void => {
  setPuntuacion(0);
  mostrarPuntuacion(0);
  mostrarMensaje("Pide carta para empezar");
  mostrarCarta(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
  setBotones({
    pedirCarta: true,
    mePlanto: true,
    nuevaPartida: false,
  });
};

// Eventos
onPedirCarta(pedirCarta);
onMePlanto(mePlanto);
onNuevaPartida(iniciarPartida);

document.addEventListener("DOMContentLoaded", iniciarPartida);
