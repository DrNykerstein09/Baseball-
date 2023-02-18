export class Pregunta {
  /**
   *
   * @param {String} pregunta recibe el texto de la pregunta
   * @param {String} opcion recibe las tres opciones de la pregunta
   * @param {String} respuesta esta es la respuesta de la pregunta
   */

  constructor(pregunta, opcion, respuesta, dificultad, index) {
    this.pregunta = pregunta;
    this.opcion = opcion;
    this.respuesta = respuesta;
    this.dificultad = dificultad; 
    this.index = index;
  }
  
  /**
   * 
   * @param {String} opcion 
   * @returns {boolean} regresa true si la respuesta es correcta
   */
  respuestaCorrecta(opcion) {
    return opcion === this.respuesta;
  }
}