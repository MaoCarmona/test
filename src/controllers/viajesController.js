const viajeService = require('../services/viajeService');

// Obtener todos los viajes completados
const getAllCompleted = async (req, res) => {
  try {
    const viajes = await viajeService.getAllCompleted();
    res.json(viajes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una solicitud de viaje
const create = async (req, res) => {
  try {
    const viaje = await viajeService.create(req.body);
    res.status(201).json(viaje);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Completar un viaje
const updateToComplete = async (req, res) => {
  try {
  const id = req.params.id;
  const updatedTravel = await viajeService.updateToComplete(id, req.body);
  res.json(updatedTravel);
  } catch (err) {
  res.status(500).json({ message: err.message });
  }
  };
  
  module.exports = {
    getAllCompleted,
    create,
    updateToComplete,
  };