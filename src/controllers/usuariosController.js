const usuariosService = require('../services/usuarioService');

// Obtener todos los usuarios
const getAll = async (req, res) => {
  try {
    const usuarios = await usuariosService.getAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo usuario
const create = async (req, res) => {
  try {
    const usuario = await usuariosService.create(req.body);
    res.status(201).json(usuario);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un usuario existente
const update = async (req, res) => {
  try {
  const id = req.params.id;
  const updatedUser = await usuariosService.update(id, req.body);
  res.json(updatedUser);
  } catch (err) {
  res.status(500).json({ message: err.message });
  }
  };
  
  // Eliminar un usuario existente
  const deleteById = async (req, res) => {
  try {
  const id = req.params.id;
  await usuariosService.deleteById(id);
  res.json({ message: 'usuario eliminado correctamente' });
  } catch (err) {
  res.status(500).json({ message: err.message });
  }
  };
  
  module.exports = {
  getAll,
  create,
  update,
  deleteById,
  };
