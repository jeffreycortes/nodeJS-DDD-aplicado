const tipoExcepcion = require('../../domain/enums/tipo-excepcion-enum');

class ExistingResourceException extends Error {
  constructor(message) {
    super(message);
    this.name = tipoExcepcion.ExistingResourceException;
    this.code = 500;
  }
}

module.exports = ExistingResourceException;
