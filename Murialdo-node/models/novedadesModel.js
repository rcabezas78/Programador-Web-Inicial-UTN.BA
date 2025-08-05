var pool = require('./bd');

//listar novedades
async function getNovedades() {
    // try {
        var query = 'select * from novedades';
        var rows = await pool.query(query); 
        return rows;       
}

//borrar novedades
async function deleteNovedadesById(id) {
    // try {
        var query = 'delete from novedades where id=?';
        var rows = await pool.query(query, [id]); 
        return rows;
}

module.exports = { getNovedades, deleteNovedadesById }