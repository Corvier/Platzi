const express = require('express');
const router = express.Router();

router.get('/:categoryId/productos/:productId', (req, res) => {
    const { productId, categoryId } = req.params;
    res.json({
        categoryId: categoryId,
        productId: productId,
        name: 'Producto ' + productId,
        price: 2000
    })
});

module.exports = router;