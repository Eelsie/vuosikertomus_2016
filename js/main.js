$(document).ready(function(){

// overlay menu
  $("#menu").click(function(){
    $(".overlay").fadeToggle(200);
    $("#menu").toggleClass('btn-open').toggleClass('btn-close');
  });
  $('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);
    $("#menu").toggleClass('btn-open').toggleClass('btn-close');
  });

// logo fade out
  $(window).scroll(function(){
    $(".logo").css("opacity", 1 - $(window).scrollTop() / 250);

    var wScroll = $(this).scrollTop();

    $('header').css('background-position', 'center ' + -wScroll/3 + 'px');


// elements fade in and slide from bottom
    if($('.logo').css('width') == '160px') {
      if(wScroll > $('#tytot').offset().top - ($(window).height() / 1.2)) {
        $('#tytot').addClass('showing');
      }
      if(wScroll > $('#humanitaarinen').offset().top - ($(window).height() / 1.2)) {
        $('#humanitaarinen').addClass('showing');
      }
    }


  });





});
