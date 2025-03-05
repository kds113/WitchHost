function toggleCurse(button) {
    button.classList.toggle('selected');
}

function castCurse() {
    const name = document.getElementById('victimName').value.trim();
    const selectedCurses = document.querySelectorAll('.circle-button.selected');
    const errorElement = document.getElementById('errorMessage');
    
    if (!name) {
        errorElement.textContent = 'Введите имя жертвы';
        return;
    }
    
    if (selectedCurses.length === 0) {
        errorElement.textContent = 'Выберите хотя бы одну порчу';
        return;
    }

    errorElement.textContent = '';
    
    // Запускаем анимацию порчи
    playCurseAnimation(selectedCurses);
    
    // Показываем сообщение после завершения анимации
    setTimeout(() => {
        alert(`Порча на ${name} была наслана`);
        
        // Сброс формы
        document.getElementById('victimName').value = '';
        selectedCurses.forEach(button => button.classList.remove('selected'));
    }, 2000); // Задержка перед показом сообщения
}

function playCurseAnimation(selectedCurses) {
    const animationContainer = document.getElementById('curseAnimation');
    animationContainer.innerHTML = ''; // Очищаем предыдущую анимацию
    animationContainer.style.display = 'block';
    
    // Создаем вспышку
    const flash = document.createElement('div');
    flash.className = 'curse-flash';
    document.body.appendChild(flash);
    
    // Символы для анимации
    const symbols = ['✨', '💫', '⚡', '🔮', '👁️', '🌙', '⭐', '🖤', '💀', '🧿'];
    
    // Добавляем текст выбранных порч в анимацию
    selectedCurses.forEach(curse => {
        const curseText = curse.textContent;
        const symbol = document.createElement('div');
        symbol.className = 'curse-symbol';
        symbol.textContent = curseText;
        symbol.style.color = '#ff69b4';
        
        // Случайное начальное положение (центр экрана)
        const startX = window.innerWidth / 2;
        const startY = window.innerHeight / 2;
        
        // Случайное конечное положение
        const endX = Math.random() * window.innerWidth - startX;
        const endY = Math.random() * window.innerHeight - startY;
        const rotation = Math.random() * 360;
        
        symbol.style.left = `${startX}px`;
        symbol.style.top = `${startY}px`;
        symbol.style.setProperty('--end-x', `${endX}px`);
        symbol.style.setProperty('--end-y', `${endY}px`);
        symbol.style.setProperty('--rotation', `${rotation}deg`);
        
        animationContainer.appendChild(symbol);
    });
    
    // Добавляем магические символы
    for (let i = 0; i < 30; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'curse-symbol';
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Случайное начальное положение (центр экрана)
        const startX = window.innerWidth / 2;
        const startY = window.innerHeight / 2;
        
        // Случайное конечное положение
        const endX = Math.random() * window.innerWidth - startX;
        const endY = Math.random() * window.innerHeight - startY;
        const rotation = Math.random() * 360;
        
        symbol.style.left = `${startX}px`;
        symbol.style.top = `${startY}px`;
        symbol.style.setProperty('--end-x', `${endX}px`);
        symbol.style.setProperty('--end-y', `${endY}px`);
        symbol.style.setProperty('--rotation', `${rotation}deg`);
        
        // Случайная задержка для каждого символа
        symbol.style.animationDelay = `${Math.random() * 0.5}s`;
        
        animationContainer.appendChild(symbol);
    }
    
    // Скрываем анимацию через 3 секунды
    setTimeout(() => {
        animationContainer.style.display = 'none';
        if (document.body.contains(flash)) {
            document.body.removeChild(flash);
        }
    }, 3000);
}

function removeCurse() {
    const name = document.getElementById('removeName').value.trim();
    const errorElement = document.getElementById('removeError');
    
    if (!name) {
        document.getElementById('errorMessage').textContent = 'Введите имя для снятия порчи';
        return;
    }

    document.getElementById('errorMessage').textContent = '';
    errorElement.innerHTML = 'Сайт сделан слишком<br>сильным волшебником,<br>поэтому снятие его<br>порчи невозможно';
    
    // Сброс формы
    document.getElementById('removeName').value = '';
} 