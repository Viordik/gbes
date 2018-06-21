var btnMenu = document.querySelector('.menu__btn');
var menu = document.querySelector('.menu-nav');


btnMenu.addEventListener('click', function () {
  menu.classList.toggle('menu-nav--active');
});
//==============================================
//Активный пункт меню

//===============================================
//Выпадающее под меню
var secondMenu = document.querySelector('.menu-list__dropdown');
var open = document.querySelector('.open');

open.addEventListener('click', function () {
  open.classList.toggle('open--active');
  secondMenu.classList.toggle('menu-list__dropdown--active');
});

//===============================================
//Раскрывающиеся блоки с историей компании на странице "О компании"
var yearButtons = document.querySelectorAll('.history-company__btn-year');
var blockHide = document.querySelectorAll('.history-company__text-hide');
var lotHouse = document.querySelectorAll('.lot-house__description-hide');
var news = document.querySelectorAll('.text-hide')

console.log(lotHouse);

Array.prototype.forEach.call(yearButtons, function(yearButton, index) {
  yearButton.addEventListener('click', function() {

      blockHide[index].classList.toggle('history-company__text-hide--active');

      // lotHouse[index].classList.toggle('lot-house__description-hide--active');

      // news[index].classList.toggle('text-hide--active');

  })
});

//===============================================
// Yandex Map

ymaps.ready(init);
var myMap;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.709622, 37.624885],
        zoom: 16
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');
    myPlacemark = new ymaps.Placemark([55.709622, 37.624885], { hintContent: 'ГБЭС', balloonContent: 'Холодильный переулок д.3, корп.1, оф. 4402' });

    myMap.geoObjects.add(myPlacemark);
}

//===============================================
// Карусуль на главной странице
$(document).ready(function(){
  $('.services').slick({
    autoplay: true,
    autoplaySpeed: 1900,
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
  });
});

$(document).ready(function(){
  $('.our-clients__wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    variableWidth: true,
  });
});

// Карусель на странице Лот
$(document).ready(function(){
  $('.lot-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    variableWidth: true,
  });
});
//================================================
