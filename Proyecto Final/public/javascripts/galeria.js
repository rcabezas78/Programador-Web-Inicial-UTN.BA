document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const eventGroups = document.querySelectorAll('.gallery-event-group'); // 👈 Agrega esta línea

    // Muestra todos los títulos y fotos al cargar la página
    eventGroups.forEach(group => {
        group.style.display = 'block';
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Elimina la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añade la clase 'active' al botón que se hizo clic
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Lógica para ocultar/mostrar los grupos de eventos
            eventGroups.forEach(group => {
                if (filterValue === 'all') {
                    group.style.display = 'block';
                } else {
                    if (group.id === filterValue) {
                        group.style.display = 'block';
                    } else {
                        group.style.display = 'none';
                    }
                }
            });

            // Lógica para ocultar/mostrar las fotos individuales
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (filterValue === 'all') {
                    item.style.display = 'block'; 
                } else {
                    if (itemCategory === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});

// El código para la tecla 'Esc' que ya tienes
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" || event.keyCode === 27) {
        if (typeof lightbox !== 'undefined') {
            lightbox.end();
        }
    }
});