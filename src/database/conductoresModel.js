const connection = require('./configDatabase');
const { v4: uuid } = require("uuid");
const getAll = () => {
  try {
    const results = new Promise((resolve, reject) => {
      connection.query('SELECT * FROM conductores', (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
    return results;
  } catch (err) {
    throw new Error(`Error al obtener los conductores: ${err.message}`);
  }
};


const getDisponibles = async () => {
  try {
    const query = 'SELECT * FROM conductores WHERE estado = ?';
    const results = await new Promise((resolve, reject) => {
      connection.query(query, "disponible", (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
    return results;
  } catch (err) {
    throw new Error(`Error al obtener los conductores disponibles: ${err.message}`);
  }
};
const getCerca = async (latitud, longitud, distanciaMaximaEnKm) => {
  try {
    const query = `SELECT *, ( 6371 * acos( cos( radians(?) ) *
                    cos( radians( latitud ) )
                    * cos( radians( longitud ) - radians(?)
                    ) + sin( radians(?) ) *
                    sin( radians( latitud ) ) )
                  ) AS distancia
                  FROM conductores
                  HAVING distancia < ?
                  ORDER BY distancia`;

    const results = await new Promise((resolve, reject) => {
      connection.query(query, [latitud, longitud, latitud, distanciaMaximaEnKm], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
    return results;
  } catch (err) {
    throw new Error(`Error al obtener los conductores cercanos: ${err.message}`);
  }
};

const getById =async (id) =>{
  try {
    const query = 'SELECT * FROM conductores WHERE id = ?';
    const result = await new Promise((resolve, reject) => {
      connection.query(query, id, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
    if (result.length === 0) {
      throw new Error(`El conductor con id ${id} no existe`);
    }
    return result[0];
  } catch (err) {
    throw new Error(`Error al obtener el conductor: ${err.message}`);
  }
};

const create = async (conductor) => {
  try {

    const query = 'INSERT INTO conductores (nombre, estado, dni, latitud, longitud, id) VALUES (?, ?, ?, ?,?,?)';
    const values = [conductor.nombre, conductor.estado, conductor.dni ,conductor.latitud ,conductor.longitud , uuid()];
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
    throw new Error(`Error al crear el conductor: ${err.message}`);
  }
};

const update = async (id, conductor) => {
  try {
    const query = 'UPDATE conductores SET nombre = ?, apellido = ?, dni = ? ,latitud = ? , longitud = ? WHERE id = ?';
    const values = [conductor.nombre, conductor.apellido, conductor.dni,conductor.latitud,conductor.longitud, id];
    const result = await new Promise((resolve, reject) => {
      connection.query(query, values, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
    if (result.affectedRows === 0) {
      throw new Error(`El conductor con id ${id} no existe`);
    }
  } catch (err) {
    throw new Error(`Error al actualizar el conductor: ${err.message}`);
  }
};


const deleteById = async (id) => {
  try {
    const query = 'DELETE FROM conductores WHERE id = ?';
    const result = await new Promise((resolve, reject) => {
      connection.query(query, id, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
    if (result.affectedRows === 0) {
      throw new Error(`El conductor con id ${id} no existe`);
    }
  } catch (err) {
    throw new Error(`Error al eliminar el conductor: ${err.message}`);
  }
};


module.exports = {
  getAll,
  getCerca,
  getDisponibles,
  getById,
  create,
  update,
  deleteById,
};
