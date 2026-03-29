// Анимация появления элементов при прокрутке
const observerOptions = {
    threshold: 0.1, // Элемент должен появиться на 10%, чтобы сработала анимация
    rootMargin: "0px 0px -50px 0px" // Срабатывает чуть раньше, чем элемент дойдет до края
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            // Перестаем наблюдать за элементом после того, как он появился
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Применяем анимацию ко всем карточкам новостей и учителей
document.querySelectorAll('.card').forEach(el => {
    // Устанавливаем начальное состояние в JS, чтобы если JS отключен, сайт все равно был виден
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.5s ease-out";
    observer.observe(el);
});
