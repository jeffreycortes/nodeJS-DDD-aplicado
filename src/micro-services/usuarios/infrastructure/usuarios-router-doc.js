/**App Permission
* @apiDefine App Restricción:
* Este servicio solo puede ser consumido desde la app móvil.
*/

/**paginador
 * @apiDefine paginador
 * @apiParam {Number} [limit=0]  Parametró de paginación que indica el limite máximo de resultados que se desea obtener.
 * @apiParam {Number} [offset=0] Parametró de paginación que indica el índice o posición desde donde se iniciará el listado.
 */

/**parametroCelular
 * @apiDefine parametroCelular
 * @apiParam {Number} :celular Número de celular del usuario autenticado en la APP.
 */


/**parametrosRechazo
 * @apiDefine parametrosRechazo
 * @apiParam {Number} :celular Número de celular del usuario autenticado en la APP.
 * @apiParam {Number} tipo Tipo de lista que se dea obtener. Sus valores posibles son:
 * - abono
 * - cobro
 * - global
 */

 /** PersistenceError
  * @apiDefine PersistenceError
  * @apiError (Error 500) PersistenceException Error al intentar persistir el objeto
  * @apiErrorExample (500) Error-Response:
  *     HTTP/1.1 500 Internal Server Error
  *     {
  *       name: "PersistenceException",
  *       code: "500",
  *       message: "Error al intentar persistir el objeto",
  *     }
  */

 /** BadRequestError
 * @apiDefine BadRequestError
 * @apiError BadRequestException Ocurre si:
 * - los <code>parametros de entrada</code> no están completos o acordes a la firma del contrato definida.
 * - la estructura del <code>objeto json</code> no corresponde a la definida en los modelos o interfaces de intercambio de datos.
 * @apiErrorExample (400) Error-Response:
 *     HTTP/1.1 400 Internal Server Error
 *     {
 *       name: "BadRequestException",
 *       code: "400",
 *       message: "La estructura del objeto o parametro(s) no es la esperada",
 *     }
 */

 /**InvalidFormatCelular
  * @apiDefine InvalidFormatCelular
  * @apiError (Error 4xx) InvalidFormatException Formato de <code>celular</code> incorrecto
  * @apiErrorExample (400) Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
  *       name: "InvalidFormatException",
  *       code: "400",
  *       message: "Formato de celular incorrecto",
  *     }
  */

/**1.Obtener TIN pendientes
 * @apiGroup UsuariosController
 * @api {get} /usuarios/:celular/transferencias?tipo=&limit=&offset= 1.Obtener TIN pendientes
 * @apiDescription Petición para obtener las transferencias pendientes de abono y/o cobro del celular (usuario) especificado.
 * @apiVersion 1.0.0
 * @apiName obtenerTransferenciasPendientesDeusuario
 * @apiUse App
 * @apiParam {Number} :celular celular del usuario asociado a la transacción.
 * @apiUse parametrosRechazo
 * @apiUse paginador
 * @apiParamExample {json} RequestAbonos-Example:
 * /usuarios/573001234567/transferencias?tipo=abono&limit=0&offset=0
 * @apiParamExample {json} RequestCobros-Example:
 * /usuarios/573001234567/transferencias?tipo=cobro&limit=0&offset=0
 * @apiParamExample {json} RequestGlobal-Example:
 * /usuarios/573001234567/transferencias?tipo=global&limit=0&offset=0
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "CUS": "2c5ea4c0-3870-11e9-8bad-9b1deb4d3b7d"
 *       "fechaTransaccion":"2020-04-27T20:42:38.933Z",
 *       "celularOrigen":"573187654321",
 *       "nombreOrigen":"Cobrador",
 *       "monto":"10000",
 *       "mensaje":"Te queda un saldo de $10mil.",
 *       "tipoTransaccion": "cobro",
 *       "estadoTransaccion":"pendiente"
 *       }, ...]
 */

