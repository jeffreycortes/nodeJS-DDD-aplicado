// controladores
const homeController = require('./../controllers/home-controller');
const limitesRouter = require('../../micro-services/limites/infrastructure/limites-router');
const usuariosRouter = require('../../micro-services/usuarios/infrastructure/usuarios-router');
const transaccionesRouter = require('../../micro-services/transacciones/infrastructure/transacciones-router');

//  funciones globales de aplicacion
const responseHandler = require('./api-response-handler');

const VERSIONS = require('./api-environment');

const api = (app, express) => {
  homeController(app,express, VERSIONS.URL_V1, responseHandler);

  // micro servicios
  app.use(`${VERSIONS.URL_V1}/limites`, limitesRouter(express.Router(), responseHandler));
  app.use(`${VERSIONS.URL_V1}/usuarios`, usuariosRouter(express.Router(), responseHandler));
  app.use(`${VERSIONS.URL_V1}/transacciones`, transaccionesRouter(express.Router(), responseHandler));

  return app;
}

module.exports = api;
