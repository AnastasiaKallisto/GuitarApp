let burger = document.querySelector(".menu-dropbtn"),
  menu = document.querySelector(".menu");

burger.addEventListener("click", function (e) {
  menu.classList.toggle("active");
});
