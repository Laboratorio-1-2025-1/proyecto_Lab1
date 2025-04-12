const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Pedidos',
            version: '1.0.0',
            description: 'API para gestionar pedidos'
        },
        servers: [
            {
                url: 'http://localhost:3000/api'
            }
        ]
    },
    apis: ['./routes/*.js'] // Ruta a los archivos de rutas
};

let swaggerSpec;

try {
    swaggerSpec = swaggerJsdoc(options);
} catch (error) {
    console.error('Error al generar la documentación Swagger:', error);
}

module.exports = swaggerSpec;