
const logErrors = (error, req, res, next) => {
    console.error(error);
    next(error);
}

const errorHandler = (error, req, res, next) => {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
}

const boomErrorHandler = (error, req, res, next) => {
    if (error.isBoom) {
        const { output } = error;
        
        res.status(output.statusCode).json({
            message: output.payload
        });
    } else {
        next(error);
    }
}

module.exports = { logErrors, errorHandler, boomErrorHandler };