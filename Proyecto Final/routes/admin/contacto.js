// routes/admin/contacto.js
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/*
  Esta ruta GET renderiza la vista de contacto para el panel de administración.
  La vista debe existir en views/admin/contacto.hbs
*/
router.get('/', function(req, res, next) {
  res.render('admin/contacto', { 
    layout: 'admin/layout', 
    title: 'Panel de Contacto'
  });
});

/*
  Esta ruta POST procesa el formulario enviado.
  Si el correo se envía con éxito, vuelve a renderizar la vista 'admin/contacto'.
*/
router.post('/', async (req, res, next) => {
  const { nombre, apellido, email, telefono, mensaje } = req.body;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'rcabezas1978@gmail.com',
    subject: 'Nuevo Contacto desde la Web',
    html: `
      <p><b>Nombre:</b> ${nombre} ${apellido}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
      <p><b>Mensaje:</b> ${mensaje}</p>
    `
  };

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado exitosamente: %s', info.messageId);

    // Renderiza la misma vista de contacto, pero con un mensaje de éxito.
    res.render('admin/contacto', {
      layout: 'admin/layout',
      message: '¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.'
    });
  } catch (error) {
    console.error('Error al enviar el correo:', error);

    // Renderiza la vista con un mensaje de error.
    res.render('admin/contacto', {
      layout: 'admin/layout',
      message: 'Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.'
    });
  }
});

module.exports = router;
