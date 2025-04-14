<script>
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const action = form.getAttribute("action");

      try {
        const response = await fetch(action, {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          alert("Спасибо! Ваша заявка отправлена.");
          form.reset();
        } else {
          alert("Ошибка при отправке. Пожалуйста, попробуйте позже.");
        }
      } catch (error) {
        alert("Ошибка сети. Проверьте подключение.");
      }
    });
  });
});
</script>
