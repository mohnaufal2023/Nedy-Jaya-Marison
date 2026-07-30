AOS.init({
    duration:1000,
    once:true
});

const swiper = new Swiper(".swiper",{

loop:true,

autoplay:{
delay:3000
},

pagination:{
el:".swiper-pagination"
}

});