const express = require('express');
const router = express.Router();
const conductoresController = require('../controllers/conductoresController')

// Definir las rutas y los controladores correspondientes
router.get('/', conductoresController.getAll);
router.get('/disponibles', conductoresController.getDisponibles);
router.get('/cerca', conductoresController.getCerca);
router.get('/:id', conductoresController.getById);
router.post('/', conductoresController.create);
router.put('/:id', conductoresController.update);
router.delete('/:id', conductoresController.deleteById);

module.exports = router;
