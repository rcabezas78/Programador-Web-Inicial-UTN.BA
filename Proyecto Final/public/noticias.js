document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('#ultimas-noticias .card-noticia');

    cards.forEach(card => {
        const cardTextContent = card.querySelector('.card-text-content');
        const leerMasBtn = card.querySelector('.leer-mas');
        const cardTextParagraph = card.querySelector('.card-text-paragraph');
        let isExpanded = false;

        if (cardTextParagraph.scrollHeight > cardTextContent.clientHeight) {
            leerMasBtn.classList.remove('d-none');
        }

        leerMasBtn.addEventListener('click', function(e) {
            e.preventDefault();
            isExpanded = !isExpanded; // Cambia el estado

            if (isExpanded) {
                card.classList.add('expanded');
                leerMasBtn.textContent = 'Leer menos';
            } else {
                card.classList.remove('expanded');
                leerMasBtn.textContent = 'Leer más';
            }
        });
    });
});
