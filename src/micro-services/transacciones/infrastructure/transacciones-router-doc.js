 /**App Permission
 * @apiDefine App Restricción:
 * Este servicio solo puede ser consumido desde la app móvil.
 */

 /**ApiTin Permission
  * @apiDefine ApiTin Restricción:
  * Este servicio es para consumo interno del API TIN.
  */

 /**Switch Permission
  * @apiDefine Switch Restricción:
  * Este servicio solo puede ser consumido por el core financiero.
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

 /**fingerprintJson
  * @apiDefine fingerprintJson fingerprint - Recurso en formato JSON
  *  que representa el fingerprint capturado del dispositivo móvil por la aplicación
  */

 /**1. Registrar Fingerprint
 * @apiGroup TransaccionesController
 * @api {post} /transacciones/fingerprints 1. Registrar Fingerprint
 * @apiDescription Petición para persisitir un fingerprint en API-TIN y obtener el ID correspondiente.
 * @apiVersion 1.0.0
 * @apiName RegistrarFingerprint
 * @apiPermission App
 * @apiParam (fingerprint) {Object} fingerprint Objeto json con la estructura e información del fingerprint a registrar.
 * <br/> *<code>Esta versión es un mockup <strong>no oficial</strong></code>, se documentará una vez se definan los campos obligatorios.
 * @apiParam (fingerprint) {String}  fingerprint.hashId Es el identificador del fingerprint capturado por la APP.
 * @apiParam (fingerprint) {String}  fingerprint.celular Número de celular del usuario autenticado en la APP.
 * @apiParam (fingerprint) {Object}  fingerprint.summary <code>Pendiente definir estructura.</code> Por ahora enviar objeto vacío (<code>{}</code>) o la estructura del ejemplo.
 * @apiParam (fingerprint) {Object}  fingerprint.geolocation <code>Pendiente definir estructura.</code> Por ahora enviar objeto vacío (<code>{}</code>) o la estructura del ejemplo.
 * @apiParam (fingerprint) {Object}  fingerprint.device <code>Pendiente definir estructura.</code> Por ahora enviar objeto vacío (<code>{}</code>) o la estructura del ejemplo.
 * @apiParamExample {Json} LargeRequest-Example:
 *     {
 *       "fingerprint": {
           "hashId": "fpt1234567",
           "celular": 3001234567,
           "summary": {
             "kernel": "17D47\u0000",
             "Language": "en",
             "Geolocation": "true",
             "Appversion": "1.0",
             "DeviceOsVersion": "11.2",
             "fingerprint": "false",
             "DeviceBrand": "Apple Inc.",
             "DeviceOS": "iOS",
             "AppName": "FPDios_Test_ObjC",
             "DeviceModel": "nil"
           },
           "geolocation": {
             "Region": "CLCircularRegion (identifier: '<+51.50997999, -0.13370000> radius 141.61', center:<+51.50997999, -0.13370000>, radius: 141.61m)",
             "TimeZone": "",
             "Latitud": "51.509980",
             "PostalCode": "WIJ",
             "Longitud": "-0.1373700",
             "Country": "Colombia",
             "Continente": "SA",
             "ISP": "",
             "City": "Bogota"
           },
           "device": {
             "IMEI": "",
             "IP": "",
             "Screen_Resolution": "",
             "Client_Timestamp": "",
             "OperativeSystem": "",
             "AppAction": "",
             "DeviceID": ""
           }
         }
 *     }
 * @apiParamExample {Json} ShortRequest-Example:
 *     {
 *       "fingerprint": {
           "hashId": "fpt7654321",
           "celular": 3001234567,
           "summary": {},
           "geolocation": {},
           "device": {}
         }
 *     }
 * @apiSuccess (200) {String} fingerprintId Id del fingerprint registrado.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "fingerprintId": "1",
 *     }
 * @apiUse BadRequestError
 * @apiUse InvalidFormatCelular
 * @apiUse PersistenceError
 */

 /**2. Obtener Fingerprint
  * @apiGroup TransaccionesController
  * @api {get} /transacciones/fingerprints/:fingerprintId?celular= 2. Obtener Fingerprint
  * @apiDescription Retorna un recurso fingerptint en formato json asoicado a los parametros de entrada.
  * @apiVersion 1.0.0
  * @apiName obtenerFingerprint
  * @apiPermission ApiTin
  * @apiParam {Number} :fingerprintId Id del recurso fingerprint a obtener.
  * <br/> <code>Pendiente</code> definir formato del Id: Número, alfanumérico, GUID, etc.
  * @apiParam {Number} celular= Celular asociado al fingerprint del id especificado.
  * <br/> *Se pide por seguridad y evitar consultas desde otros puntos usando solo el id.
  * @apiParamExample {Json} Request-Example:
  * /transacciones/fingerprints/1?celular=3001234567
  * @apiSuccess {Json} fingerprint Recurso en formato json con el fingerprint consultado o un objeto vacío ({}).
  * @apiSuccessExample {json} FingerprintNotfoundSuccess-Response:
  *     HTTP/1.1 200 OK
  *     {}
  * @apiSuccessExample {json} FingerprintResourceSuccess-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "fingerprint": {
            hashId: "fpt1234567",
            celular: 3001234567,
            summary: {
              "kernel": "17D47\u0000",
              "Language": "en",
              "Geolocation": "true",
              "Appversion": "1.0",
              "DeviceOsVersion": "11.2",
              "fingerprint": "false",
              "DeviceBrand": "Apple Inc.",
              "DeviceOS": "iOS",
              "AppName": "FPDios_Test_ObjC",
              "DeviceModel": "nil"
            },
            geolocation: {
              "Region": "CLCircularRegion (identifier: '<+51.50997999, -0.13370000> radius 141.61', center:<+51.50997999, -0.13370000>, radius: 141.61m)",
              "TimeZone": "",
              "Latitud": "51.509980",
              "PostalCode": "WIJ",
              "Longitud": "-0.1373700",
              "Country": "Colombia",
              "Continente": "SA",
              "ISP": "",
              "City": "Bogota"
            },
            device: {
              "IMEI": "",
              "IP": "",
              "Screen_Resolution": "",
              "Client_Timestamp": "",
              "OperativeSystem": "",
              "AppAction": "",
              "DeviceID": ""
            }
          }
  *     }
  * @apiError BadRequestException Ocurre si el parametro <code>fingerprintId</code> no es un valor númerico
  * @apiError InvalidFormatException Formato de <code>celular</code> incorrecto
  * @apiErrorExample (400) BadRequest-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
  *       name:	"BadRequestException",
  *       code:	"400",
  *       message: "Identificador incorrecto",
  *     }
  * @apiErrorExample (400) InvalidFormat-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
  *       name:	"InvalidFormatException",
  *       code:	"400",
  *       message: "Formato de celular incorrecto",
  *     }
  */

 /**3. Abonar a cuenta
  * @apiGroup TransaccionesController
  * @api {post} /transacciones/abonos 3. Abonar a cuenta
  * @apiDescription Petición para Aceptar una TIN de abono de dinero, persistir en API TIN y notificar a ACH.
  * @apiVersion 1.0.0
  * @apiName abonarACuenta
  * @apiPermission Switch
  * @apiParam (tinAbono) {Object} tinAbono Recurso en formato json con el esquema de una transacción de abono de dinero.
  * @apiParam (tinAbono) {Number} tinAbono.TRN Transaction reference number (id transacción de flex).
  * @apiParam (tinAbono) {Number} tinAbono.CUS Código único de seguimiento (id transacción de ACH).
  * @apiParam (tinAbono) {Number} tinAbono.fingerprintId Es el id del fingerprint registrado previamente por la App y asociado a la transacción.
  * @apiParamExample {Json} Request-Example:
  * {
  * "tinAbono": {
  *   "TRN": 12345678,
  *   "CUS": 87654321,
  *   "fingerprintId": 000012,
  *   "celularOrigen": 3181234567,
  *   "celularDestino": 30017654321,
  *   "monto": 1000,
  *   "numCuentaAbono": 7654321,
  *   "tipoCuentaAbono": "A",
  *   "numIdentificacion": 1022345678,
  *   "tipoIdentificacion": 1,
  *   "fechaTransaccion":"2020-04-27T20:42:38.933Z"
  *   }
  * }
  * @apiSuccessExample {json} Success-Response:
  *     HTTP/1.1 200 OK
  *     "Abono realizado"
  * @apiUse BadRequestError
  * @apiUse PersistenceError
  */

 /**x. Aceptar TIN de abono
  * @apiIgnore Caso de uso no implementado
  * @apiGroup TransaccionesController
  * @api {patch} /transacciones/abonos/:id?accion=aceptar x. Aceptar TIN de abono
  * @apiDescription Petición para actualizar el estado de una TIN de abono a "aceptado".
  * @apiVersion 1.0.0
  * @apiName actualizarTransaccionDeAbonoAAceptado
  * @apiPermission App
  * @apiParam {Number} :id Id del fingerprint registrado y asociado a la transacción por la app.
  * @apiParam {String} accion Nombre del estado al que se debe actualizar la transacción. Su valor para este caso de uso debe ser "aceptar".
  * @apiParam {Json} tinAbono Objeto json con los datos de la transacción.
  * Ver estructura en BodyReqest-Example.
  * <br/>Se produce una <code>BadRequestExcepcion</code> si no está presente el objeto.
  * @apiParamExample {Json} UriRequest-Example:
  * /transacciones/abonos/1234567?accion=aceptar
  * @apiParamExample {Json} BodyEnvioDineroRequest-Example:
  * {
  *    "tinAbono": {
  *       "TRN": 12345678,
  *       "fingerprintId": 1,
  *       "celularOrigen": 123456,
  *       "celularDestino": 3011234568,
  *       "monto": 100000,
  *       "tipoCuentA": A,
  *       "tipoCuentA": A,
  *       "numIdentificacion": 1022345627,
  *       "tipoIdentificacion": 1,
  *       }
  * }
  * @apiError InvalidFormatException Formato de celular incorrecto.
  * @apiError NotFoundException El objeto fingerprint no fue encontrado.
  * @apiUse PersistenceError
  * @apiErrorExample (400) Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
  *       name:	"InvalidFormatException",
  *       code:	"400",
  *       message:	"Formato de celular incorrecto"
  *     }
  * @apiErrorExample (404) Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       name:	"NotFoundException",
  *       code:	"404",
  *       message:	"El objeto fingerprint no fue encontrado",
  *     }
  */

 /**4. Rechazar TIN de abono
   * @apiGroup TransaccionesController
   * @api {patch} /transacciones/abonos/rechazados/:CUS?celular= 4. Rechazar TIN de abono
   * @apiDescription Petición para actualizar el estado de una TIN de abono a "rechazado".
   * @apiVersion 1.0.0
   * @apiName actualizarTransaccionDeAbonoARechazado
   * @apiPermission App
   * @apiParam {Number} CUS Código único de seguimiento (id transacción de ACH).
   * @apiParam {Number} celular Número de celular del usuario autenticado en la APP.
   * @apiParamExample {Json} Request-Example:
   * /transacciones/abonos/rechazados/1234567?celular=3001234567
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     "Abono rechazado"
   * @apiUse InvalidFormatCelular
   * @apiUse PersistenceError
 */

 /**5. Crear TIN de solicitud de cobro
 * @apiGroup TransaccionesController
 * @api {post} /transacciones/cobros 5. Crear TIN de solicitud cobro
 * @apiDescription Petición para crear una TIN de solicitud de cobro de dinero.
 * @apiVersion 1.0.0
 * @apiName crearTransaccionCobro
 * @apiPermission App
 * @apiParam {Object} tinCobro Objeto json con la estructura e información de la transacción.
 * @apiParamExample {Json} Request-Example:
 * {
 *    "tinCobro": {
 *       "celularOrigen": 3181234567,
         "celularDestino": 3001234567,
         "fingerprintId": 2,
         "monto": 1000,
         "mensaje": "Los 10mil del almuerzo xD",
         "numCuenta": 12345678,
         "tipoCuenta": "A",
         "numIdentificacion": 1022345678,
         "tipoIdenticacion": 1,
         "fechaTransaccion": "2020-04-27T20:42:38.933Z"
       }
 * }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     "Solicitud de cobro creada"
 * @apiUse BadRequestError
 * @apiUse InvalidFormatCelular
 * @apiUse PersistenceError
 */

 /**x. Aceptar TIN de solicitud de cobro
  * @apiIgnore Caso de uso no implementado
  * @apiGroup TransaccionesController
  * @api {patch} /transacciones/cobros/:id?action=aceptar x. Aceptar TIN de cobro
  * @apiDescription Petición para actualizar el estado de una TIN de solicitud de cobro a "aceptado".
  * @apiVersion 1.0.0
  * @apiName actualizarTransaccionDeCobroAAceptado
  * @apiPermission App
  * @apiParam {Number} id Id del fingerprint registrado y asociado a la transacción por la app.
  * @apiParam {Json} tinAbono Objeto Json con la información de la transacción.
  * @apiParamExample {Json} Request-Example:
  * /transacciones/cobros/1234567?action=aceptar
  * @apiParamExample {Json} Request-Example:
  * {
  *    "tinAbono": {
  *       "celular": 0,
          "TRN": -1,
          "fingerprintId": 0,
          "monto": 0,
          "numCuenta": 0,
          "numIdentificacion": 0,
          "tipoIdent": 0
        }
  * }
  * @apiError UserNotFound The <code>id</code> of the User was not found.
  * @apiError name Nombre del tipo de excepción
  * @apiError message Mensaje de error emitido desde el back-end
  * @apiUse PersistenceError
  * @apiErrorExample (400) Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
  *       name:	"InvalidFormatException",
  *       code:	"400",
  *       message:	"Formato de recurso incorrecto"
  *     }
  * @apiErrorExample (404) Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       name:	"NotFoundException",
  *       code:	"404",
  *       message:	"La transacción no fue encontrada"
  *     }
  */

 /**6. Rechazar TIN de solicitud cobro
   * @apiGroup TransaccionesController
   * @api {patch} /transacciones/cobros/rechazados/:CUS?celular= 6. Rechazar TIN de solicitud cobro
   * @apiDescription Petición para actualizar el estado de una TIN de cobro a "rechazado".
   * @apiVersion 1.0.0
   * @apiName actualizarTransaccionDeCobroARechazado
   * @apiPermission App
   * @apiParam {Number} :CUS Código único de seguimiento (id transacción de ACH).
   * @apiParam {Number} celular Número de celular del usuario autenticado en la APP.
   * @apiParamExample {Json} Request-Example:
   * /transacciones/cobros/rechazados/1234567?celular=3001234567
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     "Cobro rechazado"
   * @apiUse BadRequestError
   * @apiUse InvalidFormatCelular
   * @apiUse PersistenceError
 */

 /**7. Debitar de cuenta
 * @apiGroup TransaccionesController
 * @api {post} /transacciones/debitos 7. Debitar de cuenta
 * @apiDescription Petición para formalizar el debito por parte del core (Switch) en los casos de:
 * - <code>Envío de dinero</code> del cliente de BFCO a un tercero
 * - Un <code>cobro aceptado por parte del cliente de BFCO</code>
 * @apiVersion 1.0.0
 * @apiName debitarDeCuenta
 * @apiPermission Switch
 * @apiParam {Object} tinDebito Objeto json con los datos de la transacción.
 * @apiParam {Number} tinDebito.TRN Transaction reference number (id transacción de flex).
 * @apiParam {Number} tinDebito.CUS Código único de seguimiento es (id transacción de ACH). <br/><br/>De acuerdo al valor recibido este es el comportamiento:
 * - <code>-1</code>: Indica que la TIN es de <strong>Envío de dinero</strong>.
 * - <code>CUS válido</code>: Indica que es un <strong>Cobro de dinero aceptado</strong> por el cliente.
 * @apiParam {Number} tinDebito.fingerprintId Es el id del fingerprint registrado previamente por la App y asociado a la transacción.
 * @apiParamExample {Json} EnviarDinero-Example:
 * {
 * "tinDebito": {
 *   "TRN": 12345678,
 *   "CUS": -1,
 *   "fingerprintId": "fpt000011",
 *   "celularOrigen": 3181234567,
 *   "celularDestino": 30017654321,
 *   "monto": 1000,
 *   "numCuentaDebito": 7654321,
 *   "tipoCuentaDebito": "A",
 *   "numIdentificacion": 1022345678,
 *   "tipoIdentificacion": 1,
 *   "fechaTransaccion":"2020-04-27T20:42:38.933Z"
 *   }
 * }
 * @apiParamExample {Json} AceptarCobro-Example:
 * {
 * "tinDebito": {
 *   "TRN": 12345678,
 *   "CUS": 87654321,
 *   "fingerprintId": "fpt000012",
 *   "celularOrigen": 3181234567,
 *   "celularDestino": 30017654321,
 *   "monto": 1000,
 *   "numCuentaDebito": 7654321,
 *   "tipoCuentaDebito": "A",
 *   "numIdentificacion": 1022345678,
 *   "tipoIdentificacion": 1,
 *   "fechaTransaccion":"2020-04-27T20:42:38.933Z"
 *   }
 * }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     "Debito realizado"
 * @apiUse BadRequestError
 * @apiUse PersistenceError
 */
