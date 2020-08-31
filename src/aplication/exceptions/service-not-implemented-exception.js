const tipoExcepcion = require('../../domain/enums/tipo-excepcion-enum');

class ServiceNotImplementedException extends Error {
  constructor() {
    super('Servicio no implementado');
    this.name = tipoExcepcion.ServiceNotImplementedException;
    this.code = 400;
  }
}

module.exports = ServiceNotImplementedException;
