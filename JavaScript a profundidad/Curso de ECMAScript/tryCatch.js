try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    anotherHello();
} catch {
    console.log('Esto es un error');
}

/*
Las siguientes características de ES10 o ES2019 que aprenderás son: parámetro opcional de catch y un método para tranformar arrays a objetos

Parámetro opcional de catch
El parámetro opcional de catch permite omitir el error si es necesario.

try {
  // Manejar el código
} catch (err) {
  // Se utiliza el parámetro `err`
}

try {
  // Manejar el código
} catch {
  // Manejar el error sin el parámetro.
}
*/