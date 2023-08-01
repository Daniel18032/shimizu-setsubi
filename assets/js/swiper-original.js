// JavaScript Document

const mySwiper = new Swiper('.swiper', {
    loop: true, // ループ有効
    slidesPerView: 3, // 一度に表示する枚数
    spaceBetween: 24,
    speed: 4000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0, // 途切れなくループ
    },
    grabCursor: true,
    loopAdditionalSlides: 1,
    breakpoints: {
      834: {
        slidesPerView: 5,
        spaceBetween: 32,
      }
    }
  });