document.addEventListener("DOMContentLoaded", function () {
  let chordsMenuContainer = document.getElementById("ChordsMenuContainer");

  if (chordsMenuContainer) {
    fetch("chords_menu.html")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        chordsMenuContainer.innerHTML = data;

        // Добавляем код для подсветки активного меню
        let path = window.location.pathname.toLowerCase();

        let links = {
          "allchords.html": "AllChords.html",
          "customchords.html": "CustomChords.html",
          "favorites.html": "Favorites.html",
        };

        for (let key in links) {
          if (path.includes(key)) {
            document
              .querySelector(`a[href="${links[key]}"]`)
              ?.classList.add("active");
          }
        }
      })
  }
});
