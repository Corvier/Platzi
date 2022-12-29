/*
La siguiente versión de ECMAScript fue publicada en 2018. Las características de ES9 o ES2018 que aprenderás son: expresiones regulares y propiedades de propagación.

Expresiones regulares
Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda y manipulación de cadenas de caracteres increíblemente potente y están presentes en todos los lenguajes de programación.

En JavaScript se crea este patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda.

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
*/

const customRegex = /(\d{2})-(\d{2})-(\d{4})/;
const matchers = customRegex.exec('12-28-2022');
console.table(matchers);
