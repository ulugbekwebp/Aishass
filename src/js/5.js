var buy_nav_face = document.querySelector(".buy_nav_face");
var five = document.querySelector(".five");

buy_nav_face.addEventListener("click", function(){
  five.classList.add('five-active');
  four.classList.remove('four-active');
  thrid.classList.remove('thrid-active');
  second.classList.remove('second-active');
  lists.classList.remove('lists-active');
});