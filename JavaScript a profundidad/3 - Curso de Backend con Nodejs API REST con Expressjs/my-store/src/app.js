const express = require('express');
const cors = require('cors');
const { routerApp } = require('./routes/routes.main.js');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const os = require('os');

const app = express();
const ip = os.networkInterfaces().Ethernet[1].address;
const whitelist = ['http://localhost/8080'];
const origins = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Access denied!'));
        }
    }
}
// Settings
app.set('port', process.env.PORT || 3000);
app.use(express.json()); // siempre declarado antes de las rutas.
app.use(cors(origins));

// Routes
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
});

routerApp(app);

// Middleware
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Starting the server
app.listen(app.get("port"), () => { console.clear(); console.log(ip); console.log(`Server is Running on port http://localhost:${app.get("port")}`); });