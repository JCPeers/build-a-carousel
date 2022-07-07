const carousel= document.getElementById("carousel")
const progressDots = document.getElementById("progress-dots")
const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg"]

let imageHTML = ""
for (let i = 0; i < images.length; i++){
    if (i===0){
        imageHTML += `<div class="carousel-item carousel-item-visible"><img src='${images[i]}' /></div>`
    } else {
      imageHTML += `<div class='carousel-item'><img src='${images[i]}' /></div>`  
    }
 
}
carousel.innerHTML += imageHTML 


let dotHTML=""
for (let i = 0; i < images.length; i++){
    if ( i === 0){
        dotHTML += `<div class="progress-dot progress-dot-active"></div>`
    } else {
        dotHTML += `<div class="progress-dot"></div>`
    }
}
progressDots.innerHTML += dotHTML


const slides = document.getElementsByClassName('carousel-item');
const dots = document.getElementsByClassName('progress-dot');

let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {

    for (let slide of slides) { 
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
    
    for (let i = 0; i < dots.length; i++) {
     dots[i].classList.remove('progress-dot-active') 
     
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    dots[slidePosition].classList.add("progress-dot-active");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    dots[slidePosition].classList.add("progress-dot-active")
}