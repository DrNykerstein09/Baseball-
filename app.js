//@ts-check
import inquirer from "inquirer";
import { nuevaPregunta } from "./data/preguntas.js";
import { Quiz } from "./Class/Quiz.js";
import figlet from "figlet";

function main() {
  const quiz = new Quiz(nuevaPregunta);
  const quiz2 = new Quiz(nuevaPregunta);
  let entrada = 0;
  let user1;
  let user2;

  function mensajeSalida() {
    figlet("El partido ha culminado", (err, result) => {
      console.log(result);
    });
  }

  inquirer
    .prompt({
      name: "jugador1",
      type: "input",
      message: "entra tu user",
    })
    .then((user) => {
      user1 = user.jugador1;
      inquirer
        .prompt({
          name: "jugador2",
          type: "input",
          message: "Entra tu user",
        })
        .then((user) => {
          user2 = user.jugador2;
        })
        .then(() => {
          console.log(user1, user2);
          guest1(user1); // ejecucion de manera inicial

          function guest2(jugador) {
            const opciones = quiz2.posicionPregunta().opcion;
            inquirer
              .prompt([
                {
                  name: "respuesta",
                  type: "list",
                  message: `Turno de ${jugador}. ${
                    quiz2.posicionPregunta().pregunta
                  }`,
                  choices: opciones,
                },
              ])
              .then((answer) => {
                quiz2.intento(answer.respuesta);
                console.log("puntos", quiz2.base);
                console.log("strike", quiz2.strike);
                console.log("base", quiz2.base);
                console.log("entrada", entrada);
                if (!quiz2.out) {
                  console.log(quiz2.out);
                  guest2(user2);
                } else {
                  console.log(quiz2.out);
                  console.log("fuera");
                  entrada++;
                  if (entrada === 9) {
                    return mensajeSalida();
                  }
                  guest1(user1);
                }
              });
          }

          function guest1(jugador) {
            const opciones = quiz.posicionPregunta().opcion;
            inquirer
              .prompt([
                {
                  name: "respuesta",
                  type: "list",
                  message: `Turno de ${jugador}. ${
                    quiz.posicionPregunta().pregunta
                  }, dificultad: ${quiz.posicionPregunta().dificultad}, indice: ${quiz.posicionPregunta().index}`,
                  choices: opciones,
                },
              ])
              .then((answer) => {
                quiz.intento(answer.respuesta);
                console.log("strike", quiz.strike);
                console.log("base", quiz.base);
                console.log("entrada", entrada);
                console.log("index:", quiz.azar);
                if (!quiz.out) {
                  console.log(quiz.out);
                  guest1(user1);
                } else {
                  console.log(quiz.out);
                  console.log("fuera");
                  guest2(user2);
                }
              });
          }
        });
    });
}

main();
