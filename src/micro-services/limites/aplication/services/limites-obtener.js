const LimitesRepository = require('../../infrastructure/limites-repository');

let obtenerLimites = async (res) => {
  try {
    return await LimitesRepository.getLimites();
  }
  catch(error) {
    throw new Error('Error al obtener los limites');
  }
}


module.exports  = obtenerLimites;
