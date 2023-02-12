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


🎉¡Lo has logrado! 🙌

Completaste todas las clases del Curso de ECMAScript: Historia y Versiones de JavaScript.

🛠 Te dejo la especificación ECMA-262 para que puedas observar todas las funcionalidades que existen y existirán para el lenguaje.

✅  Si aún no queda claro algún tema, revisa las clases o deja tus dudas en la sección de preguntas.

🧾 Realiza la prueba del curso para recibir tu certificado y no olvides dejar tus 🌟 y tu comentario.

👨‍💻 Te presentamos JavaScript Hero, donde podrás practicar los conceptos de JavaScript en un desafío diario, en el que podrás demostrar tus conocimientos sobre lo aprendido durante el curso y mucho más.

Y, sobre todo, ¡nunca pares de aprender! 💚

Contribuciones del curso creadas por Andrés Guano (Platzi Contributor).

Lecturas recomendadas

ECMA-262 - Ecma International

https://www.ecma-international.org/publications-and-standards/standards/ecma-262/


GitHub - tc39/ecma262: Status, process, and documents for ECMA-262

https://github.com/tc39/ecma262#ecmascript


JavaScript | MDN

https://developer.mozilla.org/es/docs/Web/JavaScript
*/