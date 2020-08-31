const UsuariosRepository = require('../../infrastructure/usuarios-repository.js');


let registrarContactoDeConfianza = async (celular, res) => {

  celular = Number(celular);

  if(isNaN(celular))
    throw new Error('Formato de celular incorrecto');

  const contactoDeConfianza = await UsuariosRepository.getContactoDeConfianza(celular);

  if(contactoDeConfianza.length > 0)
    throw new Error('Contacto de confianza ya registrado');

  try {
    res.json(await UsuariosRepository.insertContactoDeConfianza(celular));
  }
  catch(error) {
    console.log(error);
    throw new Error('no fue posible guardar el contacto');
  }
}


module.exports  = registrarContactoDeConfianza;
