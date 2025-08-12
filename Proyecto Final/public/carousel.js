document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.getElementById('proximosPartidosCarousel');
    if (myCarousel) {
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 4000 // Puedes ajustar el tiempo de intervalo
        });
    }
});