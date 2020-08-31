const tipoExcepcion = require('../../domain/enums/tipo-excepcion-enum');

class PersistenceException extends Error {
  constructor(message) {
    super(message);
    this.name = tipoExcepcion.PersistenceException;
    this.code = 500;
  }
}

module.exports = PersistenceException;
