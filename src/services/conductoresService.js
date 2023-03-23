const conductores = require('../database/conductoresModel');

// Obtener todos los conductores
const getAll = async () => {
    try {
        const busqueda = await conductores.getAll();
        return busqueda;
      } catch (err) {
        throw new Error(`Error al obtener los conductores: ${err.message}`);
      }
};

// Obtener todos los conductores con estado disponible
const getDisponibles = async () => {
    try {
        const busqueda = await conductores.getDisponibles();
        return busqueda;
      } catch (err) {
        throw new Error(`Error al obtener los conductores disponibles: ${err.message}`);
      }
    };

// Obtener todos los conductores que estén en un rango de n km
const getCerca = async (latitud, longitud, distanciaMaximaEnKm) => {
    try {
      const conductores = await conductoresModel.getNearby(latitud, longitud, distanciaMaximaEnKm);
      return conductores;
    } catch (err) {
      throw new Error(`Error al obtener los conductores cercanos: ${err.message}`);
    }
  };

// Obtener un conductor por número de documento o ID
const getById = async (id) => {
    try {
        const conductor = await conductores.getById(id);
        return conductor;
      } catch (err) {
        throw new Error(`Error al obtener el conductor: ${err.message}`);
      }
    };

// Crear un nuevo conductor

const create = async (conductor) => {
  try {
    const conductorId = await conductores.create(conductor);
    return conductorId;
  } catch (err) {
    throw new Error(`Error al crear el conductor: ${err.message}`);
  }
};

// Actualizar un conductor existente
const update = async (id, conductor) => {
    try {
      await conductores.updateById(id, conductor);
    } catch (err) {
      throw new Error(`Error al actualizar el conductor: ${err.message}`);
    }
  };

// Eliminar un conductor existente
const deleteById = async (id) => {
    try {
        await conductores.deleteById(id);
      } catch (err) {
        throw new Error(`Error al eliminar el conductor: ${err.message}`);
      }
    };

module.exports = {
getAll,
getDisponibles,
getCerca,
getById,
create,
update,
deleteById,
};