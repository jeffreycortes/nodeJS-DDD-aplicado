const path = require('path')
    ,fs = require('fs');

const  dataPath = path.join(__dirname, '/storage/limites-storage.json');

const LimitesRepository = {
  getLimites: async () => {
    return new Promise((resolve, reject) => {
       fs.readFile(dataPath, 'utf8', (err, readData) => {
         if(err) reject(err);

         let limitesStorage = JSON.parse(readData);
         const {limites} = limitesStorage;

         resolve(limites);
       })
     });
  }
}

module.exports = LimitesRepository;
