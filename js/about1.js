$(".test").click(function() {
  $("body").css("background-color",sessionStorage.bg);
})

$(window).resize(function () {
  if($(window).width() >= 1100) {
    window.scrollTo(0,0);
  }
})