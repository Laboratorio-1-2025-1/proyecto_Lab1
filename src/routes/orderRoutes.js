const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Obtener todas las órdenes
router.get('/', orderController.getAllOrders);

// Obtener una order por ID
router.get('/:id', orderController.getOrderById);

// Crear una nueva order
router.post('/', orderController.createOrder);

// Actualizar una order existente
router.put('/:id', orderController.updateOrder);

// Eliminar una order
router.delete('/:id', orderController.deleteOrder);

module.exports = router;