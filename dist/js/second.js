var buy_nav_arrivals = document.querySelector(".buy_nav_arrivals");
var lists = document.querySelector(".lists");
// var lists-thrid = document.querySelector(".lists-thrid");
// var lists-four = document.querySelector(".lists-four");
// var lists-five = document.querySelector(".lists-five");

buy_nav_arrivals.addEventListener("click", function(){
  lists.classList.add('lists-active');
  second.classList.remove('second-active');
  thrid.classList.remove('thrid-active');
  four.classList.remove('four-active');
  five.classList.remove('five-active');
});

