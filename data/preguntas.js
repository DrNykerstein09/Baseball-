import data from "./data.js";
import { Pregunta } from "../Class/Pregunta.js";

export const nuevaPregunta = data.map(
  (pregunta, index) =>
    new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta, pregunta.dificultad, index)
);

