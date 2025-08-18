// Este middleware verifica si el usuario está autenticado
function isLoggedIn(req, res, next) {
    // Revisa si la sesión tiene una variable 'id_usuario'
    if (req.session.id_usuario) {
        // Si el usuario está logueado, permite que la solicitud continúe
        next();
    } else {
        // Si no está logueado, lo redirige a la página de login
        res.redirect('/admin/login');
    }
}

module.exports = isLoggedIn;