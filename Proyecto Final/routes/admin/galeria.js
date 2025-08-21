var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var isLoggedIn = require('../../middleware/auth');
var contenidoModel = require('../../models/contenidoModel');


router.get('/', async function(req, res, next) {
    try {
        let contenido = await contenidoModel.getContenido();

        // Agrupa las imágenes por evento
        const eventos = contenido.reduce((acc, foto) => {
            if (!acc[foto.evento]) {
                acc[foto.evento] = [];
            }
            acc[foto.evento].push(foto);
            return acc;
        }, {});

        // ✅ Corrige esta línea para que apunte a la vista correcta
        res.render('admin/galeria', {
            eventos: eventos
        });
    } catch (error) {
        console.error("Error al cargar la galería:", error);
        res.status(500).send("Error al cargar la galería.");
    }
});

module.exports = router;