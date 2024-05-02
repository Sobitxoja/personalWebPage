document.addEventListener('DOMContentLoaded', function() {
  fetch('gallery.json')
      .then(response => response.json())
      .then(images => {
          const slidesContainer = document.getElementById('carousel-slides');
          const indicatorsContainer = document.getElementById('carousel-indicators');
          let currentSlide = 0;

          // Create slides and indicators
          images.forEach((image, index) => {
              slidesContainer.innerHTML += `
                  <div class="slide" style="background-image: url('${image.image}');">
                      <div class="caption">${image.caption}</div>
                  </div>
              `;
              indicatorsContainer.innerHTML += `<span class="indicator" data-slide="${index}"></span>`;
          });

          const slides = document.querySelectorAll('.slide');
          const indicators = document.querySelectorAll('.indicator');

          function updateCarousel() {
              slides.forEach(slide => slide.classList.remove('active'));
              indicators.forEach(ind => ind.classList.remove('active'));

              slides[currentSlide].classList.add('active');
              indicators[currentSlide].classList.add('active');
          }

          document.getElementById('next').addEventListener('click', () => {
              currentSlide = (currentSlide + 1) % slides.length;
              updateCarousel();
          });

          document.getElementById('prev').addEventListener('click', () => {
              currentSlide = (currentSlide - 1 + slides.length) % slides.length;
              updateCarousel();
          });

          indicators.forEach(indicator => {
              indicator.addEventListener('click', () => {
                  currentSlide = parseInt(indicator.dataset.slide);
                  updateCarousel();
              });
          });

          updateCarousel();

          // Autoplay functionality
          setInterval(() => {
              currentSlide = (currentSlide + 1) % slides.length;
              updateCarousel();
          }, 3000); // Change slides every 3 seconds
      })
      .catch(error => console.error('Error loading the carousel:', error));
});