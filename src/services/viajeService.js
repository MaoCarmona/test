const viajes = require('../database/viajesModel');

// Obtener todos los viajes completados
const getAllCompleted = async () => {
    try {
        const busqueda = await viajes.getAllCompleted();
        return busqueda;
      } catch (err) {
        throw new Error(`Error al obtener los viajes completados: ${err.message}`);
      }
};


// Crear una solicitud de viaje

const create = async (usuario) => {
    try {
      const viajeId = await viajes.create(usuario);
      return viajeId;
    } catch (err) {
      throw new Error(`Error al crear el viaje: ${err.message}`);
    }
  };
  
// Completar un viaje
  const updateToComplete = async (id, viaje) => {
      try {
        await viajes.updateToComplete(id, viaje);
      } catch (err) {
        throw new Error(`Error al completar el viaje: ${err.message}`);
      }
    };
  
  
  module.exports = {
    getAllCompleted,
    create,
    updateToComplete,
  };