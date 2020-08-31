const tipoExcepcion = require('../../domain/enums/tipo-excepcion-enum');

class BadRequestException extends Error {
  constructor(message = '') {
    super(message || 'La estructura del objeto o parametro(s) no es la esperada');
    this.name = tipoExcepcion.BadRequestException;
    this.code = 400;
  }
}

module.exports = BadRequestException;
