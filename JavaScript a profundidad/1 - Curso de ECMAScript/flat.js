const array = [1, 1, 2, 3, 4, [2, 1, 3, 5 ,6, [1, 2, 4]]];
console.log(array.flat(3));

/**
La siguiente versión de ECMAScript fue publicada en 2019. A continuación aprenderás sobre aplanamiento de arrays y eliminar espacios en blanco de un string.

Qué es el aplanamiento de arrays
El aplanamiento consiste en transformar un array de arrays a una sola dimensión. Los métodos flat y flatMap permitirán realizar el aplanamiento.

Método flat
El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.

Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

Este método recibe un argumento:

La profundidad del aplanamiento, por defecto, tiene un valor de 1.
Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.

const array = [1,2,[3,4],5,6]
const result = array.flat() 
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */