// Ensure elements exist before manipulation
const search = document.querySelector('.search-box');
const cart = document.querySelector('.cartList');
const user = document.querySelector('.user');
const searchIcon = document.querySelector('#search-icon');
const cartIcon = document.querySelector('#cart-icon');
const userIcon = document.querySelector('#user-icon');
const navbar = document.querySelector('.navbar')

// Function to toggle active class
// function toggleActive(elementToShow, ...elementsToHide) {
//     elementToShow.classList.toggle('active');
//     elementsToHide.forEach(element => element.classList.remove('active'));
// }

// // Event listeners for icon clicks
// if (searchIcon) {
//     searchIcon.onclick = () => {
//         toggleActive(search, cart, user);
//     }
// }

// if (cartIcon) {
//     cartIcon.onclick = () => {
//         toggleActive(cart, search, user);
//     }
// }

// if (userIcon) {
//     userIcon.onclick = () => {
//         toggleActive(user, search, cart);
//     }
// }

 document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle("active");
    cart.classList.remove("active");
    user.classList.remove('active');
    navbar.classList.remove('active');
 }
 document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle("active");
    search.classList.remove("active");
    user.classList.remove('active');
    navbar.classList.remove('active');
 }
 document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle("active");
    search.classList.remove('active');
    cart.classList.remove("active"); 
    navbar.classList.remove('active');
 }
 document.querySelector('#menu-icon').onclick = () =>{
  navbar.classList.toggle('active');
  search.classList.remove("active");
  cart.classList.remove("active"); 
  user.classList.remove('active');
 }
 
 window.onscroll = () =>{
  search.classList.remove("active");
  cart.classList.remove("active"); 
  user.classList.remove('active');
  navbar.classList.remove('active');
 }



//  NavBar Scroll
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});




 var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
   loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centeredslides:true,
    breakpoints:{
        0:{
            slidesPerView:0,
        },
        568:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1020:{
            slidesPerView:3,
        }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });