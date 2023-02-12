/* En este desafío debes retornar un mensaje distinto dependiendo del artículo de tecnología que recibas:

Si recibes una "computadora", debes retornar el mensaje "Con mi computadora puedo programar usando JavaScript".
Si recibes un "celular", debes retornar el mensaje "En mi celular puedo aprender usando la app de Platzi".
Si recibes un "cable", debes retornar el mensaje "¡Hay un cable en mi bota!".
Y si no recibes ninguno de estos valores, debes retornar el mensaje "Artículo no encontrado".

Input

solution('computadora')
solution('celular')
solution('cable')
solution('ornitorrinco')

Output

Con mi computadora puedo programar usando JavaScript
En mi celular puedo aprender usando la app de Platzi
¡Hay un cable en mi bota!
Artículo no encontrado
*/

function solution(article) {
    switch (article.toLowerCase().trim()) {
        case "Computadora".toLowerCase().trim():
            return "Con mi computadora puedo programar usando JavaScript";
        case "Celular".toLowerCase().trim():
            return "En mi celular puedo aprender usando la app de Platzi";
        case "Cable".toLowerCase().trim():
            return "¡Hay un cable en mi bota!";
        default:
            return "Artículo no encontrado";
    }
}