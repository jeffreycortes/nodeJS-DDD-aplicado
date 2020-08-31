const obtenerTransferenciasPendientesDeUsuarioService = require('../aplication/services/transferencias-pendientes-service');
const obtenerHistorialDeTransferenciasDeUsuarioService = require('../aplication/services/transferencias-historial-service');
const obtenerContactosDeConfianzaRegistradosDeUsuarioService = require('../aplication/services/contactos-confianza-registrados-service');
const registrarContactoDeConfianzaService = require('../aplication/services/contactos-confianza-registrar-service');
const eliminarContactoDeConfianzaService = require('../aplication/services/contactos-confianza-eliminar-service');
const BadRequestException = require('../../../aplication/exceptions/bad-request-exception');
const InvalidFormatException = require('../../../aplication/exceptions/invalid-format-exception');

class UsuariosController {
  async obtenerTransferenciasPendientesDeUsuario (req, res) {
    const {celular} = req.params;
    const {tipo, limit, offset} = req.query;

    const params = {celular, tipo, limit, offset};

    await obtenerTransferenciasPendientesDeUsuarioService(params, res);
  }

  async obtenerTransferenciasDeUsuarioDelDiaActual (req, res) {
    const cantidadTransacciones = Math.ceil( Math.random()*5 );
    const montoAcumulado = Math.ceil( Math.random()*15000 );

    res.json({ cantidadTransacciones, montoAcumulado });
  }

  async obtenerHistorialDeTransferenciasDeUsuario (req, res) {
    const params = {};

    await obtenerHistorialDeTransferenciasDeUsuarioService(params, res);
  }

  async registrarContactoDeConfianza (req, res) {
    const {contacto} = req.body;

    if (!contacto)
      new BadRequestException();
    else
      await registrarContactoDeConfianzaService(contacto, res);
  }

  async obtenerContactosDeConfianzaRegistradosDeUsuario (req, res) {
    const {celular} = req.params;

    await obtenerContactosDeConfianzaRegistradosDeUsuarioService({celular}, res);
  }

  async eliminarContactoDeConfianza (req, res) {
    const {contacto} = req.body;

    if (!contacto)
      new BadRequestException();
    else
      await eliminarContactoDeConfianzaService(contacto ,res);
  }
}

module.exports =  new UsuariosController();
