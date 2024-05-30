document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.galeria .zdjecia img');

    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.1)';
        });
        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
        });
    });
});
