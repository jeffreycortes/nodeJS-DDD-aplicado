//Storage
const path = require('path')
    ,fs = require('fs');

const  dataPath = path.join(__dirname, '/storage/usuarios-storage.json');

const UsuariosRepository = {
  getTransaccionesPendientes: (params) => {
    const dataPath = path.join(__dirname, '/storage/usuarios-storage.json');

    return new Promise((resolve, reject) => {
       fs.readFile(dataPath, 'utf8', (err, readData) => {
         if(err) reject(err);

         if (params.tipo == 'global')
          resolve(JSON.parse(readData).transaccionesPendientes);
         else {
           const transacciones = JSON.parse(readData).transaccionesPendientes;
           transacciones.data = transacciones.data.filter(x => x.tipoTransaccion == params.tipo);
           transacciones.cantidadTotal = transacciones.data.length;

           resolve(transacciones);
         }
       });
     });
  },
  getHistorialTransacciones: (params) => {
    return new Promise((resolve, reject) => {
       fs.readFile(dataPath, 'utf8', (err, readData) => {
         if(err) reject(err);

         if (params.tipo == 'global')
          resolve(JSON.parse(readData).historialTransacciones);
         else {
           const transacciones = JSON.parse(readData).historialTransacciones;
           transacciones.data = transacciones.data.filter(x => x.tipoTransaccion == params.tipo);
           transacciones.cantidadTotal = transacciones.data.length;

           resolve(transacciones);
         }
       });
     });
  },
  getContactosDeConfianza: (params) => {
    return new Promise((resolve, reject) => {
       fs.readFile(dataPath, 'utf8', (err, readData) => {
         if(err) reject(err);

         resolve(JSON.parse(readData).contactosDeConfianza);
       });
     });
   },
  getContactoDeConfianza: async (celularContactoDeConfianza) => {
    return new Promise((resolve, reject) => {
       fs.readFile(dataPath, 'utf8', (err, readData) => {
         if(err) reject(err);

         let usuariosStorage = JSON.parse(readData);
         const {contactosDeConfianza} = usuariosStorage;
         const contactoDeConfianza = contactosDeConfianza.data.filter(
           celularContactoActual => celularContactoActual == celularContactoDeConfianza);

         resolve(contactoDeConfianza);
       })
     });
  },
  insertContactoDeConfianza: async (celular) => {
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

         contactosDeConfianza.data.push(celular);
         contactosDeConfianza.cantidadTotal = contactosDeConfianza.data.length;

         usuariosStorage.contactosDeConfianza = contactosDeConfianza;
         guardar(usuariosStorage);

         resolve('Contacto registrado');
       })
     });
  },
  deleteContactoDeConfianza: async (celular) => {
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

         resolve('Contacto(s) eliminado(s)');
       })
     });
  }
}

module.exports = UsuariosRepository;
