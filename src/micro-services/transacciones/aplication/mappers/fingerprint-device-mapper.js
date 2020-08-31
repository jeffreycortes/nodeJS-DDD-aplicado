const Summary = require('../../domain/value-objects/fingerprint-summary');
const Geolocation = require('../../domain/value-objects/fingerprint-geolocation');
const Device = require('../../domain/value-objects/fingerprint-device');
const Fingerprint = require('../../domain/aggregates/fingerprint');

const mappingToFingerprint = (fingerprintDTO) => {
  const {hashId, celular} = fingerprintDTO;
  let summary = new Summary(fingerprintDTO.summary);
  const geolocation = new Geolocation(fingerprintDTO.geolocation);
  const device = new Device(fingerprintDTO.device);

  return new Fingerprint({
    hashId,
    celular,
    Summary: summary,
    Geolocation: geolocation,
    Device: device
  });
}

module.exports = mappingToFingerprint;
