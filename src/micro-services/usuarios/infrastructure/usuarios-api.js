// controladores
const usuariosRouter = require('./usuarios-router');

//  funciones globales de aplicacion
const responseHandler = require('../../../infrastructure/rest-client/api-response-handler');

const VERSIONS = require('../../../infrastructure/rest-client/api-environment');

const api = (app, express) => {
  app.use(`${VERSIONS.URL_V1}/usuarios`, usuariosRouter(express.Router(), responseHandler));

  return app;
}

module.exports = api;
