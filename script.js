(() => {
  "use strict";

  const form = document.getElementById("consultForm");
  const message = document.getElementById("formMessage");

  if (!form || !message) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    message.textContent = "Cảm ơn bạn! Đây là bản demo, thông tin chưa được gửi đi. Vui lòng gọi 098 953 44 58 để được tư vấn.";
    form.reset();
    form.querySelectorAll(".md-form label").forEach((label) => label.classList.remove("active"));
  });
})();
