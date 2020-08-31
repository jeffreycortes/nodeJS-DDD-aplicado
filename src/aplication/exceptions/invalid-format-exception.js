const tipoExcepcion = require('../../domain/enums/tipo-excepcion-enum');

class InvalidFormatException extends Error {
  constructor(message) {
    super(message);
    this.name = tipoExcepcion.InvalidFormatException;
    this.code = 400;
  }
}

module.exports = InvalidFormatException;
