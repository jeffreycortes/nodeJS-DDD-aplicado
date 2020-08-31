class Geolocation {
  constructor(obj = {}) {
    this.Region  = obj.Region || null;
    this.TimeZone  = obj.TimeZone || null;
    this.Latitud  = obj.Latitud || null;
    this.PostalCode  = obj.PostalCode || null;
    this.Longitud  = obj.Longitud || null;
    this.Country  = obj.Country || null;
    this.Continente  = obj.Continente || null;
    this.ISP  = obj.ISP || null;
    this.City  = obj.City || null;
  }
}

module.exports = Geolocation;
