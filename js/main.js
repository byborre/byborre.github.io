$(document).ready(function() {

  // Carousel
  $('.carousel').slick({
      dots: true,
      accessibility: false
  });

  $(window).scroll(function(){
    var scrollDistance = $(document).scrollTop();
    if(scrollDistance <= 120) {
      $('nav').removeClass('hide');
    } else {
      $('nav').addClass('hide');
    }
  });

});
