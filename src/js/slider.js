// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================

const bodyStyles = window.getComputedStyle(document.body);
const categoriesSlidesPerView = parseInt(bodyStyles.getPropertyValue('--categoriesSlidesPerView'));
const findSlidesPerView = parseInt(bodyStyles.getPropertyValue('--findSlidesPerView'));
const sliderSpaceBetween = parseInt(bodyStyles.getPropertyValue('--sliderSpaceBetween'));

// const viewportWidth = window.innerWidth;
// if (viewportWidth < 768) {}

// const sliderToggleStop = document.querySelector('.slider-toggle__stop');
// sliderToggleStop.addEventListener('click', () => {
//     mainSlider.autoplay.stop();
// });
// const sliderTogglePlay = document.querySelector('.slider-toggle__play');
// sliderTogglePlay.addEventListener('click', () => {
//     mainSlider.autoplay.start();
// });

// swiper-slider 

const categoriesSlider = new Swiper('.main-slider__swiper', {
  navigation: {
    nextEl: '.main-slider__arrow-next',
    prevEl: '.main-slider__arrow-prev',
  },
  slidesPerView: categoriesSlidesPerView,
  slidesPerGroup: 1,
  spaceBetween: sliderSpaceBetween,
  speed: 300,
});

const findSlider = new Swiper('.find-slider__swiper', {
  navigation: {
    nextEl: '.find-slider__arrow-next',
    prevEl: '.find-slider__arrow-prev',
  },
  slidesPerView: findSlidesPerView,
  slidesPerGroup: 1,
  spaceBetween: sliderSpaceBetween,
  speed: 300,
});
