const express = require('express');
const router = express.Router();
const viajesController = require('../controllers/viajesController')

// Definir las rutas y los controladores correspondientes
router.get('/', viajesController.getAllCompleted);
router.post('/', viajesController.create);
router.put('/:id', viajesController.updateToComplete);

module.exports = router;