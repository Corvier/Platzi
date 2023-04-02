const express = require('express');
const productsRouter = require('./routes.productos');
const usersRouter = require('./routes.users');
const categoryRouter = require('./routes.category');

function routerApp(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/productos', productsRouter);
    router.use('/usuarios', usersRouter);
    router.use('/categorias', categoryRouter);
}

function routerApp2(app) {
    const router = express.Router();
    app.use('/api/v2', router);
    router.use('/productos', productsRouter);
    router.use('/usuarios', usersRouter);
    router.use('/categorias', categoryRouter);
}

module.exports = { routerApp, routerApp2 }; 