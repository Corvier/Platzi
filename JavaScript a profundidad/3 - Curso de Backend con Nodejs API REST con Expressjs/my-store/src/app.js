const express = require('express');
const faker = require('faker');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
});

app.get('/productos', (req, res) => {
    const productos = [];
    const { size } = req.query;
    const limit = size || 10;

    for (let index = 0; index < limit; index++) {
        productos.push({
            id: (index + Date.now()),
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        })
    }
    res.json(productos);
});

// Notification: Para evitar que una ruta choque, se pone primero la ruta no dinámica.
app.get('/productos/filtro', (req, res) => {
    res.send('Yo soy un filter');
});

// Y luego las rutas dinámicas, asi sabe cual atender correctamente y evita choques.
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

app.get('/usuarios', (req, res) => {
    const { limit, offset } = req.query;

    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    } else {
        res.json({
            error: "Debe definir un limit y offset"
        })
    }
});

// Starting the server
app.listen(app.get("port"), () => { console.clear(); console.log(`Server is Running on port http://localhost:${app.get("port")}`); });