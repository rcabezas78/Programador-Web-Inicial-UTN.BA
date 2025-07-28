// var pool = require('./bd');
// var md5 = require('md5');

// async function getUserAndPassword(user,password) {
//     try{
//         var query= 'select * from usuarios where usuario =? and password =? limit 1';
//         var rows = await pool.query(query, [user, md5(password)]);
//         return rows[0];

//     } catch (error){
//         console.log(error)
//     }    
// }

// module.exports = {getUserAndPassword}

var pool = require('./bd');
var md5 = require('md5');

async function getUserAndPassword(user, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]); // Correctamente usa 'rows'

        // Verifica si se devolvió alguna fila antes de intentar acceder a rows[0]
        if (rows.length > 0) {
            return rows[0]; // <-- CORREGIDO: Cambiado 'row' a 'rows'
        } else {
            return null; // Devuelve null si no se encuentra ningún usuario, haciéndolo explícito
        }

    } catch (error) {
        console.log(error);
        return null; // Devuelve null en caso de error para que la función que llama sepa que la autenticación falló
    }
}

module.exports = { getUserAndPassword }