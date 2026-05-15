// AOS Animation

AOS.init({
  duration:1000,
  once:true
});


// SWIPER SLIDER

var swiper = new Swiper(".mySwiper", {

  loop:true,

  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },

  pagination:{
    el:".swiper-pagination",
    clickable:true,
  },

});


// SEARCH BUTTON FUNCTION

const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

  const searchInput = document.querySelector(".search-box input").value;

  if(searchInput === ""){
    alert("Please enter location");
  }

  else{

    // Google Search Open

    window.open(
      `https://www.google.com/search?q=Best+PG+Hostel+in+${searchInput}`,
      "_blank"
    );

  }

});


// ROOM BUTTONS

const roomButtons = document.querySelectorAll(".room-info button");

roomButtons.forEach((button) => {

  button.addEventListener("click", () => {

    alert("Room Details Opening Soon!");

  });

});


// BOOK NOW BUTTON

const bookBtn = document.querySelector(".nav-btn");

bookBtn.addEventListener("click", () => {

  document.querySelector(".contact").scrollIntoView({
    behavior:"smooth"
  });

});


// CONTACT FORM

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Inquiry Sent Successfully!");

  form.reset();

});


// WHATSAPP BUTTON

const whatsapp = document.querySelector(".whatsapp");

whatsapp.addEventListener("click", (e) => {

  e.preventDefault();

  window.open(
    "https://wa.me/919999999999",
    "_blank"
  );

});


// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background = "rgba(15,23,42,0.9)";

  }

  else{

    navbar.style.background = "rgba(255,255,255,0.1)";

  }

});


// FLOATING ANIMATION FOR HERO

const hero = document.querySelector(".hero-content");

window.addEventListener("mousemove", (e) => {

  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  hero.style.transform = `translate(${x}px, ${y}px)`;

});