/**2. Obtener resumen de actividad de TIN del dia
  * @apiGroup UsuariosController
  * @api {get} /usuarios/:celular/transferencias/dia 2. Obtener resumen de actividad de TIN del dia
  * @apiDescription Petición para obtener del celular especificado, el resumen de la cantidad de transacciones y monto acumulado del día en curso.
  * @apiVersion 1.0.0
  * @apiName obtenerTransferenciasDelDiaActual
  * @apiUse App
  * @apiParam {Number} :celular Número de celular del usuario autenticado en la APP.
  * @apiParamExample {json} Request-Example:
  * /usuarios/573001234567/transferencias/dia
  * @apiSuccess (200) {Number} cantidadTransacciones Es la cantidad de transacciones realizadas por el usuario en el día en curso.
  * @apiSuccess (200) {Number} montoAcumulado Es el monto acumulado de dinero de las transacciones realizadas por el usuario en el día en curso.
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "cantidadTransacciones": "3",
  *       "montoAcumulado": 15000
  *     }
  */

/**3. Obtener historial de TIN
 * @apiGroup UsuariosController
 * @api {get} /usuarios/:celular/transferencias/historial?tipo=limit=&offset= 3. Obtener historial de TIN
 * @apiDescription Petición para obtener el historial de transferencias realizadas por el usuario los últimos 30 días.
 * @apiVersion 1.0.0
 * @apiName obtenerHistorialDeTransferencias
 * @apiUse App
 * @apiUse parametrosRechazo
 * @apiUse paginador
 * @apiParamExample {json} Request-Example:
 * /usuarios/573001234567/transferencias/historial?tipo=abono&limit=0&offset=0
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "cantidadTotal": 0,
 *      "data": [{
 *        "CUS": "2c5ea4c0-8765-11e9-8bad-9b1deb4d3b7d",
 *        "fechaTransaccion":"2020-04-27T20:42:38.933Z",
 *        "celularOrigen":"573007352413",
 *        "nombreDestino":"Batman",
 *        "monto":"40000",
 *        "mensaje":"Para que compres un helado ;)",
 *        "tipoTransaccion": "abono",
 *        "estadoTransaccion":"aceptado",
 *        "fechaRespuesta": "2020-04-27T21:10:38.655Z"
 *      }, ...]
 *     }
 * @apiSuccessExample NoRecords-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "cantidadTotal": 0,
 *      "data": []
 *     }
 */

/**4. Registrar contacto de confianza
  * @apiGroup UsuariosController
  * @api {post} /usuarios/:celular/contactos 4. Registrar contacto de confianza
  * @apiDescription Petición para registrar contactos de confianza de un usuario.
  * @apiVersion 1.0.0
  * @apiName registrarContactosDeConfianza
  * @apiUse App
  * @apiUse parametroCelular
  * @apiParam {Number} contacto Campo con el número de número de celular del contacto de confianza a registrar.
  * @apiParamExample {json} UriRequest-Example:
  * /usuarios/573001234567/contactos
  * @apiParamExample {Json} BodyRequest-Example:
  * {"contacto": 573108765432}
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     "Contacto registrado"
  * @apiUse BadRequestError
  * @apiUse InvalidFormatCelular
  * @apiUse PersistenceError
  */

/**5. Obtener contactos de confianza
 * @apiGroup UsuariosController
 * @api {get} /:celular/contactos 5. Obtener contactos de confianza
 * @apiDescription Petición para obtener los contactos de confianza de un usuario.
 * @apiVersion 1.0.0
 * @apiName obtenerContactosDeConfianza
 * @apiUse App
 * @apiUse parametroCelular
 * @apiParamExample {json} UriRequest-Example:
 * /usuarios/573001234567/contactos
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "cantidadTotal": 3,
 *      "data": [573127654321, 5731276543211, 573187652123]
 *     }
 */

/**6. Eliminar contactos de confianza
  * @apiGroup UsuariosController
  * @api {delete} /usuarios/:celular/contactos 6. Eliminar contactos de confianza
  * @apiDescription Petición para eliminar los contactos de confianza de un usuario.
  * @apiVersion 1.0.0
  * @apiName eliminarContactosDeConfianza
  * @apiUse App
  * @apiUse parametroCelular
  * @apiParam {Number} contacto Campo con el número de número de celular del contacto de confianza a eliminar.
  * @apiParamExample {json} UriRequest-Example:
  * /usuarios/573001234567/contactos
  * @apiParamExample {Json} BodyRequest-Example:
  * {"contacto": 573108765432}
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     "Contacto(s) eliminado(s)"
  * @apiUse BadRequestError
  * @apiUse InvalidFormatCelular
  * @apiUse PersistenceError
  */
