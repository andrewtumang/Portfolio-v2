$(".navbar").hover(function() {
  $(".navbar").stop().animate({
    width: "160px"
  }, 500);
});

$(".navbar").mouseleave(function() {
  $(".navbar").stop().animate({
    width: "70px"
  }, 500);
})

