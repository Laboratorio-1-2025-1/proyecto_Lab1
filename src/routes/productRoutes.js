const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Obtener todos los products
router.get('/', productController.getAllProducts);

// Obtener un product por ID
router.get('/:id', productController.getProductById);

// Crear un nuevo product
router.post('/', productController.createProduct);

// Actualizar un product existente
router.put('/:id', productController.updateProduct);

// Eliminar un product
router.delete('/:id', productController.deleteProduct);

module.exports = router;