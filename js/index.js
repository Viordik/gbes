var btnMenu = document.querySelector('.menu__btn');
var menu = document.querySelector('.menu-nav');


btnMenu.addEventListener('click', function () {
  menu.classList.toggle('menu-nav--active');
})

