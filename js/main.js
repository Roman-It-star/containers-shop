document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("order-form");

  if (orderForm) {
    const nameInput = orderForm.querySelector("input[name='customerName']");
    const phoneInput = orderForm.querySelector("input[name='phone']");
    const emailInput = orderForm.querySelector("input[name='email']");
    const typeSelect = orderForm.querySelector("select[name='containerType']");

    if (window.localStorage) {
      const savedName = localStorage.getItem("customerName");
      const savedPhone = localStorage.getItem("customerPhone");
      const savedEmail = localStorage.getItem("customerEmail");
      const savedType = localStorage.getItem("customerContainerType");

      if (savedName && nameInput) nameInput.value = savedName;
      if (savedPhone && phoneInput) phoneInput.value = savedPhone;
      if (savedEmail && emailInput) emailInput.value = savedEmail;
      if (savedType && typeSelect) typeSelect.value = savedType;
    }

    orderForm.addEventListener("submit", (event) => {
      if (window.localStorage) {
        if (nameInput) {
          localStorage.setItem("customerName", nameInput.value);
        }
        if (phoneInput) {
          localStorage.setItem("customerPhone", phoneInput.value);
        }
        if (emailInput) {
          localStorage.setItem("customerEmail", emailInput.value);
        }
        if (typeSelect) {
          localStorage.setItem("customerContainerType", typeSelect.value);
        }
      }
      alert("Заявка отправлена! Ваши данные сохранены в браузере.");
    });
  }
});
