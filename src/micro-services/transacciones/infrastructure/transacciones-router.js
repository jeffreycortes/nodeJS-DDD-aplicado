const transaccionesController = require('./transacciones-controller')

const transaccionesRouter = (router, responseHandler) => {

  router.post('/fingerprints', responseHandler(transaccionesController.registrarFingerprint));

  router.get('/fingerprints/:id', responseHandler(transaccionesController.obtenerFingerprint));

  router.post('/abonos', responseHandler(transaccionesController.abonarACuenta));

  router.patch('/abonos/rechazados/:CUS', responseHandler(transaccionesController.actualizarTransaccionAbono));

  router.post('/cobros', responseHandler(transaccionesController.crearTransaccionCobro));

  router.patch('/cobros/rechazados/:CUS', responseHandler(transaccionesController.actualizarTransaccionCobro));

  router.post('/debitos', responseHandler(transaccionesController.debitarDeCuenta));

  return router;
}

module.exports = transaccionesRouter;
