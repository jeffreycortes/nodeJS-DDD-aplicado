const obtenerLimitesService = require('../aplication/services/limites-obtener');

class LimitesController {
  async obtenerLimites(req, res) {
    res.json(await obtenerLimitesService());
  }
}

module.exports = new LimitesController();
