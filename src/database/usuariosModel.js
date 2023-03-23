const connection = require('./configDatabase');
const { v4: uuid } = require("uuid");

const getAll = () => {
  try {
    const results = new Promise((resolve, reject) => {
      connection.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
    return results;
  } catch (err) {
    throw new Error(`Error al obtener los usuarios: ${err.message}`);
  }
};


const create = async (usuario) => {
    try {
  
      const query = 'INSERT INTO usuarios (nombre, dni, id) VALUES (?, ?, ?)';
      const values = [usuario.nombre, usuario.dni , uuid()];
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
      throw new Error(`Error al crear el usuario: ${err.message}`);
    }
  };
  
  const update = async (id, usuario) => {
    try {
      const query = 'UPDATE usuarios SET nombre = ?,dni = ?  WHERE id = ?';
      const values = [usuario.nombre, usuario.dni, id];
      const result = await new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
      if (result.affectedRows === 0) {
        throw new Error(`El usuario con id ${id} no existe`);
      }
    } catch (err) {
      throw new Error(`Error al actualizar el usuario: ${err.message}`);
    }
  };
  
  
  const deleteById = async (id) => {
    try {
      const query = 'DELETE FROM usuarios WHERE id = ?';
      const result = await new Promise((resolve, reject) => {
        connection.query(query, id, (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
      if (result.affectedRows === 0) {
        throw new Error(`El usuario con id ${id} no existe`);
      }
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
  