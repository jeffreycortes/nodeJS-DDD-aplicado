const path = require('path')
    ,fs = require('fs');

const  dataPath = path.join(__dirname, '../storage/fingerprints-storage.json');

const TransaccionesRepository = {
  insertTransaccion: async (params) => {
    return new Promise((resolve, reject) => {
      const guardar = (usuariosStorage) => {
          fs.writeFile(dataPath, JSON.stringify(usuariosStorage, null, 2), (err) => {
            if(err) throw err;
          });
      };

       fs.readFile(dataPath, 'utf8', (err, readData) => {
         if(err) reject(err);

         let usuariosStorage = JSON.parse(readData);
         const {contactosDeConfianza} = usuariosStorage;

         const indice = contactosDeConfianza.data.indexOf(celular);
         contactosDeConfianza.data.splice(indice, 1);

         contactosDeConfianza.cantidadTotal = contactosDeConfianza.data.length;

         usuariosStorage.contactosDeConfianza = contactosDeConfianza;
         guardar(usuariosStorage);

         resolve({ msg: 'Ok' });
       })
     });
  },
  updateEstadoTransacion:async (params) => {
    return new Promise((resolve, reject) => {
      const guardar = (usuariosStorage) => {
          fs.writeFile(dataPath, JSON.stringify(usuariosStorage, null, 2), (err) => {
            if(err) throw err;
          });
      };

       fs.readFile(dataPath, 'utf8', (err, readData) => {
         if(err) reject(err);

         let usuariosStorage = JSON.parse(readData);
         const {contactosDeConfianza} = usuariosStorage;

         const indice = contactosDeConfianza.data.indexOf(celular);
         contactosDeConfianza.data.splice(indice, 1);

         contactosDeConfianza.cantidadTotal = contactosDeConfianza.data.length;

         usuariosStorage.contactosDeConfianza = contactosDeConfianza;
         guardar(usuariosStorage);

         resolve({ msg: 'Ok' });
       })
     });
  }
}

module.exports = TransaccionesRepository;
