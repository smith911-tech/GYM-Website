const btn = document.getElementsByClassName('container')[0]
const nav = document.getElementsByClassName('nav')[0]


btn.addEventListener('click', () => {
    nav.classList.toggle('active')
})
function myfunction(x) {
    btn.classList.toggle("change")
}
// ! preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});


// ! slide show
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); 
}



