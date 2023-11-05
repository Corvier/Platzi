const express = require('express');
const { createServer } = require('node:http');
const path = require('node:path');
const { Server } = require('socket.io');

const PORT = 4000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);


// Settings
app.set('port', PORT);


// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


// Puesta en marcha del servidor
httpServer.listen(app.get('port'), () => {
    console.clear();
    console.log(`Listening on port ${app.get('port')}`);
});


// Manejo de conexiones websocket
io.on('connection', (socket) => {
    // console.log(socket);
    console.log("ID del socket conectado:", socket.id);

    // Para saber cuantos clientes están conectados
    // console.log("Clientes conectados:", io.engine.clientsCount);

    // Para saber cuando un cliente se desconecta
    // socket.on('disconnect', () => {
    //     console.log(`Socket ${socket.id} disconnected`);
    // });

    // Para saber cuando cambia la conexión del socket
    // socket.conn.once('upgrade', () => { 
    //     console.log('Hemos pasado de HTTP Long-Polling a', socket.conn.transport.name);
    // });


    // **************************************** EMISIÓN DE EVENTOS ******************************************** //
    // Evento para enviar p emitir datos al cliente.
    socket.emit('server:welcome', 'Bienvenido, ahora estas conectado 😎');

    // Evento para recibir datos del cliente y mostrarlos por consola.
    socket.on('client:emit', (data) => console.log(data));

    io.emit('server:everyone', `${socket.id} se ha conectado`);
});