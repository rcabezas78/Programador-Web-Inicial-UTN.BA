var express = require('express');
var router = express.Router();

var novedadesModel = require('../../models/novedadesModel');

/* Diseño de la vista de novedades */
router.get('/', async function (req, res, next) {
    try {
        var novedades = await novedadesModel.getNovedades();
        res.render('admin/novedades', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            novedades
        });
    } catch (error) {
        console.log(error);
        // Maneja el error, por ejemplo, mostrando una página de error
        res.render('admin/novedades', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            error: true,
            message: 'No se pudieron cargar las novedades.'
        });
    }
});

/* Ruta GET para el formulario de agregar */
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

/* Envía los datos de la novedad */
router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargó la novedad'
        });
    }
});

/* Ruta GET para el formulario de modificar y cargar los datos */
router.get('/modificar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;
        // La línea corregida: se reemplaza el guion por un punto
        var novedad = await novedadesModel.getNovedadById(id);
        
        res.render('admin/modificar', {
            layout: 'admin/layout',
            novedad
        });
    } catch (error) {
        console.log(error);
        res.render('admin/novedades', {
            layout: 'admin/layout',
            error: true,
            message: 'No se pudo cargar la novedad a modificar.'
        });
    }
});

/* Ruta POST para modificar la novedad */
router.post('/modificar', async (req, res, next) => {
    try {
        let obj = req.body;
        
        // La consulta a la base de datos para la actualización
        await novedadesModel.modificarNovedadById(obj, obj.id);

        res.redirect('/admin/novedades');

    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se pudo modificar la novedad'
        });
    }
});

/* Eliminar novedad */
router.get('/eliminar/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        await novedadesModel.deleteNovedadesById(id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error);
        res.redirect('/admin/novedades');
    }
});

module.exports = router;