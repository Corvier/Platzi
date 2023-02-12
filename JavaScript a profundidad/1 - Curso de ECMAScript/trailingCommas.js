/*
ES8
Trailing commas
Las trailing commas consisten en comas al final de objetos o arrays que faciliten añadir nuevos elementos y evitar errores de sintaxis.

const usuario = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23, //<-- Trailing comma
}

const nombres = [
    "Andres",
    "Valeria",
    "Jhesly", //<-- Trailing comma
]
*/

const ages = [24, 45, ,24, 28, 38, 12, 45, , , ];
console.log("🚀 ~ file: trailingCommas.js:2 ~ ages", ages);
console.log("🚀 ~ file: trailingCommas.js:20 ~ ages.length", ages.length)
