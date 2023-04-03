const express = require('express');
const { routerApp } = require('./routes/routes.main.js');
const { logErrors, errorHandler } = require('./middlewares/error.handler');
const os = require('os');

const app = express();
const ip = os.networkInterfaces().Ethernet[1].address;

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
});

routerApp(app);

// Middleware
app.use(express.json());
app.use(logErrors);
app.use(errorHandler);

// Starting the server
app.listen(app.get("port"), () => { console.clear(); console.log(ip); console.log(`Server is Running on port http://localhost:${app.get("port")}`); });