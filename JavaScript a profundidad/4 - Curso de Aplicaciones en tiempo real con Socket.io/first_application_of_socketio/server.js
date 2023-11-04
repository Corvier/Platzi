const express = require('express');
const { createServer } = require('node:http');
const path = require('node:path');
const { Server } = require('socket.io');

const PORT = 4000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/index.html');
});

io.on('connection', (socket) => {
    // console.log(socket);
    console.log("socket id:", socket.id);
});

httpServer.listen(PORT);