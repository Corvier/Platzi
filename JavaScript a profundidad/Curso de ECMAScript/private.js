class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // métodos
    #speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n;
    }
}

const bebeloper = new user('Corvier', 25);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 26);

/*
Las siguientes características de ES12 o ES2021 que aprenderás son: métodos privados en clases y Promise.any.

Métodos privados de clases
Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.

class Clase {
  #private(valor){
    console.log(valor)
  }
  
  public(valor){
    console.log(valor)
  }
}

const clase = new Clase()
clase.public("Hola")  // 'Hola'
clase.private("Hola") // TypeError: clase.private is not a function
*/