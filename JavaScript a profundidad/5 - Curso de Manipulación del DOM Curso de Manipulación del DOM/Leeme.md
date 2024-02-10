# 📙 DOM y Web API

## ¿Que es el DOM?

**DOM(Document Object Model):** no es mas que un árbol de nodos en el cual esta representado cada una de las etiquetas HTML que nosotros colocamos en nuestro proyecto.

**CSSOM(CSS Object Model):** es un conjunto de APIs que permite manipular CSS desde JavaScript. Así como el DOM (Document Object Model) es para HTML, el CSSOM (CSS Object Model) es para CSS. Permite leer y modificar el estilo de CSS de forma dinámica.
Para llegar al dom y cssom ocurre un proceso que se llama **El Camino Crítico de Renderización(Critical Rendering Path)** es la secuencia de pasos que el navegador realiza para convertir el HTML, CSS y JavaScript en píxeles en la pantall

#### Ideas/conceptos claves

**Critical Rendering Path** Es el proceso que se encarga de convertir en pixeles el HTML, CSS y JS

El **DOM** arbol para el HTML que contiene toda nuestra estructura HTML

El **CSSOM** es el arbol para el CSS

* Todos los navegadores los utilizan para trabajar en un sitio web
* Todo comienza con el proceso llamado " **Critical Rendering Path** "
  * Se puede dividir en 5 partes
  * A lo largo del proceso el navegador crea dos arboles
    * DOM
      * Es una representación del HTML
      * Estructura en forma de árbol de nodos
      * Es un modelo que puede ser modificado
    * CSSOM

**RESUMEN:** Para mostrar un sitio hay un proceso llamado Critical Render Path en él se crean dos árboles el DOM y el CSSOM. El Dom sera aquel que se encargará de tener todo nuestro contenido en una representación de arbol que contendrá nodos

## **¿Qué rayos son las API?**

Puede parecernos un concepto muy abstracto o confuso al principio, ya que como dice el profesor  *‘’lo utilizamos sin discreción para referirnos a todo’’* . Pero, en pocas palabras, una API es **todo** lo que sirva para comunicar fácilmente un pedazo de software con otro.

**APIs de terceros** Twitter, por ejemplo, nos proporciona una manera sencilla de mostrar tweets de algún usuario a través de su API. Tan solo tenemos que hacer una petición GET al siguiente Endpoint:

