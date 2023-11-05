const socket = io();

const checkSocketStatus = () => console.log('Estado del socket: ', socket.connected);
socket.on('connect', () => checkSocketStatus());
socket.on('disconnect', () => checkSocketStatus());
socket.on('connect_error', () => console.log("No pude conectarme 😣"));

socket.io.on('reconnect_attempt', () => console.log('Estoy intentando reconectarme 🤪'));
socket.io.on('reconnect', () => console.log('Me he vuelto a conectar! 😎'));