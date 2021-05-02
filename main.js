// $('.banner').slick({
//     dots: false, // 하단 paging 버튼 노출 (true는 노출/false 노출안됨)
//     autoplay: true, //자동 플레이 
//     autoplaySpeed:4000, // 자동플레이 1000 = 1초
//     arrows: false, //좌우 화살 버튼 비노출(false는 비노출 / true는 노출)
//   });

  $('.slider').slick({
    dots: false, // 하단 paging 버튼 노출 (true는 노출/false 노출안됨)
    autoplay: true, //자동 플레이 
    autoplaySpeed:3000, // 자동플레이 1000 = 1초
    arrows: false, //좌우 화살 버튼 비노출(false는 비노출 / true는 노출)
  });

  // $('.lookbook').slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   arrows: false
  // });


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
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
delay : 4000},   // 시간 설정
loop : true,
  });

  // var media = window.matchMedia( '( max-width: 600px )' );
  // if( media.matches == true){
  //   $('.lookbook').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     arrows: false
  //   });
  //}

  // var lookbook = document.querySelector('.lookbook');
  // var media = window.matchMedia( '( max-width: 600px )' );

  // if (media.matches == true){
  //   lookbook.className = 'lookbookmini';
  // }

const toggleBtn = document.querySelector('.nav_toogleBtn');
const menu = document.querySelector('.drop-down');
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
 });


 const mediaQueryList = window.matchMedia(`(min-width: 1024px)`);
 const mediaQueryList2 = window.matchMedia(`(max-width: 1023px)`);
 const lookbook = document.querySelector('.lookbook');

// document 가 미디어 쿼리를 충족시키는것에 대해 변화가 생기면 콘솔에 로깅한다
const changeHandler = (MediaQueryListEvent) => {
  console.log("changed!");
  lookbook.className = 'big-lookbook';
};
// 600px 을 기준으로 document width 가 바뀔 때 마다 이벤트 핸들러를 호출한다
mediaQueryList.addEventListener("change", changeHandler);