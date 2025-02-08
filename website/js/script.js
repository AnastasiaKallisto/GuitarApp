const dropdownMenu = document.getElementById("MainMenuDropdown");
let hideTimeout; // Переменная для хранения идентификатора таймера

function openMainMenu() {
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
window.onclick = function (event) {
  if (!event.target.matches(".main-menu-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Подсвечивает активный пункт меню
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.MenuLink');
const menuLenght = menuItem.length
for (let i = 0; i<menuLenght; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active MenuLink";
    }
}