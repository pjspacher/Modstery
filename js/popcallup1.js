$( document ).ready(function() {
  $('.trigger1').click(function() {
     $('.modal-wrapper1').toggleClass('open');
    $('.page-wrapper1').toggleClass('blur');
     return false;
  });
});