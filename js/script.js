
$(document).ready(function () {
   $('.galery__slaider').slick({
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
      nextArrow: '<button button type = "button" class = "slick-next" ><img src="images/arrow-right.svg" alt=""></button>',
   });
});

$(document).ready(function () {
   $('.header__menu-burger').click(function (event) {
      $('.header__menu-burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock')
   });
});

$(document).ready(function () {
   $('.tittle-btn--company').on('click', function(){
      $('.item-list-company').slideToggle();
   });
});

$(document).ready(function () {
   $('.tittle-btn--details').on('click', function () {
      $('.item-list-details').slideToggle();
   });
});

$(document).ready(function () {
   $('.tittle-btn--contacts').on('click', function () {
      $('.item-list-contacts').slideToggle();
   });
});

$(document).ready(function () {
   $('.tittle-btn--blog').on('click', function () {
      $('.item-list-blog').slideToggle();
   });
});