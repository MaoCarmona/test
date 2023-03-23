const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');
const conductoresRouter = require('./routes/conductoresRouter')
const usuariosRouter = require('./routes/usuariosRouter')
const viajesRouter = require('./routes/viajesRouter')

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("./swagger.json");

const app = express();
const port = process.env.PORT || 3000;

// Agregar middleware para manejar solicitudes JSON y de formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar CORS para todas las solicitudes
//app.use(cors());

// Definir las rutas
app.use('/api/conductores', conductoresRouter);
app.use('/api/usuarios', usuariosRouter);
app.use('/api/viajes', viajesRouter);
// Definir ruta de swagger 
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});


