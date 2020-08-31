const tipoExcepcion = require('../../domain/enums/tipo-excepcion-enum');

class UncontrolledException {
  constructor(logExceptionId) {
    this.message = `Error desconocido #${logExceptionId}`;
    this.name = tipoExcepcion.UncontrolledException;
    this.code = 500;
  }
}

module.exports = UncontrolledException;
