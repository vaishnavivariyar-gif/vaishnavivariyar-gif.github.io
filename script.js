window.addEventListener("scroll", function(){

let elements = document.querySelectorAll(".slide-left, .slide-right, .fade-up");

elements.forEach(function(el){
let position = el.getBoundingClientRect().top;
let screenHeight = window.innerHeight;

if(position < screenHeight - 100){
el.classList.add("active");
}
});

});

// Skills Animation on Scroll
window.addEventListener("scroll", function(){
let cards = document.querySelectorAll(".skill-card");

cards.forEach(function(card){
let position = card.getBoundingClientRect().top;
let screenHeight = window.innerHeight;

if(position < screenHeight - 100){
card.classList.add("show");
}
});
});