document.getElementById('action-btn').addEventListener('click', function() {
    // Плавный скролл или просто уведомление
    alert('Сайт готов к работе! Теперь можно наполнять его контентом.');
});

// Добавим легкое движение фона за мышкой (параллакс)
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelector('.background-blobs').style.transform = 
        `translate(${x * 20}px, ${y * 20}px)`;
});
