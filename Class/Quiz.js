// @ts-check
import { Pregunta } from "../Class/Pregunta.js";

export class Quiz {
  //preguntaIndex = 0;
  azar = 0;
  base = 1;
  carrera = 0;
  strike = 0;
  out = false;
  /**
   *
   * @param {Pregunta[]} pregunta recibe un arreglo para identificar la posicion
   */
  constructor(pregunta) {
    this.pregunta = pregunta;
  }
  /**
   *
   * @returns {Pregunta} pregunta encontrada
   */
  posicionPregunta() {
    return this.pregunta[this.azar];
  }

  // haTerminado() {
  //   return this.pregunta.length === this.posicionPregunta
  // }

  /**
   *
   * @param {String} respuesta
   */
  intento(respuesta) {
    if (this.posicionPregunta().respuestaCorrecta(respuesta)) {
      this.base++;
      this.comprobarCarrera();
      this.comprobarStrike();
    } else {
      this.strike++;
      this.comprobarStrike();
    }
    const generator = this.uniqueRandomNumbersInRange((this.base - 1) * 10, this.base * 10);
    this.azar = generator.next().value
    
    //this.preguntaIndex++;
  }

  comprobarCarrera() {
    if (this.base === 4) {
      this.carrera++;
      this.base = 3;
    }
  }

  comprobarStrike() {
    if (this.strike === 3) {
      this.out = true;
      this.strike = 0;
    } else {
      this.out = false;
    }
  }

  *uniqueRandomNumbersInRange(start, end) {
  const numbers = new Set();
  while (numbers.size < end - start) {
    const newNumber = Math.floor(Math.random() * (end - start)) + start;
    if (!numbers.has(newNumber)) {
      numbers.add(newNumber);
      yield newNumber;
    }
  }
}
}
