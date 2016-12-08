$(document).ready(function(){


// logo fade out
  $(window).scroll(function(){
    $(".logo").css("opacity", 1 - $(window).scrollTop() / 250);

    var wScroll = $(this).scrollTop();

    if(wScroll > $('#tytot').offset().top - ($(window).height() / 1.2)) {
      $('#tytot').addClass('showing');
    }

  });

// overlay menu
  $("#menu").click(function(){
    $(".overlay").fadeToggle(200);
    $("#menu").toggleClass('btn-open').toggleClass('btn-close');
  });
  $('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);
    $("#menu").toggleClass('btn-open').toggleClass('btn-close');
  });



});
