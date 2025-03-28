// Дожидается пока fetch загрузит header и применит все id
const observer = new MutationObserver(() => {
  let dropdownMenu = document.getElementById("MenuDropdown");
  if (dropdownMenu) {
    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