GET [https://api.twitter.com/2/users/:id/tweets](https://api.twitter.com/2/users/:id/tweets)

**APIs de servicios** Si quisieramos mostrar mapas de Google Maps, tambien podriamos hacerlo a través de su API.

Por ejemplo, para mostrar la ubicación de Sydney, New South Wales, Australia, lo haríamos de la siguiente manera:

```javascript
function initMap() {
	const map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -34.335, lng: 150.446 },
		zoom: 8
	});
}
```

**Conclusión** Si prestamos atención, nos damos cuenta de que son una manera sencilla de acceder a información o funcionalidades de otro pedazo de código. Es por eso que se les llama "intermediarios" o "puentes".

# 📙 Operaciones Basicas

## ¿Como leer nodos en el DOM?

Básicamente tenemos 4 formas de leer nodos con JS: . .

* **``parent.getElementById('id')``** => nos permite obtener un elemento a través de su id. .
* **``parent.getElementsByClassName('class')``** => obtiene un array con todos los elementos hijos que tengan esa clase, ojo "getElementByClassName" no existe, es decir no podremos obtener solo 1 elemento con esa clase. .
* **``parent.getElementsByTagName('div')``** => con este método obtenemos una lista o "array list" con todos los elementos que tengan esa etiqueta, ejemplo todos los divs. Al igual que con el método anterior no hay posibilidad de usarlo en singular, siempre tendremos que usar get**Elements** .
* **``parent.querySelector()``** => nos permite buscar de 3 formas, con id, clase o tagName. A diferencia de los 2 anteriores este nos devuelve 1 solo elemento, el primero que contenga el valor que se le paso. Id => ('#id'), class => ('.class'), tagName ('div') .
* **``parent.querySelectorAll()``** => este método retorna una array list con todos los elementos que tengan ese selector (id, class o tagName) . Casi siempre el elemento **"padre o parent"** es  **document** . ya que estamos haciendo referencia a todo el DOM, todo el documento y esto en ciertos casos nos permite evitar errores. ejemplo = ``const button = document.querySelector('#button')``

## NodeLists vs Array

La diferencia entre NodeList y Array, es que el NodeList carece de métodos que si están disponibles en los Arrays, pero podemos pasar esto fácilmente usando el operador de propagación.

```javascript
// De esta forma pasamos todos los elementos en el NodeList a un arreglo al cual si podremos usar los métodos filter, map, reduce entre otros. 
const nodeList = document.querySelectorAll("selector css");
const elementList = [...nodeList];
```

## Crear y agregar

Al decir "crear nodos" nos referimos a crear elementos dentro de nuestro DOM. Para ello podemos hacer uso de: .

* `createElement`: Para crear una etiqueta HTML:

```javascript
// Solo se ha creado, aún no se agrega al DOM
const etiquetaH1 = document.createElement("h1")
```

* `createTextNode`: Para crear un texto:

```javascript
// Solo se ha creado, aún no se agrega al DOM
const texto = document.createTextNode("¡Hola, Mundo!")
```

Como solo creamos, necesitamos formas de agregarlos al DOM, para ello, JavaScript nos provee de estas formas: .

* `parentElement.appendChild()`: Agrega un hijo **al final** algún elemento

```javascript
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Creo el nodo a insertar
const h3 = document.createElement("h3")
// Creo el texto del nodo
const texto = document.createTextNode("Hola!")
// Inserto el texto al nodo
h3.appendChild(h3)
// Inserto el nodo al padre
parentElement.appendChild(h3)
```

* `parentElement.append()`: Es la evolución de `appendChild`, podemos agregar más de un nodo, puedes agregar texto y... no es soportado por Internet Explorer ¬¬! . Un polyfill es una adaptación del código para dar soporte a navegadores que no lo soportan, aquí está el polyfill de append: [https://developer.mozilla.org/es/docs/Web/API/ParentNode/append#polyfill](https://developer.mozilla.org/es/docs/Web/API/ParentNode/append#polyfill)

```javascript
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Agrego al elemento padre
parentElement.append("agrego un texto", document.createElement("div"))
```

* `parentElement.insertBefore()`: Inserta nodos antes del elemento que le pasemos como referencia, este nodo de referencia **tiene que ser un hijo DIRECTO del padre**

```javascript
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Creo un elemento
const titulo = document.createElement("h1")
// Obtengo la referencia del elemento del que quiero insertar antes:
const referencia = document.querySelector("selector")
// ¡Lo insertamos!
parentElement.insertBefore(titulo, referencia)
```

* `parentElement.insertAdjacentElement()`: Inserta nodos según las opciones que le pasemos:
  1. **beforebegin:** Lo inserta antes del nodo
  2. **afterbegin:** Lo inserta despues del nodo
  3. **beforeend:** Lo inserta antes de donde finaliza el nodo
  4. **afterend:** Lo inserta después de donde finaliza el nodo

```javascript
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Creo un elemento
const nodo = document.createElement("span")
parentElement.insertAdjacentElement("beforebegin", nodo)
```

## Otras formas de agregar

Existen otras formas de agregar nodos: .

* `node.outerHTML`: Sirve para leer HTML para leer HTML
* `node.innerHTML:` Sirve para escribir HTML

PEEEEEEERO, tienen un problema de seguridad 👀☝️.

**hack:** Cuando en el inspector de elementos seleccionas un elemento y en la consola escribes `$0`, este te devolverá el elemento tal como si lo hubieses seleccionado con `document.querySelector()`.

Aquí les dejo el playground que usó el profesor para hacer las pruebas: [https://codepen.io/jonalvarezz/pen/OJXeNab?editors=0110](https://codepen.io/jonalvarezz/pen/OJXeNab?editors=0110) . El problema con estas formas de inserciones es que permiten la inserción XSS, es decir, código maligno, y cualquier usuario programador malicioso podría meter scripts molestos, imagina que cada que un usuario llegue a tu página le salga un alert... ¡Sería catastrófico! Siempre sanitiza (remover caracteres especiales) los inputs de tus usuarios

## ⚖️ Atributos y propiedades

Básicamente un **atributo** es el estado inicial en nuestro HTML, es HTML solo podemos escribir atributos porque es el estado inicial con el que se renderizan y una **propiedad** es la variable que podemos cambiar a lo largo de la ejecución del programa mediante JavaScript, es decir, podemos acceder a dichos atributos y cambiarlo, haciendo que sean propiedades, [aquí un poco más de información sobre ello](https://lenguajejs.com/webcomponents/lit-element/propiedades-y-atributos/#:~:text=Una%20propiedad%20es%20una%20variable,siempre%20contendr%C3%A1%20valores%20de%20tipo%20.&text=Sin%20embargo%2C%20dicho%20componente%20puede,se%20puede%20acceder%20mediante%20this.). . Lo genial de JavaScript es que podemos cambiarlas de forma dinámica. Recordemos que JavaScript son en su mayoría objetos, por lo que los nodos HTML dentro de JavaScript son representados como objetos. Teniendo eso en cuenta, podemos acceder a cualquier atributo de dichos nodos desde HTML y cambiar sis propiedades, por ejemplo:

```javascript
// Al seleccionar el nodo HTML, JavaScript lo convierte en un objeto!
const input = document.querySelector("input")

// Y of course, podemos modificarlo como cualquier otro objeto de JavaScript:
input.placeholder = "Escribe algo"
input.value = 2
input.type = "number
```

#### **Ideas/conceptos claves**

Los **atributos de HTML** son palabras especiales utilizadas dentro de la etiqueta de apertura, para controlar el comportamiento del elemento. Los atributos de HTML son un modificador de un tipo de elemento de HTML

**Propiedad del DOM** sera inicializada por los atributos del HTML para posteriormente modificarlas

#### **Recursos**

[What is the difference between properties and attributes in HTML? - GeeksforGeeks](https://www.geeksforgeeks.org/what-is-the-difference-between-properties-and-attributes-in-html/)

#### **Apuntes**

* El 80% del tiempo que estemos manipulando el DOM, lo que haremos sera cambiando dinámicamente con JS las propiedades de un elemento
* Podemos acceder y modificar las propiedades mediante las propiedades del elemento deseado

```javascript
// 👀 Lectura
console.log(inputName.value) // "Fer"
// 📝 Modificación
inputName.value = "Fernando"
```

#### **Atributo 🆚 Propiedad**

* **Atributo**
  * Definidas por el HTML
  * Constantes
  * Solo se usan para iniciar el HTML y las propiedades del DOM
* **Propiedad**
  * Son lo que irán cambiando en JS
  * Definidas por el DOM
  * Valor de una propiedad es variable

**RESUMEN:** Las propiedades de los elementos serán aquellas que mayormente se modificarán. La diferencia entre un atributo y una propiedad es que el atributo para iniciar el HTML y DOM, son constantes mientras que las propiedades vienen del DOM y se pueden ir cambiando


## ❌Eliminar nodos

#### Apuntes

* Existen 3 formas de eliminar nodos en el DOM

1. **Remove Child**

   * Podemos eliminar un nodo según a un método que proviene del padre y pasamos la referencia a eliminar

   ```javascript
   padre.removeChild(nodoAEliminar)
   ```
2. **Remove**

   * Es la evolución de remove child
   * No esta soportado en internet explorer

   ```javascript
   nodoAEliminar.remove()
   ```
3. **Replace Child**

   * Nos permite remplazar un nodo

   ```javascript
   padre.replaceChild(nuevoNodo, aRemplazar)
   ```


También debemos aprender a eliminar nodos dentro del HTML, si podemos agregarlos... ¿Por qué no podríamos eliminarlos? ¡Claro que se puede!, y para ello, JavaScript nos ofrece 3 formas: .

* `parentElement.removeChild()`: Elimina un elemento hijo a partir del elemento padre:

```javascript
// Nota: En la clase se hizo con $0, pero yo te lo dejo en cómo lo harías normalmente con JavaScript

// Selecciono el elemento que quiero eliminar
const nodoAEliminar = document.querySelector("selector")
// Selecciono a su padre directo
const parentElement = nodoAEliminar.parentElement
// Lo elimino
parentElement.removeChild(nodoAEliminar)
```

* `docuement.remove()`: Es la evolución de `removeChild` Y... tampoco es soportado por Internet Explorer ¬¬! . No importa, aquí está el polyfill:D [https://developer.mozilla.org/es/docs/Web/API/ChildNode/remove#polyfill](https://developer.mozilla.org/es/docs/Web/API/ChildNode/remove#polyfill)

```javascript
// Selecciono el elemento que quiero eliminar
const nodoAEliminar = document.querySelector("selector")

// Lo elimino uwu
nodoAEliminar.remove()
```

* `document.replaceChild()`: Reemplaza un nodo (en pocas palabras lo elimina y mete otro)

```javascript
// Selecciono un padre
const padre = document.querySelector("selector")

// Selecciono el elemento al que voy a reemplazar
const toReplace = document.querySelector("selector")

// Creo el nodo por el cual lo voy a reemplazar
const node = document.createElement("h1")
// Le pongo un texto
node.textContent = "Un texto cualquiera"

// Lo reemplazo >:D!!!
parent.replaceChild(node, toReplace)
```


**RESUMEN:** Podemos eliminar nodos con diferentes métodos que nos provee el DOM como ser  **removeChild** , el cual necesita la referencia del padre a eliminar y del nodo que se eliminara, **remove** el cual se encarga de eliminar el nodo solo con la referencia deseada a borrar y finalmente **replaceChild** que nos ayuda remplazar un elemento con las referencias del padre, el nuevo nodo y el elemento a remplazar


## ❓ ¿Qué es el Spread Operator?

Si te causa duda esto, no te preocupes, aquí te lo explico:

El spread operator trabaja con arreglos y objetos, cuando lo pasamos en la llamada a una función, lo que hará es deconstruir ese arreglo y lo pasará como parámetros individuales para la función... aquí un ejemplo para que me entiendas:

```javascript
function funcionQueRecibeTresParametros(param1, param2, param3) {
	// code...
}

// La forma normal de llamarla sería:
funcionQueRecibeTresParametros(1, 2, 3)

// Pero, ¿qué pasa si tengo un arreglo que contiene esos 3 parámetros?
const arregloDeParametros = [1, 2, 3]

// Bueno, pues el spread operator puede deconstruir ese arreglo y poner cada elemento en donde irían mis parámetros :D!
funcionQueRecibeTresParametros(...arregloDeParametros)

// Eso sería equivalente a esto:
funcionQueRecibeTresParametros(arregloDeParametros[0], arregloDeParametros[1], arregloDeParametros[2])
```

Esto es muy útil cuando tenemos demasiados valores, recuerda, mientras menos modifiques el DOM, más eficiente será tu programa, y recordemos que tenemos a `append()` que nos permite insertar múltiples elementos en el DOM en una sola llamada, ¡aprovechémoslo! **Dato curioso:** En algunos frameworks de JavaScript como Vue, existe una cosa llamada el  **Virtual DOM** , no es más que un objeto JavaScript que simula al DOM real, al menos en Vue, esto tiene un proxy que está observando por cambios en ese Virtual DOM para reaccionar y renderizar solo una pequeña parte en el DOM (en lugar de reescribirlo completamente)
