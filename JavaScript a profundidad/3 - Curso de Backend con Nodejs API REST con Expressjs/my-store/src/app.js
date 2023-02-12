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
    res.json([
        {
            id: 1,
            name: 'Producto 1',
            price: 1000,
        },
        {
            id: 2,
            name: 'Producto 2',
            price: 2000,
        }
    ]);
});

app.get('/productos/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        id: id,
        name: 'Producto ' + id,
        price: 2000
    })
});

app.get('/categorias/:categoryId/productos/:productId', (req, res) => {
    const { productId, categoryId } = req.params;
    res.json({
        categoryId: categoryId,
        productId: productId,
        name: 'Producto ' + productId,
        price: 2000
    })
});

// Starting the server
app.listen(app.get("port"), () => { console.clear(); console.log(`Server is Running on port http://localhost:${app.get("port")}`); });