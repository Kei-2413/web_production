'use strict';
{
　const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1.8, // １度に表示するスライド数
    centeredSlides: true, //現在のスライドを中央に表示
    spaceBetween: 20, // スライド同士の余白
  
    // 自動再生
    autoplay: {
      delay: 1000 // 次のスライドに切り替わる時間の設定（ミリ秒:1000=1秒）
    },

    breakpoints: {
      600: {
        slidesPerView: 2.75,
        spaceBetween: 30
      },
      1001: {
        slidesPerView: 3.75, // １度に表示するスライド数
        spaceBetween: 56 // スライド同士の余白
        },
      1200: {
        slidesPerView: 4.75,
        spaceBetween: 60
      },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // spのsafariにおける100vh表示の調整
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  window.addEventListener('resize', setFillHeight);

  setFillHeight();

  
}