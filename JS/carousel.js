"Use strict"

const carousel = document.getElementById("carousel");
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slideIndex = 0;

function showSlides() {
  const slides = carouselInner.children;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  slideIndex--;
  showSlides();
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  showSlides();
});

showSlides();
