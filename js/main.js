// video play

function play(){
  document.getElementById('video1').innerHTML = '<iframe  src="https://www.youtube.com/embed/QdwOBDADbRA?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}

function play2(){
  document.getElementById('video2').innerHTML = '<iframe  src="https://www.youtube.com/embed/fuDwmNlZfMo?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}

function play3(){
  document.getElementById('video3').innerHTML = '<iframe  src="https://www.youtube.com/embed/u46RcoqPz4Y?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}

function play4(){
  document.getElementById('video4').innerHTML = '<iframe  src="https://www.youtube.com/embed/bpO7ev2OsVI?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}

function play5(){
  document.getElementById('video5').innerHTML = '<iframe  src="https://www.youtube.com/embed/9eqm8i3T9l4?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}

function play6(){
  document.getElementById('video6').innerHTML = '<iframe  src="https://www.youtube.com/embed/3BVj4-vObb8?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}

function play7(){
  document.getElementById('video7').innerHTML = '<iframe  src="https://www.youtube.com/embed/SVzUi66xBg8?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}

function play8(){
  document.getElementById('video8').innerHTML = '<iframe  src="https://www.youtube.com/embed/fRsnrwfOI3Q?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}

function play9(){
  document.getElementById('video9').innerHTML = '<iframe  src="https://www.youtube.com/embed/n8qoJ9-W0p0?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}

function play10(){
  document.getElementById('video10').innerHTML = '<iframe  src="https://www.youtube.com/embed/9FGy1pXv2dk?autoplay=1&rel=0&theme=light&color=white" frameborder="0"></iframe>';
}


$(document).ready(function(){
//




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

// logo and language link fade out
    $(".logo").css("opacity", 1 - $(window).scrollTop() / 250);
    $("#lang").css("opacity", 1 - $(window).scrollTop() / 250);


// parallax of header image
    if ($(window).width() > 1400){
      $('header').css('background-position', 'center ' + -wScroll/3 + 'px');
    }



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

      slidingBottom('#tytot');
      slidingBottom('#humanitaarinen');
      slidingBottomImg('.skew:first-child', 'dia-showing01');
      slidingBottomImg('.skew:nth-child(2)', 'dia-showing02');
      slidingBottomImg('.skew:nth-child(3)', 'dia-showing03');
      slidingBottomImg('.skew:nth-child(4)', 'dia-showing04');
      slidingBottom('#pic1');
      slidingBottom('#ohjelmatyo');
      slidingBottom('#pic2');
      slidingBottom('#infograffa');
      slidingBottom('#paiva');
      slidingBottom('#pic3');
      slidingBottom('#inno');
      slidingBottom('#pic4');
      slidingBottom('#pic5');
      slidingBottom('#vapaaehtoiset');
      slidingBottom('#pic7');
      slidingBottom('#pic8');
      slidingBottom('#kotimaantyo');
      slidingBottom('#pic9');
      slidingBottom('#pic10');
      slidingBottom('#yritysyhteistyo');
      slidingBottom('#kummit');
      slidingBottom('#vv');
      slidingBottom('#pic11');
      slidingBottom('#talous');
      slidingBottom('#jh');
  });


  // avoid hiding of titles when menu items clicked

    // The function actually applying the offset
    function offsetAnchor() {
        if(location.hash.length !== 0) {
            window.scrollTo(window.scrollX, window.scrollY - 80);
        }
    }

    // This will capture hash changes while on the page
    window.addEventListener("hashchange", offsetAnchor);

    // if( /iPhone|iPad/i.test(navigator.userAgent) ) {
    //   $("#infograffa").addClass('no-showing');
    //   $("#infograffa2").addClass('no-showing');
    //
    // }

});
