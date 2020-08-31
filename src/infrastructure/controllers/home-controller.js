const NotFoundException = require('../../aplication/exceptions/not-found-exception');
const BadRequestException = require('../../aplication/exceptions/bad-request-exception');
const UncontrolledException = require('../../aplication/exceptions/uncontrolled-exception');
const path = require('path'),
      app_root = __dirname;

const homeController = (app, express, url_base_api, responseHandler) => {
  app.use( '/apidoc', express.static(path.join(app_root, '../../../apidoc')) );

  app.get(`${url_base_api}/`, responseHandler(async (req, res) => {
    res.send('Bienvenido a la API TIN. Para ver la documentación vaya a <a href="../../apidoc">apidoc</a>');
  }));

  app.get(`${url_base_api}/excepcion/:code`, responseHandler(async (req, res) => {
    const errorCode = Number(req.params.code);

    if (isNaN(errorCode)) {
      throw new BadRequestException('El parametro :code, debe ser un valor númerico');
    }

    switch(errorCode)
    {
      case 200:
        res.send({message:"Ok"});
      case 400:
        throw new BadRequestException('Error de petición');
      case 500:
        throw new UncontrolledException(-1);
      case 404:
      default:
        throw new NotFoundException('Código de excepción no encontrado');
    }

  }));
}

module.exports = homeController;
