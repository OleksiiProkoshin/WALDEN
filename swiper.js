const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.2,
  spaceBetween: 36,
  
  // loopedSlides: 3,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mouseweel: {
    sensitivity: 1,
    eventsTarget: ".swiper-slide",
  },
  freeMode: true,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    loop: true,
    speed: 800,
  }
   });