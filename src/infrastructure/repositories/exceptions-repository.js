const path = require('path')
    ,fs = require('fs');

const  dataPath = path.join(__dirname, '../storage/log-exceptions-storage.json');

const ExceptionsRepository = {
  insertException: async (message) => {
    return new Promise((resolve, reject) => {
      const guardar = (logExceptionsStorage) => {
          fs.writeFile(dataPath, JSON.stringify(logExceptionsStorage, null, 2), (err) => {
            if(err) throw err;
          });
      };

      fs.readFile(dataPath, 'utf8', (err, readData) => {
       if(err) reject(err);

       let logExceptionsStorage = JSON.parse(readData);
       const {exceptions} = logExceptionsStorage;
       const logExceptionId = (exceptions.length);

       exceptions.push({id: logExceptionId, message});

       logExceptionsStorage.exceptions = exceptions;
       guardar(logExceptionsStorage);

       resolve(logExceptionId);
      })
    });
   },
  getException: async (logExceptionId) => {
    return new Promise((resolve, reject) => {
       fs.readFile(dataPath, 'utf8', (err, readData) => {
         if(err) reject(err);

         let logExceptionsStorage = JSON.parse(readData);
         const {exceptions} = logExceptionsStorage;
         const exception = exceptions.filter(ex => ex.id == logExceptionId)[0];

         resolve(exception || {});
       })
     });
  }
}

module.exports = ExceptionsRepository;
