// Вставка меню в сайты
document.addEventListener("DOMContentLoaded", function () {
  fetch("/website/menu.html")
    .then((response) => (response.ok ? response.text() : ""))
    .then((html) => {
      if (html) {
        document.getElementById("MainMenu").innerHTML = html;
        let dropdownMenu = document.getElementById("MenuDropdown");

        let hideTimeout;

        dropdownMenu.addEventListener("mouseleave", () => {
          hideTimeout = setTimeout(() => {
            dropdownMenu.classList.remove("show");
          }, 1000);
        });

        dropdownMenu.addEventListener("mouseenter", () => {
          if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
          }
        });

        // Закрытие меню при клике вне его области
        window.onclick = function (event) {
          if (!event.target.matches(".main-menu-button")) {
            document
              .querySelectorAll(".dropdown-menu-content.show")
              .forEach((dropdown) => dropdown.classList.remove("show"));
          }
        };

        // Подсветка активного пункта меню
        const currentLocation = location.href;
        document.querySelectorAll(".MenuLink").forEach((menuItem) => {
          if (menuItem.href === currentLocation) {
            menuItem.classList.add("active");
          }
        });
      }
    });
});

// Открытие меню
window.openMainMenu = function () {
  let dropdownMenu = document.getElementById("MenuDropdown");
  if (dropdownMenu) dropdownMenu.classList.toggle("show");
};

// Дожидается пока fetch загрузит header и применит все id
document.addEventListener("DOMContentLoaded", function () {
  let MainMenu = document.getElementById("MainMenu");
  if (MainMenu) {
    fetch("../menu.html")
      .then((response) => (response.ok ? response.text() : ""))
      .then((data) => {
        if (data) MainMenu.innerHTML = data;
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let path = window.location.pathname.toLowerCase();

  function activateChordsMenu() {
    let chordsLink = document.getElementById("chords");

    if (!chordsLink) {
      setTimeout(activateChordsMenu, 100);
      return;
    }

    // Удаляем параметры ?id=123, чтобы не мешали проверке
    path = path.split("?")[0];

    if (
      path.endsWith("/website/chords.html") ||
      path.endsWith("/website/additionalwebsites/favorites.html") ||
      path.endsWith("/website/additionalwebsites/allchords.html") ||
      path.endsWith("/website/additionalwebsites/customchords.html")
    ) {
      chordsLink.classList.add("active");
    }
  }

  // Запускаем проверку сразу
  function waitForMenuAndActivate() {
    let checkExist = setInterval(function () {
      if (document.getElementById("chords")) {
        activateChordsMenu();
        clearInterval(checkExist);
      }
    }, 100);
  }

  waitForMenuAndActivate();
});
