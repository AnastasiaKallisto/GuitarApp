// Вставка меню в сайты
document.addEventListener("DOMContentLoaded", function () {
  fetch("./menu.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("menu-container").innerHTML = html;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
