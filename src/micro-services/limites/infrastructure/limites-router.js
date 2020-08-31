const limitesController = require('./limites-controller');

const limitesRouter = (router, responseHandler) => {
  router.get('/', responseHandler(limitesController.obtenerLimites));

  return router;
}

module.exports = limitesRouter;
