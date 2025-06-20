// var nodemailer = require("nodemailer");
// router.post('/', async (req, res, next) => {
//     var nombre = req.nombre;
//     var apellido = req.apellido;
//     var email = req.email;
//     var telefono = req.telefono;
//     var mensaje = req.mensaje;

//     var obj = {
//         to: 'rcabezas1978@gmail.com',
//         subject: 'Contacto Web',
//         html: nombre + "se contacto a través de la web y solicita mas información a este correo: " + email + "." < br > "Además hizo este comentario: " + mensaje + "." < br > "Su teléfono es: " + telefono
//     }

//     var transport = nodemailer.createTransport({
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         auth: {
//             user: process.env.SMTP_USER,
//             pass: process.env.SMTP_PASS,
//         }
//     });

//     var info = await transport.sendMail(obj);

//     res.render('contacto', {
//         message: 'Mensaje enviado correctamente'
//     });
// });
