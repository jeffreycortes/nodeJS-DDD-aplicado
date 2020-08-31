const UsuariosRepository = require('../../infrastructure/usuarios-repository.js');


let eliminarContactoDeConfianza = async (celular, res) => {

  celular = Number(celular);

  if(isNaN(celular))
    throw new Error('Formato de celular incorrecto');

  const contactoDeConfianza = await UsuariosRepository.getContactoDeConfianza(celular);

  if(contactoDeConfianza.length == 0)
    throw new Error('El contacto de confianza no existe');

  try {
    res.json(await UsuariosRepository.deleteContactoDeConfianza(celular));
  }
  catch(error) {
    console.log(error);
    throw new Error('no fue posible guardar el contacto');
  }
}


module.exports  = eliminarContactoDeConfianza;
