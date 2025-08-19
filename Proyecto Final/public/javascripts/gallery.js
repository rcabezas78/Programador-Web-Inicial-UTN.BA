// public/javascripts/gallery.js

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Quita la clase de color personalizada de todos los botones
            filterButtons.forEach(btn => {
                btn.classList.remove('btn-active-custom');
            });

            // Agrega la clase de color personalizada al botón que se hizo clic
            button.classList.add('btn-active-custom');

            // Muestra u oculta las imágenes según el filtro
            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});