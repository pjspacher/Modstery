$( document ).ready(function() {
  $('.trigger3').click(function() {
     $('.modal-wrapper3').toggleClass('open');
    $('.page-wrapper3').toggleClass('blur');
     return false;
  });
});