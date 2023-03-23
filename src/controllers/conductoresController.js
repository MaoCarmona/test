const conductoresService = require('../services/conductoresService');

// Obtener todos los conductores
const getAll = async (req, res) => {
  try {
    const conductores = await conductoresService.getAll();
    res.json(conductores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener todos los conductores con estado disponible
const getDisponibles = async (req, res) => {
  try {
    const conductores = await conductoresService.getDisponibles();
    res.json(conductores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener todos los conductores que estén en un rango de 3 km
const getCerca = async (req, res) => {
  try {
    const latitud = req.query.latitud;
    const longitud = req.query.longitud;
    const distanciaMaxEnKM = req.query.distanciaMaxEnKM;
    const conductores = await conductoresService.getCerca(latitud, longitud,distanciaMaxEnKM);
    res.json(conductores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un conductor por número de documento o ID
const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const conductor = await conductoresService.getById(id);
    res.json(conductor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo conductor
const create = async (req, res) => {
  try {
    const conductor = await conductoresService.create(req.body);
    res.status(201).json(conductor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un conductor existente
const update = async (req, res) => {
  try {
  const id = req.params.id;
  const updatedConductor = await conductoresService.update(id, req.body);
  res.json(updatedConductor);
  } catch (err) {
  res.status(500).json({ message: err.message });
  }
  };
  
  // Eliminar un conductor existente
  const deleteById = async (req, res) => {
  try {
  const id = req.params.id;
  await conductoresService.deleteById(id);
  res.json({ message: 'Conductor eliminado correctamente' });
  } catch (err) {
  res.status(500).json({ message: err.message });
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
