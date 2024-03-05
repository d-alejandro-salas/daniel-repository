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

function shuffleImages() {
  var gallery = document.getElementById("gallery");
  var images = gallery.getElementsByClassName("galleryImage");
  var imageArray = Array.from(images);

  for (var i = imageArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = imageArray[i];
    imageArray[i] = imageArray[j];
    imageArray[j] = temp;
  }

  for (var i = 0; i < imageArray.length; i++) {
    gallery.appendChild(imageArray[i]);
  }
}

    document.addEventListener('DOMContentLoaded', function() {
      shuffleImages();
    });
