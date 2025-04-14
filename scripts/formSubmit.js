document.getElementById('headForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Проверка чекбокса
    const checkbox = document.getElementById('headCheckbox');
    if (!checkbox.checked) {
        alert('Пожалуйста, дайте согласие на обработку данных');
        return;
    }

    // Сбор данных формы
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone')
    };

    try {
        const response = await fetch(e.target.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Сообщение отправлено!');
            e.target.reset(); // Очистка формы
        } else {
            throw new Error('Ошибка отправки');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Произошла ошибка при отправке');
    }
});