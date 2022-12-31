import products from "./topLevelAwaitProducts";

console.log(products);
console.log('Hey!');

/*
Top level await permite utilizar la palabra reservada await, sin estar dentro de una función asíncrona con async. Sin embargo, únicamente se puede utilizar await en la parte superior del archivo de un módulo.

Cómo utilizar top level await
Anterior a ECMAScript 13, cuando se introdujo funciones asíncronas, si utilizabas await fuera de async, existirá un error de sintáxis.

// Error
await fetch(URL)
// SyntaxError: await is only valid in async function
Ahora, con top level await esto es posible, sin ningún error. Esto puede servir para importaciones de manera dinámica o iniciar la conexión de tus bases de datos. Siempre y cuando respetes que debe estar en la parte encima del archivo de tipo módulo.

Contribución creada por Andrés Guano (Platzi Contributor).

Lecturas recomendadas

Platzi Fake Store API

https://fakeapi.platzi.com/


Curso de Gestión de Dependencias y Paquetes con NPM - Platzi

https://platzi.com/cursos/npm/
*/