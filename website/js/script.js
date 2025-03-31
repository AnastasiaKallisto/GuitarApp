// Дожидается пока fetch загрузит header и применит все id
document.addEventListener("DOMContentLoaded", function () {
  let menuContainer = document.getElementById("MenuContainer");
  if (menuContainer) {
    fetch("../menu.html")
      .then(response => {
        if (!response.ok) throw new Error("Ошибка загрузки меню");
        return response.text();
      })
      .then(data => {
        menuContainer.innerHTML = data;
      })
      .catch(error => console.error("Меню не загружено:", error));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let path = window.location.pathname.toLowerCase();

  function activateChordsMenu() {
    let chordsLink = document.getElementById("chords");

    if (chordsLink) {
      console.log("Меню найдено! Активируем пункт 'АККОРДЫ'");

      // Удаляем параметры ?id=123, чтобы не мешали проверке
      path = path.split("?")[0];

      if (
        path.endsWith("/website/chords.html") || 
        path.endsWith("/website/additionalwebsites/favorites.html") || 
        path.endsWith("/website/additionalwebsites/allchords.html") || 
        path.endsWith("/website/additionalwebsites/customchords.html")
      ) {
        chordsLink.classList.add("active");
        console.log("Класс 'active' добавлен к 'АККОРДЫ'");
      } else {
        console.log("Страница не связана с аккордами.");
      }
    } else {
      console.log("Элемент #chords пока не найден, ждём...");
    }
  }

  // Запускаем проверку сразу
  activateChordsMenu();

  // Если меню загружается динамически, следим за его появлением
  const observer = new MutationObserver(() => {
    activateChordsMenu();
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
