let number = 5;

function slider(){
  let browserWidth = window.innerWidth;
  
  number = 5;
  
  if(browserWidth > 1600){
    number = 5;
  }else if(browserWidth < 1500 && browserWidth >= 1290){
    number = 4;
  }else if(browserWidth < 1290 && browserWidth >= 900){
    number = 3;
  }else if(browserWidth < 900 && browserWidth >= 700){
    number = 2;
  }else if(browserWidth < 700 && browserWidth >= 200){
    number = 1;
  }
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: number,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}

window.addEventListener("load",slider);
window.addEventListener("resize", slider);
