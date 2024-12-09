let currentSlide = 0;

function moveSlide(direction) {
    const sliderImages = document.querySelector('.slider-images');
    const slides = sliderImages.children;
    const totalSlides = slides.length;

    currentSlide += direction;

    // Loop back to the start or end
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Adjust transform to show the correct slide
    sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}
