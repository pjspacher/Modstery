$(document).ready(function() {
  $('.vdplay1').on('click', function(ev) {
 
    $("#videos")[0].src += "&autoplay=1";
    ev.preventDefault();
 
  });
});