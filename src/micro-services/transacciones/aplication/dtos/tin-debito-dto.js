class TinDebitoDTO {
  constructor() {
    this.TRN =  -1;
    this.CUS =  -1;
    this.fingerprintId =  -1;
    this.celularOrigen =  0;
    this.celularDestino =  0;
    this.monto =  0;
    this.numCuentaAbono =  0;
    this.tipoCuentaAbono =  null;
    this.numIdentifiacion =  0;
    this.tipoIdentificacion =  0;
    this.fechaTransaccion = null;
    this.estado;
  }
}

module.exports = TinDebitoDTO;
