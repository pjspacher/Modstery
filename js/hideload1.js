$(document).ready(function ($) {

    var timer;
    $(".navbox-phones").click(function (e) {
        $('.jq-video').show(0);
        timer = setTimeout(function () {
            $('.jq-video').hide(0);
        }, 3000);
    });
});