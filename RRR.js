// Переменные
let count = 0;
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const counter = document.getElementById('counter');

// Обработчик клика
btn.addEventListener('click', function() {
    count++;
    counter.textContent = 'Счётчик: ' + count;
    text.textContent = 'Клик! 🎉';
    text.style.color = '#764ba2';
    
    // Анимация кнопки
    this.style.backgroundColor = '#764ba2';
    setTimeout(() => {
        this.style.backgroundColor = '#667eea';
    }, 200);
    
    // Сброс текста через 1 секунду
    setTimeout(() => {
        text.textContent = 'Нажми ещё!';
        text.style.color = '#666';
    }, 1000);
});

// Приветствие при загрузке
console.log('Страница загружена!');