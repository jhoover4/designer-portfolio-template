
$( document ).ready(function() {
  console.log("Javascript working");
  // scroll reveal
  window.sr = ScrollReveal({ reset: true });
  sr.reveal('.email-sign-up .before-input', { duration: 300, easing: 'ease-out'});
  sr.reveal('.email-sign-up input', { duration: 1000, beforeReveal: function (domEl) {
    $(domEl).next().addClass('border-bar-activate');
  },
  afterReset: function (domEl) {
    $(domEl).next().removeClass('border-bar-activate');
  }
});

  // hit enter fadein
  $input = $(".email-sign-up input");
  $input.hover(function(){
      $(".after-input").animate({ opacity: 1 });
    }, function() {
      $(".after-input").animate({ opacity: 0 });
  });

  const $homepage_text = $(".homepage-text p");
  const $homepage_header = $(".homepage-text h1");
  const $homepage_blockquote = $(".homepage-text .blockquote");

  //scroll text translate
  $(window).scroll(function(){

    //scrolltop breakpoints
    if ($(window).scrollTop() >= 1700){
        translate = 180;
    } else if ($(window).scrollTop() >= 1600){
        translate = 165;
    } else if ($(window).scrollTop() >= 1400){
        translate = 150;
    } else if ($(window).scrollTop() >= 1300){
        translate = 135;
    } else if ($(window).scrollTop() >= 1200){
        translate = 120;
    } else if ($(window).scrollTop() >= 1100){
        translate = 105;
    } else if ($(window).scrollTop() >= 900){
        translate = 90;
    } else if ($(window).scrollTop() >= 800){
        translate = 75;
    } else if ($(window).scrollTop() >= 700){
        translate = 60;
    } else if ($(window).scrollTop() >= 600){
        translate = 45;
    } else if ($(window).scrollTop() >= 500){
        translate = 30;
    } else if ($(window).scrollTop() >= 400){
        translate = 15;
    } else {
        translate = 0;
    }


    $homepage_text.css({transform: "translateY(" + translate + "px)"});
    $homepage_header.css({transform: "translateY(" + translate + "px)"});
    $homepage_blockquote.css({transform: "translateY(" + translate + "px)"});
  });

});
