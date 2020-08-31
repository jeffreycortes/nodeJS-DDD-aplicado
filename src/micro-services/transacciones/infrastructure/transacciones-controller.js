const registrarFingerprintService = require('../aplication/services/fingerprint-registrar-service');
const obtenerFingerprintService = require('../aplication/services/fingerprint-obtener-service');
const abonoACuentaService = require('../aplication/services/transacciones-abonos-service');
const actualizarTransaccionAbonoService = require('../aplication/services/transacciones-abonos-actualizar-service');
const crearTransaccionCobroService = require('../aplication/services/transacciones-cobros-service');
const actualizarTransaccionCobroService = require('../aplication/services/transacciones-cobros-actualizar-service');
const debitarDeCuenta = require('../aplication/services/transacciones-debitos-service');
const BadRequestException = require('../../../aplication/exceptions/bad-request-exception');
const InvalidFormatException = require('../../../aplication/exceptions/invalid-format-exception');

class TransaccionesController {
  async registrarFingerprint(req, res) {
    const {fingerprint: fingerprintDTO } = req.body;

    if(!fingerprintDTO)
      throw new BadRequestException();

    res.json(await registrarFingerprintService(fingerprintDTO, res));
  }

  async obtenerFingerprint(req, res) {
    const {id: fingerprintId} = req.params;
    const {celular} = req.query;

    if(isNaN(Number(fingerprintId)))
      throw new InvalidFormatException('Identificador incorrecto');

    if (isNaN(Number(celular)))
      throw new InvalidFormatException('Formato de celular incorrecto');

    res.json( await obtenerFingerprintService({fingerprintId, celular}) );
  }

  async abonarACuenta(req, res) {
    const {tinAbono} = req.body;

    if (!tinAbono)
      throw new BadRequestException();

    res.json(await abonoACuentaService(tinAbono));
  }

  async actualizarTransaccionAbono(req, res) {
    const accion = 'rechazar';
    const {celular} = req.query;
    const {CUS} = req.params;

    if (!celular)
      throw new BadRequestException();

    res.json( await actualizarTransaccionAbonoService({CUS, accion}) );
  }

  async crearTransaccionCobro(req, res) {
    const {tinCobro: tincobroDto} = req.body;

    if (!tincobroDto)
      throw new BadRequestException();

    res.json( await crearTransaccionCobroService() );
  }

  async actualizarTransaccionCobro(req, res) {
    const accion = 'rechazar';
    const {celular} = req.query;
    const {CUS} = req.params;

    if (isNaN(Number(celular)))
      throw new InvalidFormatException('Formato de celular incorrecto');

    /*if (accion != 'rechazar')
      throw new BadRequestException('Acción no soportada');*/

    res.json( await actualizarTransaccionCobroService({tinCobroId: CUS, accion}) );
  }

  async debitarDeCuenta(req, res) {
    //const {token} = req.query;
    const {tinDebito} = req.body;

    if (!tinDebito)
      throw new BadRequestException();

    res.json( await debitarDeCuenta(tinDebito) );
  }
}

module.exports = new TransaccionesController();
