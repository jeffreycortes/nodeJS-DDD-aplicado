const UsuariosRepository = require('../../infrastructure/usuarios-repository.js');


const obtenerTransferenciasPendientesDeUsuario = async (params, res) => {
  try {
    const tipos = ['abono', 'cobro', 'global'];
    const esTipoValido = tipos.indexOf(params.tipo || '') >= 0;

    if (esTipoValido)
      res.send(await UsuariosRepository.getTransaccionesPendientes(params, res));
    else {
      res.status(400);
      res.send({msg: "El parametro 'tipo' está errado o ausente. Por favor revise la documentación"});
    }

  } catch (error) {
    res.status(500);
    res.send({msg: "Falló la consulta de transacciones"});
  }
}


module.exports  = obtenerTransferenciasPendientesDeUsuario;
