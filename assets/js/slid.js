/* made by ; Marwa Ghali */


const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentIndex = 0;

function updateSliderPosition() {
  const slideWidth = slides[0].clientWidth;
  sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function slideNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
}

function slidePrevious() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
}

rightArrow.addEventListener('click', slideNext);
leftArrow.addEventListener('click', slidePrevious);

// Auto-slide every 3 seconds
setInterval(slideNext, 3000);

window.addEventListener('resize', updateSliderPosition);
