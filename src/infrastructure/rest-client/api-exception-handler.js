const ExceptionsRepository = require('../repositories/exceptions-repository');
const UncontrolledException = require('../../aplication/exceptions/uncontrolled-exception');

const exceptionHandler = async (error) => {
  const nameGenericError = 'Error';
  const {code, message, name} = error;

  if (code && name != nameGenericError)
    return {code, message, name};
  else {
    const logExceptionId = await ExceptionsRepository.insertException(message);

    return new UncontrolledException(logExceptionId);
  }
}

module.exports = exceptionHandler;
