var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var isLoggedIn = require('../../middleware/auth'); // Ruta al middleware

// ✅ Aplica el middleware a TODAS las rutas de este router.
// La función isLoggedIn se ejecutará para cada solicitud que llegue a este router.
router.use(isLoggedIn);

// Las rutas siguientes ya están protegidas y NO necesitan el middleware en su firma.
router.get('/', async function(req, res, next) {
    try {
        let novedades = await novedadesModel.getNovedades();
        res.render('admin/novedades', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            novedades: novedades
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al cargar la página de novedades');
    }
});

/* Eliminar novedad */
router.get('/eliminar/:id', async function (req, res, next) {
    const id = req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');
});

/* Agregar novedad */
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

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
            message: 'No se cargo la novedad'
        });
    }
});

/* Modificar novedad */
router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    });
});

router.post('/modificar', async (req, res, next) => {
    try {
        let obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        };
        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico la novedad'
        });
    }
});


module.exports = router;