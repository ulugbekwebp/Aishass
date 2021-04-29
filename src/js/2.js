var buy_nav_final = document.querySelector(".buy_nav_final");
var second = document.querySelector(".second");

buy_nav_final.addEventListener("click", function(){
  second.classList.add('second-active');
  lists.classList.remove('lists-active');
  thrid.classList.remove('thrid-active');
  four.classList.remove('four-active');
  five.classList.remove('five-active');
});