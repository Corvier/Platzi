const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Async!!'), 4000) : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log("🚀 ~ file: asyncFunction.js:9 ~ anotherFn ~ something", something);
    console.log("Hello World");
}

console.log('Before');
anotherFn();
console.log('After');

/*
En ECMAScript 2017 o ES8 fue añadida una nueva forma de manejar el asincronismo en JavaScript mediante funciones asíncronas.

Cómo utilizar funciones asíncronas
La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.

async function asyncFunction () {...}

const asyncFunction = async () => { ... } 
La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.

async function asyncFunction () {
  try {
    const response = await promesa()
    return response
  } catch (error) {
    return error
  }
}
¿Cuál es la mejor forma de manejar promesas, then o async / await? Ambas son muy útiles, manejar ambas te hará un mejor desarrollador.

Curso de Asincronismo con JavaScript
Contribución creada por Andrés Guano (Platzi Contributor).

Lecturas recomendadas

Curso de Asincronismo con JavaScript - Platzi

https://platzi.com/cursos/asincronismo-js/
*/