// controladores
const limitesRouter = require('./limites-router');

//  funciones globales de aplicacion
const responseHandler = require('../../../infrastructure/rest-client/api-response-handler');

const VERSIONS = require('../../../infrastructure/rest-client/api-environment');

const api = (app, express) => {
  app.use(`${VERSIONS.URL_V1}/limites`, limitesRouter(express.Router(), responseHandler));

  return app;
}

module.exports = api;
