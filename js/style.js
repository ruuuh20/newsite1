$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".navbar").css("background-color", "#fff");
      $(".navbar").css("border-bottom", "#dedede 1px solid");

      $(".navbar ul li a").css("color", "#000");


    } else {
      $(".navbar").css("background-color", "transparent");
      $(".navbar ul li a").css("color", "#fff");
    }
  })
});
