const hello = '               hello world              ';
console.log(hello.trimEnd());
console.log(hello.trim()); // Elimina tanto al inicio como al final de la cadena.
/*
Eliminar espacios en blanco de un string
Existen tres métodos para eliminar espacios en blanco de un string:

El método trim elimina los espacios en blanco al inicio y al final.
El método trimStart o trimLeft elimina los espacios al inicio.
El método trimEnd o trimRight elimina los espacios al final.
const saludo = "      hola      "
const result1 = saludo.trim()
const result2 = saludo.trimStart()
const result3 = saludo.trimEnd()

result1 // 'hola'
result2 // 'hola      '
result3 // '      hola'
*/