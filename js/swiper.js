let number = 5;

window.addEventListener("load",()=>{
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: number,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

window.addEventListener("resize", (e)=>{

  let browserWidthChanged = window.innerWidth;
  
  number = 5;
  
  if(browserWidthChanged > 1600){
    number = 5;
  }else if(browserWidthChanged < 1500 && browserWidthChanged >= 1290){
    number = 4;
  }else if(browserWidthChanged < 1290 && browserWidthChanged >= 900){
    number = 3;
  }else if(browserWidthChanged < 900 && browserWidthChanged >= 700){
    number = 2;
  }else if(browserWidthChanged < 700 && browserWidthChanged >= 350){
    number = 1;
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: number,
    spaceBetween: 30,
    loop:true,
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });

});




