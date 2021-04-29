var buy_nav_clothing = document.querySelector(".buy_nav_clothing");
var four = document.querySelector(".four");

buy_nav_clothing.addEventListener("click", function(){
  four.classList.add('four-active')
  thrid.classList.remove('thrid-active')
  second.classList.remove('second-active');
  lists.classList.remove('lists-active');
  five.classList.remove('five-active');
});