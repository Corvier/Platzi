const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
});

app.get('/productos', (req, res) => {
    res.json({
        name: 'Producto 1',
        price: 1000,
    });
});

// Starting the server
app.listen(app.get("port"), () => { console.clear(); console.log(`Server is Running on port http://localhost:${app.get("port")}`); });