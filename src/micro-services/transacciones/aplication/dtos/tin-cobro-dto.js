const tinEstado = require('../enums/tin-estados-enum');

class TinCobroDTO {
  constructor() {
    this.id = -1;
    this.celular = 0;
    this.estado = tinEstado.Nueva;
    this.fingerprintId = 0;
    this.monto = 0;
    this.numCuenta = 0;
    this.numIdentifiacion = 0;
    this.numTrxFlex = 0;
    this.tipoIdent = 0;
  }
}

module.exports = TinCobroDTO;
