const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController')

// Definir las rutas y los controladores correspondientes
router.get('/', usuariosController.getAll);
router.post('/', usuariosController.create);
router.put('/:id', usuariosController.update);
router.delete('/:id', usuariosController.deleteById);

module.exports = router;