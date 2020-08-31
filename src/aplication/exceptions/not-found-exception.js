const tipoExcepcion = require('../../domain/enums/tipo-excepcion-enum');

class NotFoundException extends Error {
  constructor(message){
    super(message);
    this.name = tipoExcepcion.NotFoundException;
    this.code = 404;
  }
}

module.exports = NotFoundException;
