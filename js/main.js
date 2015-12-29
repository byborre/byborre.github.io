$(document).ready(function() {

  // Mosaic
  if($(window).width() >= 869) {
    $('.mosaic .inner').isotope({
      itemSelector: '.item',
      masonry: {
        columnWidth: 397
      }
    });
  }

  // Carousel
  $('.carousel').slick({
      dots: true,
      accessibility: false
  });

  // Highlights
  $('.highlights .item.left').mouseenter(function(){
    if($(window).width() >= 1024) {
      $(this).addClass('active').siblings().addClass('hidden');
    }
  });

  $('.highlights .item.left').mouseleave(function(){
    if($(window).width() >= 1024) {
      $('.highlights .item').removeClass('hidden').removeClass('active');
    }
  });

  // Headroom
  $('nav.sticky').headroom({
    // offset: 49,
    tolerance : {
      up: 5,
      down: 40
    }
  });

  // Button hover
  $('section.text a.button, section.form .row input[type=submit], #mc_embed_signup input[type=submit]').mouseenter(function(){

    var hoverColors = ['#f6f5ef', '#219dcf', '#fecd60', '#5fac65', '#f26649', '#a7a9ac', '#e0a7c1'];
    var randomHoverColor = hoverColors[Math.floor(Math.random()*hoverColors.length)];

    $(this).css('background', randomHoverColor);

  });

  $('section.text a.button, section.form .row input[type=submit]').mouseleave(function(){
    $(this).css('background', '#4A4A4A');
  });

  $('#mc_embed_signup input[type=submit]').mouseleave(function(){
    $(this).css('background', '#9B9B9B');
  });

  // Select boxes
  $('.select-wrapper select').change(function(){

    var selectedOptionText = $(this).find('option:selected').val();
    $(this).parent().find('span').text(selectedOptionText);

  });

  // Buy link on product detail page
  $('section.product section.text a.button').click(function(e) {

    $(window).scrollTo($('section.form'), {
      duration: 500,
      easing: 'swing'
    });

    e.preventDefault();

  });

  // Modals
  $('a.modal-contact').click(function(){

    $.get('modal-contact.html', function(data){
      $('body').append(data).addClass('modal-active');
    });

  });

  $('a.modal-sales').click(function(){

    $.get('modal-sales.html', function(data){
      $('body').append(data).addClass('modal-active');
    });

  });

  $('body').on( 'click', 'section.modal a.close', function() {
    $('body').removeClass('modal-active');
    $('section.modal').remove();
  });

});