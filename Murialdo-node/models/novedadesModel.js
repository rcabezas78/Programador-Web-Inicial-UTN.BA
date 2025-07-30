var pool = require('./bd');

//listar novedades
async function getNovedades() {
    // try {
        var query = 'select * from novedades';
        var rows = await pool.query(query); 
        return rows;
        // // Verifica si se devolvió alguna fila antes de intentar acceder a rows[0]
        // if (rows.length > 0) {
        //     return rows[0]; 
        // } else {
        //     return null; // Devuelve null si no se encuentra ningún usuario, haciéndolo explícito
        // }

    // } catch (error) {
    //     console.log(error);
    //     return null; // Devuelve null en caso de error para que la función que llama sepa que la autenticación falló
    // }
}

//borrar novedades
async function deleteNovedadesById(id) {
    // try {
        var query = 'delete from novedades where id=?';
        var rows = await pool.query(query, [id]); 
        return rows;
}

module.exports = { getNovedades, deleteNovedadesById }