const mappingToFingerprint = require('../../aplication/mappers/fingerprint-device-mapper');
const FingerprintsRepository = require('../../infrastructure/repositories/fingerprints-repository');
const InvalidFormatException = require('../../../../aplication/exceptions/invalid-format-exception');
const ExistingResourceException = require('../../../../aplication/exceptions/existing-resource-exception');
const PersistenceException = require('../../../../aplication/exceptions/persistence-exception');

const registrarFingerprint = async (fingerprintDTO, res) => {
  const celular = Number(fingerprintDTO.celular);

  if (isNaN(celular))
    throw new InvalidFormatException('Formato de celular incorrecto');


  let fingerprint = await FingerprintsRepository.getFingerprint(fingerprintDTO.hashId, celular);

  /*if (fingerprint.hashId)
    throw new ExistingResourceException('El recurso ya fue registrado');*/

  fingerprint = mappingToFingerprint(fingerprintDTO);

  try {
    res.json(await FingerprintsRepository.insertFingerprint(celular, fingerprint));
  }
  catch(error) {
    throw new PersistenceException('no fue posible insertar el objeto');
  }
}


module.exports  = registrarFingerprint;
