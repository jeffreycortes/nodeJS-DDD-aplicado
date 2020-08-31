//const mappingToFingerprint = require('../../aplication/mappers/fingerprint-device-mapper');
const TransaccionesRepository = require('../../infrastructure/repositories/transacciones-repository');

const debitarDeCuenta = async (tinDebitoDTO) => {
  //mappear en entidad
  //mappear fingerPrint
  //consumir a ACH

  return new Promise(resolve => { resolve('Debito realizado') });
}

module.exports = debitarDeCuenta;
