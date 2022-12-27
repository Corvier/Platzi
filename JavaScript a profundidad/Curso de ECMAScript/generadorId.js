/* 
En la guardería de Michis "Michilango", están registrando nuevos michis, pero necesitan una forma de identificarlos.

Tu tarea será proveer de una función getId() que se encargue de generar dichos identificadores y, a través de un método .next() se pueda pasar al siguiente identificador, y a través de la propiedad .value se pueda obtener el valor del nuevo identificador.

Cada vez que llame a la función de la siguiente forma debería retornarme un identificador nuevo y completamente diferente:

const id = getId();
id.next().value

El identificador puede ser de cualquier tipo (números o cadenas de texto), la única condición es que cada nuevo identificador que se retorne debe ser completamente diferente a los retornados anteriormente.

Debes usar generadores de JavaScript para resolver este ejercicio. La solución debería tener un input y output como los siguientes:

Ejemplo 1:

Input:

const id = getId()
id.next().value
id.next().value
id.next().value

Output:

1
2
3

Ejemplo 2:

Input:

const id = getId()
id.next().value
id.next().value
id.next().value

Output:

AX6SF5S
G7QNW01
KH3BR02
*/

function* getId(id = 0) {
	// Tu código aquí 👈
	for (; ;) { yield id++ }
}

function chartSet() {
	let i = 0, res = "";
	const chartset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY0123456789";
	while (i < 6) {
		res += `${chartset[Math.ceil(Math.random() * chartset.length)]}`;
		i++;
	}

	return res;
}

const id = getId();
console.log(`${chartSet()}${id.next().value}`);

/* **************************************************** */

function* getId2() {
    while (true) {
      yield Math.random().toString(36).substring(5).toUpperCase();
    }
}

const id2 = getId2();
console.log(id2.next().value);