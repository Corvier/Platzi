const boom = require('@hapi/boom');
// const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/productos.data.transact.object');

const validatorHandler = async (schema, property) => {
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data);

        if (error) {
            next(boom.badRequest(error));
        }
        next();
    }
}


module.exports = validatorHandler;