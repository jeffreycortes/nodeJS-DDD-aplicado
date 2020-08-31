//const mappingToFingerprint = require('../../aplication/mappers/fingerprint-device-mapper');
const TransaccionesRepository = require('../../infrastructure/repositories/transacciones-repository');

const crearTransaccionCobro = async (tinAbonoDTO) => {
  //mappear en entidad
  //mappear fingerPrint
  //consumir a ACH

  return new Promise(resolve => { resolve('Solicitud de cobro creada') });
}


module.exports = crearTransaccionCobro;
