const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Obtener todos los clients
router.get('/', clientController.getAllClients);

// Obtener un client por ID
router.get('/:id', clientController.getClientById);

// Crear un nuevo client
router.post('/', clientController.createClient);

// Actualizar un client existente
router.put('/:id', clientController.updateClient);

// Eliminar un client
router.delete('/:id', clientController.deleteClient);

module.exports = router;