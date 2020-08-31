const exceptionHandler = require('./api-exception-handler')

const responseHandler = (callback) => {
  return async (req, res) => {
    try {
      await callback(req, res);
    }
    catch(err) {
      const exception = await exceptionHandler(err);

      res.status(exception.code).json(exception);
    }
  }
}

module.exports = responseHandler;
