$(document).ready(function() {

  // Redirect to Japanese page if browser is in Japanese.
  // var userLang = navigator.language || navigator.userLanguage;
  // if (userLang.substring(0, 2) == "ja") {
  //   window.location.href = "/ja"
  // }

  $('*[data-action="show-bio"').on('click', function(event) {
    event.preventDefault();
    $('#about').fadeIn(600).toggleClass('visible')
  });

  $('*[data-action="hide-bio"').on('click', function(event) {
    event.preventDefault();
    $('#about').fadeOut(600).toggleClass('visible')
  });

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll <= 0) {
      $('#about').find('header').removeClass('elevated');
    } else {
      $('#about').find('header').addClass('elevated');
    }
  });

});

$(window).on('load', function() {
  $('body').addClass('ready');
})
