const connection = require('./configDatabase');
const { v4: uuid } = require("uuid");

const getAllCompleted = () => {
  try {
    const results = new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM viajes WHERE conductor_id IS NOT NULL`, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
    return results;
  } catch (err) {
    throw new Error(`Error al obtener los viajes: ${err.message}`);
  }
};


const create = async (viaje) => {
    try {
        const id =uuid()
        const query = 'INSERT INTO viajes (id, inicio_latitud, inicio_longitud, destino_latitud, destino_longitud, pasajero_id,fecha_creacion) VALUES (?,?,?,?,?,?,CURRENT_TIMESTAMP); ';
        const values = [id, viaje.inicio_latitud, viaje.inicio_longitud, viaje.destino_latitud, viaje.destino_longitud, viaje.pasajero_id];
        const result = await new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
      return "statusCode : 200 OK";
    } catch (err) {
      throw new Error(`Error al crear la solicitud: ${err.message}`);
    }
  };
  
  const updateToComplete = async (id, viaje) => {
    const conductor_id = viaje.conductorid;
    if (!conductor_id) {
        res.status(400).json({ error: 'El ID del conductor es requerido' });
    } else {
    try {
        const query = `UPDATE viajes SET conductor_id = $1 WHERE id = $2 ;SELECT * FROM viajes WHERE id = $2;`;
        const values = [conductor_id, id]
      const result = await new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
      if (result.affectedRows === 0) {
        throw new Error(`El viaje no existe`);
      }
    } catch (err) {
      throw new Error(`Error al completar el viaje: ${err.message}`);
    }
    }
  };

  module.exports = {
    getAllCompleted,
    create,
    updateToComplete,
  };