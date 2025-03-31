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
            document.getElementById("MenuContainer").innerHTML = html;
            let dropdownMenu = document.getElementById("MenuDropdown");

            let hideTimeout; // Переменная для хранения идентификатора таймера

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
            const menuItem = document.querySelectorAll(".MenuLink");
            const menuLength = menuItem.length;
            for (let i = 0; i < menuLength; i++) {
                if (menuItem[i].href === currentLocation) {
                    menuItem[i].classList.add("active");
                }
            }
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
});

// Открывает меню
window.openMainMenu = function () {
    let dropdownMenu = document.getElementById("MenuDropdown");
    dropdownMenu.classList.toggle("show");
};
