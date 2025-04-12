const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const clientRoutes = require('./routes/clientRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // Conexión a la base de datos
        await connectDB();

        // Rutas públicas
        app.use('/api/clients', clientRoutes);
        app.use('/api/products', productRoutes);
        app.use('/api/ordenes', authMiddleware, orderRoutes);

        // Documentación Swagger
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).json({ message: 'Error interno del servidor' });
        });

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
};

startServer();