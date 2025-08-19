var express = require('express');
var router = express.Router();

/*declaramos la libreria nodemailer que vamos a utilizar*/
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  // Asegúrate de que la vista exista en views/admin/index.hbs
  res.render('admin/contacto', { 
    layout: 'admin/layout', 
    title: 'Panel de Administración'
  });
});

// Esta ruta maneja el envío del formulario cuando se hace un POST a la raíz '/'
router.post('/', async (req, res, next) => {
  // 1. Capturar los datos del formulario (gracias a express.urlencoded en app.js)
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;

  console.log(req.body); // Esto es útil para depurar y ver si los datos llegan correctamente

  // 2. Construir el objeto del correo electrónico
  var obj = {
    to: 'rcabezas1978@gmail.com', // El correo al que se enviará el mensaje
    subject: 'Contacto Web', // Asunto del correo

    // --- ¡ERROR DE SINTAXIS CORREGIDO AQUÍ! ---
    // Usamos "template literals" (comillas `backticks`) para insertar variables
    // y para incluir etiquetas HTML como <br> directamente en la cadena.
    html: `${nombre} ${apellido} se contactó a través de la web y solicita más información a este correo: ${email}.<br>Además hizo este comentario: ${mensaje}.<br>Su teléfono es: ${telefono}`
  };

  // 3. Crear el transportador de Nodemailer
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Asegúrate de que estas variables de entorno estén configuradas
    port: process.env.SMTP_PORT, // Ver la sección de Variables de Entorno abajo
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // 4. Enviar el correo electrónico
  // --- ¡Manejo de Errores con try...catch es CRÍTICO para operaciones asíncronas! ---
  // Sin un bloque try...catch, si sendMail falla, tu aplicación se caerá.
  try {
    var info = await transport.sendMail(obj);
    console.log('Mensaje enviado: %s', info.messageId); // Confirma el envío en la consola del servidor

    // 5. Renderizar la página de nuevo con un mensaje de éxito
    res.render('index', {
      message: 'Mensaje enviado correctamente' // Este mensaje se pasará a tu plantilla 'index'
    });
  } catch (error) {
    // 6. Manejo de errores en caso de que el envío falle
    console.error('Error al enviar el correo:', error); // Imprime el error en la consola del servidor

    // Puedes pasar un mensaje de error a la plantilla para que el usuario sepa que algo salió mal
    res.render('index', {
      message: 'Error al enviar el mensaje. Por favor, intente de nuevo más tarde.'
    });
    // Opcional: Podrías llamar a next(error) para que un middleware de manejo de errores global lo procese.
    // next(error);
  }
});

module.exports = router;
