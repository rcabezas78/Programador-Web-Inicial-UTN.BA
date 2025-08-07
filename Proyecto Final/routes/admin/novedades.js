var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

// /* Diseño */
 router.get('/', async function(req, res, next) {
     try {
         let novedades = await novedadesModel.getNovedades();
        
//         // Simulación de los 14 partidos con datos completos
         let partidos = [
             //{ torneo: 'LIGA PROFESIONAL ARGENTINA', equipoLocal: 'INDEPENDIENTE', equipoVisitante: 'RIVER', logoLocal: 'independiente.png', logoVisitante: 'River.png', fecha: '09/08', hora: '18:30' },
             { torneo: 'ESCUELA', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '12:00' },
             { torneo: 'PROMO', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '13:00' },
             { torneo: 'PREMINI', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '14:00' },
             { torneo: 'MINI', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '15:00' },
             { torneo: 'PREINFANTIL', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '16:00' },
             { torneo: 'INFANTIL', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '17:00' },
             { torneo: 'PRECADETE', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '18:00' },
             { torneo: 'CADETE', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '19:00' },
             { torneo: 'PREJUVENIL', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '12:00' },
             { torneo: 'JUVENIL', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '12:00' },
             { torneo: 'PREJUNIOR', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '12:00' },
             { torneo: 'JUNIOR', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '12:00' },
             { torneo: 'RESERVA', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '12:00' },
             { torneo: 'SENIOR', equipoLocal: 'MURIALDO', equipoVisitante: 'GUAYMALLEN', logoLocal: 'Murialdo.png', logoVisitante: 'Guaymallen.png', fecha: '09/08', hora: '12:00' },
             // { torneo: 'CONMEBOL LIBERTADORES', equipoLocal: 'RIVER', equipoVisitante: 'LIBERTAD', logoLocal: 'River.png', logoVisitante: 'Libertad.png', fecha: '14/08', hora: '21:30' },
             // { torneo: 'LIGA PROFESIONAL ARGENTINA', equipoLocal: 'RIVER', equipoVisitante: 'GODOY CRUZ', logoLocal: 'River.png', logoVisitante: 'GodoyCruz.png', fecha: '17/08', hora: '21:30' },
             // { torneo: 'AMISTOSO', equipoLocal: 'LANUS', equipoVisitante: 'BOCA JRS', logoLocal: 'Lanus.png', logoVisitante: 'Boca.png', fecha: '24/08', hora: '15:00' },
             // { torneo: 'LIGA PROFESIONAL ARGENTINA', equipoLocal: 'VELEZ', equipoVisitante: 'RIVER', logoLocal: 'velez.png', logoVisitante: 'River.png', fecha: '28/08', hora: '20:00' },
             // { torneo: 'CONMEBOL LIBERTADORES', equipoLocal: 'FLUMINENSE', equipoVisitante: 'RIVER', logoLocal: 'fluminense.png', logoVisitante: 'River.png', fecha: '03/09', hora: '21:30' },
             // { torneo: 'LIGA PROFESIONAL ARGENTINA', equipoLocal: 'RIVER', equipoVisitante: 'BELGRANO', logoLocal: 'River.png', logoVisitante: 'belgrano.png', fecha: '07/09', hora: '17:00' },
             // { torneo: 'COPA ARGENTINA', equipoLocal: 'RIVER', equipoVisitante: 'DEFENSA', logoLocal: 'River.png', logoVisitante: 'defensa.png', fecha: '12/09', hora: '20:00' },
             // { torneo: 'LIGA PROFESIONAL ARGENTINA', equipoLocal: 'RACING', equipoVisitante: 'RIVER', logoLocal: 'racing.png', logoVisitante: 'River.png', fecha: '16/09', hora: '19:00' },
             // { torneo: 'CONMEBOL LIBERTADORES', equipoLocal: 'RIVER', equipoVisitante: 'PALMEIRAS', logoLocal: 'River.png', logoVisitante: 'palmeiras.png', fecha: '20/09', hora: '21:30' },
             // { torneo: 'AMISTOSO', equipoLocal: 'RIVER', equipoVisitante: 'SELECCION ARG', logoLocal: 'River.png', logoVisitante: 'seleccion.png', fecha: '25/09', hora: '18:00' },
             // { torneo: 'LIGA PROFESIONAL ARGENTINA', equipoLocal: 'TIGRE', equipoVisitante: 'RIVER', logoLocal: 'tigre.png', logoVisitante: 'River.png', fecha: '29/09', hora: '17:00' },
             // { torneo: 'LIGA PROFESIONAL ARGENTINA', equipoLocal: 'RIVER', equipoVisitante: 'BOCA JRS', logoLocal: 'River.png', logoVisitante: 'Boca.png', fecha: '05/10', hora: '21:30' },
             // { torneo: 'CONMEBOL LIBERTADORES', equipoLocal: 'RIVER', equipoVisitante: 'FLUMINENSE', logoLocal: 'River.png', logoVisitante: 'fluminense.png', fecha: '10/10', hora: '21:30' }
         ];

         res.render('admin/novedades', {
             layout: 'admin/layout',
             novedades: novedades,
             partidos: partidos // <-- Ahora el carrusel recibirá este array
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