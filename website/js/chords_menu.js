// Элемент, куда подгрузим данные
const container = document.getElementById('component-container');

// кнопки
const buttons = document.querySelectorAll('.chords-navigation__link');

// подгружаемые компоненты
const components = {
  first: 'first.html',
  second: 'second.html',
  third: 'third.html'
};

// добавление стиля активной кнопки
function setActiveButton(key) {
    buttons.forEach(button => {
        if (button.dataset.component === key) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// функция подгрузки компонента по ключу
function loadComponent(key) {
    const url = components[key];
    if (!url) {
        container.innerHTML = `<div>Компонент не найден</div>`;
        return;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Ошибка загрузки компонента');
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
            localStorage.setItem('lastComponent', key); // сохраняем последний выбранный
            setActiveButton(key); // подсветка
        })
        .catch(err => {
            container.innerHTML = `<div>Ошибка: ${err.message}</div>`;
        });
}

// навешиваем обработчики на кнопки
document.querySelectorAll('.chords-navigation__link').forEach(button => {
    button.addEventListener('click', () => {
        const key = button.dataset.component;
        loadComponent(key);
    });
});

// при загрузке страницы — восстанавливаем последний компонент
window.addEventListener('DOMContentLoaded', () => {
    const savedKey = localStorage.getItem('lastComponent') || 'first';
    loadComponent(savedKey);
});

