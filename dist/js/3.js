var buy_nav_best = document.querySelector(".buy_nav_best");
var thrid = document.querySelector(".thrid");

buy_nav_best.addEventListener("click", function(){
  thrid.classList.add('thrid-active')
  second.classList.remove('second-active');
  lists.classList.remove('lists-active');
  four.classList.remove('four-active');
  five.classList.remove('five-active');
});