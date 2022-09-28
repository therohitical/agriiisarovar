$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");

        }
    });

   

    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")

    });
});

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    effect: "fade",
    grabCursor: true,
    loop:true,
    centerdSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

   
});


// var swiper = new Swiper(".author-slider", {
//     spaceBetween: 20,
//     grabCursor: true,
//     loop:true,
//     // centerdSlides: true,
//     autoplay: {
//         delay:7500,
//         disableOnInteraction: false,

//     },
//     breakpoints:{
//         0:{
//             slidesPerView:1,
//         },
//         600:{
//             slidesPerView:2,
//         }
//     }
// });

