// const faker = require('faker'); // Faker solo esta funcionando en la version "faker": "^5.5.3" npm i faker@5.5.3 -S
// const { faker } = require('@faker-js/faker'); / npm i @hapi/boom
const express = require('express');
const ProductosService = require('./../services/productos.services');
const router = express.Router();
const service = new ProductosService();

router.get('/', async (req, res) => {
    const productos = await service.find();
    res.status(200).json(productos);
});

// Notification: Para evitar que una ruta choque, se pone primero la ruta no dinámica.
router.get('/filtro', async (req, res) => {
    res.send('Yo soy un filter');
});

// Y luego las rutas dinámicas, asi sabe cual atender correctamente y evita choques.
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const producto = await service.findOne(id);
    
        res.status(200).json({ producto: producto })
        
    } catch (error) {
        next(error);
    }

    // if (id === '999') {
    //     res.status(404).json({
    //         message: "Not Found"
    //     });
    // } else {
    //     res.status(200).json({
    //         id: id,
    //         name: 'Producto ' + id,
    //         price: 2000
    //     });
    // }
});

// TODO: El método POST se usa para enviar información al servidor (por lo general de tipo JSON).
router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);

    res.status(200).json({newProduct});
});

/*
    TODO ---
    TODO title: PATCH
    TODO El **método HTTP PATCH** aplica modificaciones parciales a un recurso.
    TODO El método HTTP PUT únicamente permite reemplazar completamente un documento.
*/
router.patch('/update/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const product = await service.update(id, body);
    
        res.status(201).json({ product });
    } catch (error) {
        // res.status(404).json({ message: error.message });
        next(error);
    }
    // res.status(200).json({ product });
    // res.status(200).json({
    //     message: "Update",
    //     data: req.body,
    //     id: id
    // });
});

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const product = await service.deleted(id);

    res.status(200).json({ product });
});

module.exports = router;