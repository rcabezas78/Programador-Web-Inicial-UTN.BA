document.addEventListener("DOMContentLoaded", function() {
    // Datos de los próximos partidos
    const proximosPartidos = [
        {
            equipo1: "Murialdo (Mendoza)",
            equipo2: "Aberastain (San Juan)",
            fecha: "Hoy, 5 de agosto",
            hora: "17:20",
            torneo: "Torneo Argentino Junior"
        },
        {
            equipo1: "Andes Talleres",
            equipo2: "Murialdo",
            fecha: "Mañana, 6 de agosto",
            hora: "13:20",
            torneo: "Torneo Argentino Junior"
        }
    ];

    const partidosList = document.getElementById("partidos-list");

    // Función para crear el HTML de cada partido
    function crearTarjetaPartido(partido) {
        return `
            <div class="col-md-6 mb-4">
                <div class="card h-100 text-center">
                    <div class="card-body">
                        <h5 class="card-title">${partido.equipo1} vs ${partido.equipo2}</h5>
                        <p class="card-text">
                            <strong>Torneo:</strong> ${partido.torneo}<br>
                            <strong>Fecha:</strong> ${partido.fecha}<br>
                            <strong>Hora:</strong> ${partido.hora}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    // Inyectar el HTML de los partidos en la página
    if (partidosList) {
        proximosPartidos.forEach(partido => {
            partidosList.innerHTML += crearTarjetaPartido(partido);
        });
    }
});