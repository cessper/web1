document.addEventListener('DOMContentLoaded', () => {
  const carouselTrack = document.querySelector('.carousel-track');
  const slides = Array.from(carouselTrack.children);
  const nextButton = document.querySelector('.next-btn');
  const prevButton = document.querySelector('.prev-btn');
  const slideWidth = slides[0].getBoundingClientRect().width;

  let slideIndex = 0;

  // Actualizar la posición del carrusel
  const updateCarousel = () => {
    carouselTrack.style.transform = 'translateX(-' + slideIndex * slideWidth + 'px)';
  };

  // Botón Siguiente
  nextButton.addEventListener('click', () => {
    if (slideIndex < slides.length - 1) {
      slideIndex++;
    } else {
      slideIndex = 0; // Vuelve al inicio
    }
    updateCarousel();
  });

  // Botón Anterior
  prevButton.addEventListener('click', () => {
    if (slideIndex > 0) {
      slideIndex--;
    } else {
      slideIndex = slides.length - 1; // Vuelve al final
    }
    updateCarousel();
  });
});