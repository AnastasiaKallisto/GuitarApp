const dropdownMenu = document.getElementById("MainMenuDropdown");
let hideTimeout; // Переменная для хранения идентификатора таймера

function openMainMenu(){
  dropdownMenu.classList.toggle("show");
}

dropdownMenu.addEventListener("mouseleave", () => {
    // Устанавливаем таймер и сохраняем его ID
    hideTimeout = setTimeout(() => {
        dropdownMenu.classList.remove("show");
    }, 1000);
});

dropdownMenu.addEventListener("mouseenter", () => {
    // Если таймер активен — отменяем его
    if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
    }
});

// Меню закрывается, когда юзер кликает за меню
window.onclick = function(event) {
if (!event.target.matches('.main-menu-button')) {

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