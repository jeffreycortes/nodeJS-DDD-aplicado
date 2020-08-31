class Summary {
  constructor(obj = {}) {
    this.kernel = obj.kernel || null;
    this.Language = obj.Language || null;
    this.Geolocation = obj.Geolocation || null;
    this.Appversion = obj.Appversion || null;
    this.DeviceOsVersion = obj.DeviceOsVersion || null;
    this.fingerprint = obj.fingerprint || null;
    this.DeviceBrand = obj.DeviceBrand || null;
    this.DeviceOS = obj.DeviceOS || null;
    this.AppName = obj.AppName || null;
    this.DeviceModel = obj.DeviceModel || null;
  }
}

module.exports = Summary;
