const FingerprintsRepository = require('../../infrastructure/repositories/fingerprints-repository');

let obtenerFingerprint = async ({fingerprintId, celular}) => {

  const fingerPrintIndex = --fingerprintId;
  return await FingerprintsRepository.getFingerprint(fingerPrintIndex, celular);
}

module.exports  = obtenerFingerprint;
