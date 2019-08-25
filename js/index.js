$(".test").click(function() {
  $("body").css("background-color","red");
  sessionStorage.bg = "red";
})
$(".test2").click(function() {
  $("body").css("background-color","blue");
  sessionStorage.bg = "blue";
})