const media1 = 1600;
const media2 = 1500;
const media3 = 1290;
const media4 = 900;
const media5 = 700;

let number = 5;



window.addEventListener("resize", (e)=>{

  let browserWidth = window.innerWidth;

  if(media1 == browserWidth){
    number = 5;
  }else if(media2 == browserWidth){
    number = 4;
  }else if(media3 == browserWidth){
    number = 3;
  }else if(media4 == browserWidth){
    number = 2;
  }else if(media5 == browserWidth){
    number = 1;
    console.log(media5 == browserWidth)
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

});




