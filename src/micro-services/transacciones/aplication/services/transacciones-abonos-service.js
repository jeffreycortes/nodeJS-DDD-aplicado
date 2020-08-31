//const mappingToFingerprint = require('../../aplication/mappers/fingerprint-device-mapper');
const TransaccionesRepository = require('../../infrastructure/repositories/transacciones-repository');

const abonoACuentaService = async (tinAbonoDTO) => {
  //mappear en entidad
  //mappear fingerPrint
  //consumir a ACH

  return new Promise(resolve => { resolve('Abono realizado') });
}


module.exports = abonoACuentaService;
