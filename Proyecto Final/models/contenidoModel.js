var pool = require('./bd');

//listar contenido
async function getContenido() {
    try {
        var query = 'select * from galeria order by fechaSubida desc'; // ✅ Corregir el nombre de la columna
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        throw error;
    }
}

    //borrar contenido
    async function deleteContenidoById(id) {
        // try {
        var query = 'delete from galeria where id=?';
        var rows = await pool.query(query, [id]);
        return rows;
    }

    //insertar contenido
    // async function insertContenido(obj) {
    //     try {
    //         var query = "insert into galeria set ?";
    //         var rows = await pool.query(query, [obj])
    //         return rows;
    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     } // cierra catch
    // } // cierra insert

    // ✅ Función para insertar contenido
async function insertContenido(obj) {
    try {
        // Asegúrate de que esta consulta solo use los nombres de columna correctos de tu base de datos
        var query = "INSERT INTO galeria (evento, descripcion, categorias, nombreArchivo, tipoContenido, fechaSubida) VALUES (?, ?, ?, ?, ?, ?)";
        var rows = await pool.query(query, [obj.evento, obj.descripcion, obj.categorias, obj.nombreArchivo, obj.tipoContenido, obj.fechaSubida]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

    // traigo los datos para modificar un solo contenido
    async function getContenidoById(id) {
        var query = "select * from galeria where id= ?";
        var rows = await pool.query(query, [id]);
        return rows[0];
    }

    //actualización novedades
    async function modificarContenidoById(obj, id) {
        try {
            var query = "update galeria set ? where id=?";
            var rows = await pool.query(query, [obj, id]);
            return rows;
        } catch (error) {
            console.log(error);
            throw error;
        } // cierra catch
    } // cierra insert

    module.exports = { getContenido, deleteContenidoById, insertContenido, getContenidoById, modificarContenidoById };

