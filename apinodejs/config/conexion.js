const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'curso',
    port: '3306',
    database: 'tfg'
});
conexion.connect(function (error) {
    if (error) {
        console.log('Error en la conexion con la DB');
        return;
    }
    console.log('Conexion realizada a la DB');
});
module.exports = conexion;