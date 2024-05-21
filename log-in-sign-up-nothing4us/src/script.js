let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

$(".info-item .btn").click(function(){
  $(".container").toggleClass("log-in");
});
$(".container-form .btn").click(function(){
  $(".container").addClass("active");
});
menubar.onclick = () =>{
  menubar.classList.toggle('fa-times');
  navbar.classList.toggle('active')
}