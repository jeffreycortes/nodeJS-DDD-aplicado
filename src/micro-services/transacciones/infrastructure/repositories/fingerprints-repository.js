const path = require('path')
    ,fs = require('fs');

const  dataPath = path.join(__dirname, '../storage/fingerprints-storage.json');

const FingerprintsRepository = {
  insertFingerprint: async (celular, fingerprint) => {
    return new Promise((resolve, reject) => {
      const guardar = (fingerprintsStorage) => {
          fs.writeFile(dataPath, JSON.stringify(fingerprintsStorage, null, 2), (err) => {
            if(err) throw err;
          });
      };

       fs.readFile(dataPath, 'utf8', (err, readData) => {
         if(err) reject(err);

         let fingerprintsStorage = JSON.parse(readData);
         const {fingerprints} = fingerprintsStorage;

         fingerprints.push({hashId: fingerprint.FPD.ID, celular, fingerprint});
         fingerprintsStorage.fingerprints = fingerprints;
         guardar(fingerprintsStorage);

         resolve({ fingerprintId: fingerprints.length });
       })
     });
   },
  getFingerprint: async (fingerprintId, celular) => {
    return new Promise((resolve, reject) => {
      const fingerprintDefault = {};

       fs.readFile(dataPath, 'utf8', (err, readData) => {
         if(err) reject(err);

         let fingerprintsStorage = JSON.parse(readData);
         const {fingerprints} = fingerprintsStorage;
         const fingerprint = fingerprints[fingerprintId]  || fingerprintDefault;
         const esElEsperado = fingerprint.celular == celular;

         resolve(esElEsperado ? fingerprint : fingerprintDefault);
       })
     });
  }
}

module.exports = FingerprintsRepository;
