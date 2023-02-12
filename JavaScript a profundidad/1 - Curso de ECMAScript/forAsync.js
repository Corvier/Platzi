async function arrayOfName(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfName(["Victor", "Corvier", "Kartsua"]);
console.log("After");

/*
Cómo utilizar for await
De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con async.

El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre.

async function forAwait() {
  const nombres = ["Alexa", "Oscar", "David"]
  for await (let valor of nombres) {
    console.log(valor)
  }
}

forAwait()
Cursos para entender el asincronismo en JavaScript
Si aún no sabes en qué consiste el asincronismo, no te preocupes, existen cursos completos de este tema.

Curso de JavaScript Engine (V8) y el Navegador
Curso de Asincronismo con JavaScript
Contribución creada por Andrés Guano (Platzi Contributor).
*/