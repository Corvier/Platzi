const { faker } = require('@faker-js/faker');

class ProductosService {

    constructor() {
        this.productos = [];
        this.generate();
    }

    generate() {
        const limit = 10;

        for (let index = 0; index < limit; index++) {
            this.productos.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl()
            })
        }
    }

    create() {

    }

    find() {
        return this.productos;
    }

    findOne(id) {
        return this.productos.find(item => item.id === id);
    }

    update() {

    }

    deleted() {

    }
}

module.exports = ProductosService;