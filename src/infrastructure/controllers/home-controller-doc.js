/**EncodingHeader
 * @apiDefine EncodingHeader
 * @apiHeader {String} Accept-Encoding=gzip,deflate Cabecera para habilitar la compatibilidad de compresión en formatos gzip/deflate,
 * para optimizar tráfico de red. Debe enviarse en todas las peticiones.
 * @apiHeaderExample {Json} Header-Example:
 *     {
 *       "Accept-Encoding": "Accept-Encoding: gzip, deflate"
 *     }
 */

 /**
  * @apiGroup HomeController
  * @api {get} / 1. Index
  * @apiDescription Petición al home index de la v1 de la API
  * @apiVersion 1.0.0
  * @apiName Index
  * @apiUse EncodingHeader
  * @apiSampleRequest /?index
  * @apiSuccess {String} texto Bienvenido a la API TIN. Para ver la documentación vaya a /apidoc.
  */

  /**
   * @apiGroup HomeController
   * @api {get} /excepcion/:codeHttp 2. Excepciones
   * @apiDescription Petición para ver los mock de respuesta de errores http comunes
   * @apiVersion 1.0.0
   * @apiName Excepciones
   * @apiParam {Number} :codeHttp Código de error del esquema de excepción a obtener.
   * @apiParamExample {Number} Request-Example:
   * /excepcion/400
   * @apiSampleRequest /excepcion/400
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *        "message": "Ok",
   *     }
   * @apiError BadRequestException Se produce cuando los parametros no llegan completos en la petición
   * @apiError InvalidFormatException Se produce cuando el formato de algún parametro de entrada es incorrecto
   * @apiError NotFoundException Se produce cuando no se encuentra un recurso a obtener
   * @apiErrorExample (400) BadRequest-Response:
   *     HTTP/1.1 400 Bad Request
   *     {
   *       name:	"BadRequestException",
   *       code:	"400",
   *       message:	"Parametros ",
   *     }
   * @apiErrorExample (400) InvalidFormat-Response:
   *     HTTP/1.1 400 Bad Request
   *     {
   *       name:	"InvalidFormatException",
   *       code:	"400",
   *       message: "Formato de celular incorrecto",
   *     }
   * @apiErrorExample (404) NotFound-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       name:	"NotFoundException",
   *       code:	"error",
   *       message:	"Recurso no encontrado",
   *     }
   */
