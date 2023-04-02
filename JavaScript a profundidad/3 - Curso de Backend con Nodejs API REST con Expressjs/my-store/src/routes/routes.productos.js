// const faker = require('faker'); // Faker solo esta funcionando en la version "faker": "^5.5.3" npm i faker@5.5.3 -S
const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
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
router.get('/filtro', (req, res) => {
    res.send('Yo soy un filter');
});

// Y luego las rutas dinámicas, asi sabe cual atender correctamente y evita choques.
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        id: id,
        name: 'Producto ' + id,
        price: 2000
    })
});

router.post('/', (req, res) => {
    res.json({data: req.body});
});

module.exports = router;