const express = require('express');
const { routerApp } = require('./routes/routes.main.js');
const os = require('os');

const app = express();
const ip = os.networkInterfaces().Ethernet[1].address;

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
});

routerApp(app);

// Starting the server
app.listen(app.get("port"), () => { console.clear(); console.log(ip); console.log(`Server is Running on port http://localhost:${app.get("port")}`); });