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

    create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }

        this.productos.push(newProduct);
        return newProduct;
    }

    find() {
        return this.productos;
    }

    findOne(id) {
        return this.productos.find(item => item.id === id);
    }

    update(id, changes) {
        const index = this.productos.findIndex(item => item.id === id);

        if (index === -1) {
            throw new Error('product not found');
        }

        const producto = this.productos[index];
        this.productos[index] = {
            ...producto,
            ...changes
        };
        return this.productos[index];
    }

    deleted(id) {
        const index = this.productos.findIndex(item => item.id === id);

        if (index === -1) {
            throw new Error('product not found');
        }

        this.productos.splice(index, 1);
        return { message: "deleted success!", id: id }
    }
}

module.exports = ProductosService;