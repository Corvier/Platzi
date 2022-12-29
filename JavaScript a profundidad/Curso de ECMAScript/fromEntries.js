const entries = new Map([['username', 'Corvier'],['name', 'Victor'], ['age', 25]]);
console.log("🚀 ~ file: fromEntries.js:2 ~ entries", entries)
console.log("🚀 ~ file: fromEntries.js:3 ~ Object entries", Object.fromEntries(entries));


/*
Cómo transformar un array de arrays en un objeto
El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].

Se considera la operación inversa de Object.entries().

const arrayEntries = [
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
] 

const usuario = Object.fromEntries(arrayEntries) 

console.log(usuario)
/* {
  name: 'Andres',
  email: 'andres@correo.com',
  age: 23
}
*/