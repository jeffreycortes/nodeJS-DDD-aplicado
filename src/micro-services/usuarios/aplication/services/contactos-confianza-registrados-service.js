const UsuariosRepository = require('../../infrastructure/usuarios-repository.js');


let obtenerContactosDeConfianzaDeUsuario = async (params, res) => {
  try {
    res.json(await UsuariosRepository.getContactosDeConfianza(params, res));
  } catch (error) {
    res.status(500);
    res.json({error: error, msg: "Falló la consulta de contactos de confianza"});
  }
}


module.exports  = obtenerContactosDeConfianzaDeUsuario;
