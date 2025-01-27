let burger = document.querySelector(".menu-dropbtn"),
  menu = document.querySelector(".menu");

burger.addEventListener("click", function (e) {
  menu.classList.toggle("active");
});

/* Когда юзер нажимает появляется меню */
function myFunction() {
  document.getElementById("Dropdown-menu").classList.toggle("show");
}

// Меню закрывается, когда юзер кликает за меню
window.onclick = function(event) {
if (!event.target.matches('.button-menu')) {

  var dropdowns = document.getElementsByClassName("dropdown-menu-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}