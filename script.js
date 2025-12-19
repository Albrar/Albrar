let photoIndex = 0;
const slides = document.querySelectorAll('.photo-slide');
const dots = document.querySelectorAll('.dot');

function showPhoto(n) {
    // Reset semua slide
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    photoIndex = n;

    if (photoIndex >= slides.length) photoIndex = 0;
    if (photoIndex < 0) photoIndex = slides.length - 1;

    slides[photoIndex].classList.add('active');
    dots[photoIndex].classList.add('active');
}

function changePhoto(n) {
    showPhoto(photoIndex + n);
}

function currentPhoto(n) {
    showPhoto(n);
}

// Otomatis ganti foto setiap 5 detik (opsional)
setInterval(() => {
    changePhoto(1);
}, 5000);
