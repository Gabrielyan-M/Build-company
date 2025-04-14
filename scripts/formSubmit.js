document.getElementById('headForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const checkbox = document.getElementById('headCheckbox');
  const formData = new FormData(form);
  const name = formData.get('name')?.trim();
  const phone = formData.get('phone')?.trim();

  // ✅ Проверка чекбокса
  if (!checkbox.checked) {
    alert('Пожалуйста, дайте согласие на обработку данных');
    return;
  }

  // ✅ Валидация имени
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s\-]{2,50}$/u;
  if (!nameRegex.test(name)) {
    alert('Введите корректное имя (только буквы и пробелы)');
    return;
  }

  // ✅ Валидация номера
  const cleanPhone = phone.replace(/\D/g, ''); // убираем все кроме цифр
  if (!/^([78])/.test(cleanPhone) || cleanPhone.length < 11) {
    alert('Введите корректный номер телефона: начинается с 7 или 8 и содержит минимум 11 цифр');
    return;
  }

  const data = { name, phone };

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Сообщение отправлено!');
      form.reset();
    } else {
      throw new Error('Ошибка отправки');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Произошла ошибка при отправке');
  }
});
