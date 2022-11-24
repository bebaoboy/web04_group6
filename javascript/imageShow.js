


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("thumbnail");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function addPics(pics){
  const directParent = document.querySelector('.container#allImages');
  for (let i = 0; i < pics.length; i++) {
    var container = document.createElement('div');
    container.className = "mySlides";

    var imageCount = document.createElement('div');
    imageCount.className = "numberText";
    imageCount.nodeValue = (i+1)/pics.length;

    var image = document.createElement('img');
    image.src = pics[0];
    image.className = "car-image";
    image.style = "width: 50%";

    container.append(imageCount);
    container.append(image);

    directParent.append(container);
  }
}
