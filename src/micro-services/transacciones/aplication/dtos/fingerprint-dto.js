class FingerprintDTO {
  constructor() {
    this.hashId = "26fff5af6441f8e15a71e8d62c361714484b1b308c99e8eb68ca85e2a7e0dc58";
    this.celular = 3001234567;
    this.summary = {
      "kernel": "17D47\u0000",
      "Language": "en",
      "Geolocation": "true",
      "Appversion": "1.0",
      "DeviceOsVersion": "11.2",
      "fingerprint": "false",
      "DeviceBrand": "Apple Inc.",
      "DeviceOS": "iOS",
      "AppName": "FPDios_Test_ObjC",
      "DeviceModel": "nil"
    };
    this.geolocation = {
      "Region": "CLCircularRegion (identifier: '<+51.50997999, -0.13370000> radius 141.61', center:<+51.50997999, -0.13370000>, radius: 141.61m)",
      "TimeZone": "",
      "Latitud": "51.509980",
      "PostalCode": "WIJ",
      "Longitud": "-0.1373700",
      "Country": "Colombia",
      "Continente": "SA",
      "ISP": "",
      "City": "Bogota"
    };
    this.device = {
      "IMEI": "",
      "IP": "",
      "Screen_Resolution": "",
      "Client_Timestamp": "",
      "OperativeSystem": "",
      "AppAction": "",
      "DeviceID": ""
    };
  }
}

module.exports = FingerprintDTO;
