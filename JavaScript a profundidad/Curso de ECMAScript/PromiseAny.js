const promise1 = new Promise((resolve, reject) => {reject("Reject!")});
const promise2 = new Promise((resolve, reject) => {resolve("Resolve!")});
const promise3 = new Promise((resolve, reject) => {resolve("Resolve 2!")});

Promise.any([promise1, promise2, promise3]).then(response => console.log(response));

/*
Promise.any
Promise.any() es otra forma de manejar varias promesas, que retornará la primera promesa que sea resuelta y rebotará si todas las promesas son rechazadas.

const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.reject("Ups promesa 2 falló")
const promesa3 = Promise.resolve("Promesa 3")


Promise.any([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta)) // Promise 3
    .catch(error => console.log(error))
*/