
  $('.slider').slick({
    dots: false, // 하단 paging 버튼 노출 (true는 노출/false 노출안됨)
    autoplay: true, //자동 플레이 
    autoplaySpeed:3000, // 자동플레이 1000 = 1초
    arrows: false, //좌우 화살 버튼 비노출(false는 비노출 / true는 노출)
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay : 3000},   // 시간 설정
    breakpoints : { // 반응형 설정이 가능 width값으로 조정
    920 : {
    slidesPerView : 4,
    },
    },
    });

  var swiper2 = new Swiper(".banner-swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay : {  
    delay : 4000},   
    loop : true,
    });

const toggleBtn = document.querySelector('.nav_toogleBtn');
const menu = document.querySelector('.drop-down');
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
 });

