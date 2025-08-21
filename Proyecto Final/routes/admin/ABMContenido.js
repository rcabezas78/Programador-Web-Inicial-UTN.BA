var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var isLoggedIn = require('../../middleware/auth');
var contenidoModel = require('../../models/contenidoModel');


// ✅ Configuración de Multer para el almacenamiento de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });


// ✅ Aplica el middleware de autenticación a todas las rutas
router.use(isLoggedIn);


// ✅ Ruta GET para la página principal del ABM
router.get('/', async function(req, res, next) {
    try {
        let contenido = await contenidoModel.getContenido();
        res.render('admin/ABMContenido', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            contenido: contenido,
            // Pasa el mensaje de error de la URL a la vista
            error: req.query.error,
            message: req.query.message
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al cargar la página de contenido');
    }
});


// ✅ Ruta GET para el formulario de agregar
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});


// ✅ Ruta POST para agregar nuevo contenido y procesar el archivo
router.post('/agregar', upload.single('imagen'), async (req, res, next) => {
    try {
        if (!req.body.evento || !req.body.descripcion || !req.body.categorias) {
            // ✅ En caso de error de validación, renderiza la vista con el error
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            });
            return;
        }

        // ✅ Construye el objeto completo con los datos del formulario y del archivo
        const obj = {
            evento: req.body.evento, 
            descripcion: req.body.descripcion,
            categorias: req.body.categorias,
            //imagen: req.file ? `/images/uploads/${req.file.filename}` : null,
            nombreArchivo: req.file ? req.file.filename : null,
            tipoContenido: req.file ? req.file.mimetype : null,
            fechaSubida: new Date()
        };

        await contenidoModel.insertContenido(obj);
        
        // Redirige al usuario después de un guardado exitoso
        res.redirect('/admin/ABMContenido');
        
    } catch (error) {
        console.log(error);
        // ✅ En caso de error en el servidor, renderiza la vista con el error
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se pudo cargar el contenido.'
        });
    }
});


// ✅ Rutas de eliminar y modificar
router.get('/eliminar/:id', async function (req, res, next) {
    const id = req.params.id;
    await contenidoModel.deleteContenidoById(id);
    res.redirect('/admin/ABMContenido');
});

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let contenido = await contenidoModel.getContenidoById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        contenido
    });
});

// router.post('/modificar', async (req, res, next) => {
//     try {
//         let obj = {
//             titulo: req.body.titulo,
//             subtitulo: req.body.subtitulo,
//             cuerpo: req.body.cuerpo
//         };
//         await contenidoModel.modificarContenidoById(obj, req.body.id);
//         res.redirect('/admin/ABMContenido');
//     } catch (error) {
//         console.log(error);
//         res.render('admin/modificar', {
//             layout: 'admin/layout',
//             error: true,
//             message: 'No se modificó el contenido'
//         });
//     }
// });


module.exports = router;