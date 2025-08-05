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

//insertar novedades
async function insertNovedad(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    } // cierra catch
} // cierra insert

// traigo los datos para modificar una sola novedad
async function getNovedadById(id) {
    var query = "select * from novedades where id= ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

//  router.get('/modificar/:id', async (req, res, next) => {
//      let id = req.params.id;
//      let novedad = await novedadesModel.getNovedadById(id);
//      res.render('admin/modificar', {
//          layout: 'admin/layout',
//          novedad
//      });
//  });

//actualización novedades
async function modificarNovedadById(obj, id) {
    try {
        var query = "update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    } // cierra catch
} // cierra insert

module.exports = { getNovedades, deleteNovedadesById, insertNovedad, getNovedadById, modificarNovedadById };

