const UsuariosRepository = require('../../infrastructure/usuarios-repository.js');


let obtenerHistorialTransferenciasDeUsuario = async (params, res) => {
  try {
    res.json(await UsuariosRepository.getHistorialTransacciones(params, res));
  } catch (error) {
    res.status(500);
    res.json({error: error, msg: "Falló la consulta de transacciones"});
  }
}


module.exports  = obtenerHistorialTransferenciasDeUsuario;
