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


let slider_image = document.querySelectorAll(".slider-image");
let arrow = document.getElementById("arrow");
let arrow_i = 1;

arrow.addEventListener("click", function () {
  for (let i = 0; i < slider_image.length; i++) {
    if (arrow_i == i) {
      slider_image[i].classList.remove('hidden');
      arrow_i++; break;
    }else{
      slider_image[i].classList.add('hidden');
    }
    if (arrow_i == slider_image.length) {
      for (let j = 0; j < slider_image.length; j++) {
        slider_image[j].classList.add('hidden');
        slider_image[0].classList.remove('hidden');
      }
      arrow_i = 1; break;
    };
  }
})