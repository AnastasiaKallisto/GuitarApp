let burger = document.querySelector(".menu-burger__header"),
  menu = document.querySelector(".menu");

burger.addEventListener("click", function (e) {
  menu.classList.toggle("active");
});
