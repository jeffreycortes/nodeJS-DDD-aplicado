const usuariosController =  require('./usuarios-controller');

const usuariosRouter = (router, responseHandler) => {
  router.get('/:celular/transferencias', responseHandler(usuariosController.obtenerTransferenciasPendientesDeUsuario));

  router.get( '/:celular/transferencias/dia', responseHandler(usuariosController.obtenerTransferenciasDeUsuarioDelDiaActual));

  router.get('/:celular/transferencias/historial', responseHandler(usuariosController.obtenerHistorialDeTransferenciasDeUsuario));

  router.post('/:celular/contactos', responseHandler(usuariosController.registrarContactoDeConfianza));

  router.get('/:celular/contactos', responseHandler(usuariosController.obtenerContactosDeConfianzaRegistradosDeUsuario));

  router.delete('/:celular/contactos', responseHandler(usuariosController.eliminarContactoDeConfianza));

  return router;
}

module.exports = usuariosRouter;
