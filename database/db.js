const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'modulocompra'
});

conexion.connect((error) => {
  if (error) {
    console.error('Error encontrado:'+ error);
    return;
  }
  console.log('Conectado a la base de datos modulocompra');
})


module.exports = conexion;
