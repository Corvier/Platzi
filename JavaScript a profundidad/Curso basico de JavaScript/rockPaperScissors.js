let option = "";
const options = ["piedra", "papel", "tijera"];
const machine = options[Math.floor(Math.random() * 3)];

function userOption() {
    option = prompt("Ingresa su opción: piedra, papel o tijera ");
    return (!options.includes(option.toLowerCase())) ? userOption() : rockPaperScissors(option, machine);
}

function rockPaperScissors(user, machine) {
    switch (true) {
        case (user === machine):
            console.log('¡Empate!');
            break;
        case (machine === 'piedra' && user === 'papel'):
            console.log('¡Ganaste!')
            break;
        case (machine === 'papel'  && user === 'tijera'):
            console.log('¡Ganaste!')
            break;
        case (machine === 'tijera' && user === 'piedra'):
            console.log('¡Ganaste!')
            break;
        default:
            console.log('¡Perdiste!');       
    }
}