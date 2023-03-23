const usuarios = require('../database/usuariosModel');

// Obtener todos los conductores
const getAll = async () => {
    try {
        const busqueda = await usuarios.getAll();
        return busqueda;
      } catch (err) {
        throw new Error(`Error al obtener los usuarios: ${err.message}`);
      }
};


// Crear un nuevo conductor

const create = async (usuario) => {
    try {
      const usuarioId = await usuarios.create(usuario);
      return usuarioId;
    } catch (err) {
      throw new Error(`Error al crear el usuarios: ${err.message}`);
    }
  };
  
  // Actualizar un usuario existente
  const update = async (id, usuario) => {
      try {
        await usuarios.updateById(id, usuario);
      } catch (err) {
        throw new Error(`Error al actualizar el usuario: ${err.message}`);
      }
    };
  
  // Eliminar un usuario existente
  const deleteById = async (id) => {
      try {
          await usuarios.deleteById(id);
        } catch (err) {
          throw new Error(`Error al eliminar el usuario: ${err.message}`);
        }
      };
  
  module.exports = {
  getAll,
  create,
  update,
  deleteById,
  };