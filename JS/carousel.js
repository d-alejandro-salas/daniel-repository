"Use strict"

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.prev',
      next: '.next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 2
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 4
        }
      }
    ]
  });
});

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
