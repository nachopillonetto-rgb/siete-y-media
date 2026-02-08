// src/motor.ts
import type { Carta } from "./model";
import { cartas } from "./model";


// Devuelve una carta aleatoria
export const dameCarta = (): Carta => {
  const indice = Math.floor(Math.random() * cartas.length);
  return cartas[indice];
};

// Devuelve el valor de la carta
export const valorCarta = (carta: Carta): number => {
  if (carta >= 10) return 0.5;
  return carta;
};

// Devuelve la URL de la imagen de la carta
export const urlCarta = (carta: Carta): string => {
  return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/${carta}.jpg`;
};

