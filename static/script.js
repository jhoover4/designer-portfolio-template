
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
      $(".after-input").fadeIn();
    }, function() {
      $(".after-input").fadeOut();
  });
});
