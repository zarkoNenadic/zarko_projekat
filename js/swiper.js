let number = 5;

var swiper = new Swiper(".mySwiper", {
    slidesPerView: number,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

