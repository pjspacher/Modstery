$( document ).ready(function() {
  $('.trigger2').click(function() {
     $('.modal-wrapper2').toggleClass('open');
    $('.page-wrapper2').toggleClass('blur');
     return false;
  });
});