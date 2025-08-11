var express = require('express');
var router = express.Router();

// Importa el modelo si es necesario
// var partidosModel = require('../../models/partidosModel'); 

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    // Carga los partidos desde tu base de datos o usa el array de ejemplo
    // let partidos = await partidosModel.getPartidos(); 

    let partidos = [
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
    ];

    // Asegúrate de que la vista se llama 'principal'
    res.render('admin/principal', { 
      layout: 'layout', // Usa el layout correcto para la página principal
      partidos: partidos 
    });

  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar la página principal');
  }
});

module.exports = router;