/**1. Obtener limites
 * @apiGroup LimitesController
 * @api {get} /limites 1. Obtener limites
 * @apiDescription  Petición para obtener los limites vigentes para TIN
 * @apiVersion 1.0.0
 * @apiName Limites
 * @apiSuccess (200) {Number} montoMaximo Establece el limite de monto de dinero que puede ser enviado por TIN
 * @apiSuccess (200) {Number} cantidadMaximaTrx Corresponde
 * a la cantidad máxima de transacciones de TIN que un usuario puede realizar en el día
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "montoMaximo": "250000",
 *       "cantidadMaximaTrx": "5"
 *     }
 */
