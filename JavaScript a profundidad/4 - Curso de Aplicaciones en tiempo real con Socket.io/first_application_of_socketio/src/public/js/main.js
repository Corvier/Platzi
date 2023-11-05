const socket = io();

// const checkSocketStatus = () => console.log('Estado del socket: ', socket.connected);
// socket.on('connect', () => checkSocketStatus());
// socket.on('disconnect', () => checkSocketStatus());
// socket.on('connect_error', () => console.log("No pude conectarme 😣"));

// socket.io.on('reconnect_attempt', () => console.log('Estoy intentando reconectarme 🤪'));
// socket.io.on('reconnect', () => console.log('Me he vuelto a conectar! 😎'));




// **************************************** EMISIÓN DE EVENTOS ******************************************** //
// Evento para escuchar o recibir datos emitidos por el servidor.
socket.on('server:welcome', (data) => {
    console.log(data);
    greeting.textContent = data;
});

// Evento para emitir o enviar datos al servidor.
emit__server.addEventListener('click', () => {
    socket.emit('client:emit', 'Hola servidor, soy Victor Ruiz. 😋');
});


socket.on('server:everyone', data => console.log(data));