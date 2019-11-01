jQuery(document).ready(function ($) {
  setInterval(function () {
      moveLeft();
  }, 10000);

  var slideCount = $('.promo-page-slider ul li').length;
  var slideWidth = $('.promo-page-slider ul li').width();
  var slideHeight = $('.promo-page-slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('.promo-page-slider').css({ width: slideWidth, height: slideHeight });

  $('.promo-page-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

  $('.promo-page-slider ul li:last-child').prependTo('.promo-page-slider ul');

  function moveLeft() {
    $('.promo-page-slider ul').animate({
      left: + slideWidth
      }, 600, function () {
          $('.promo-page-slider ul li:last-child').prependTo('.promo-page-slider ul');
          $('.promo-page-slider ul').css('left', '');
      });
  };
});