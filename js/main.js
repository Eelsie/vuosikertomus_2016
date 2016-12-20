// video play

function play(){
  document.getElementById('video1').innerHTML = '<iframe  src="http://www.youtube.com/embed/QdwOBDADbRA?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}

function play2(){
  document.getElementById('video2').innerHTML = '<iframe  src="http://www.youtube.com/embed/fuDwmNlZfMo?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}


$(document).ready(function(){

// force scroll to top on refresh
$(window).scrollTop(0);

// avoid logo to appear on refresh if scroll != 0
  // if ($(window).scrollTop() > 40) {
  //   $(".logo").css("opacity", 0);
  // }

// fadein ONLOAD
  $(function() {
    $('body').removeClass('fade-out');
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

// all what happens on scroll
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

// logo fade out
    $(".logo").css("opacity", 1 - $(window).scrollTop() / 250);

// parallax of header image
    $('header').css('background-position', 'center ' + -wScroll/3 + 'px');

// elements fade in and slide from bottom
    function slidingBottom(el) {
      if(wScroll > $(el).offset().top - ($(window).height() / 1.2)) {
        $(el).addClass('showing');
      }
    }
    function slidingBottomImg(el, className) {
      if(wScroll > $(el).offset().top - ($(window).height() / 1.2)) {
        $(el).addClass(className);
      }
    }

    // if($('.logo').css('width') === '160px') {

      // slidingBottom('#intro');
      slidingBottom('#tytot');
      slidingBottom('#humanitaarinen');
      slidingBottomImg('.skew:first-child', 'dia-showing01');
      slidingBottomImg('.skew:nth-child(2)', 'dia-showing02');
      slidingBottomImg('.skew:nth-child(3)', 'dia-showing03');
      slidingBottomImg('.skew:nth-child(4)', 'dia-showing04');
      slidingBottomImg('.skew:nth-child(5)', 'dia-showing05');
      slidingBottom('#pic1');
      slidingBottom('#ohjelmatyo');
      slidingBottom('#pic2');


    // }




  });





});
