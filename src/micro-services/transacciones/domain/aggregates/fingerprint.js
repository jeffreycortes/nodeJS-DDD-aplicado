const FingerprintDevice = require('../entities/fingerprint-device');
const Summary = require('../value-objects/fingerprint-summary');
const Geolocation = require('../value-objects/fingerprint-geolocation');
const Device = require('../value-objects/fingerprint-device');

class FingerPrint {
  constructor(obj = {}) {
    this.FPD = new FingerprintDevice(obj.hashId || -1);
    this.Summary = obj.Summary || new Summary();
    this.Geolocation = obj.Geolocation || new Geolocation();
    this.Device = obj.Device || new Device();
  }
}


module.exports = FingerPrint;
