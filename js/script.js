const form = document.getElementById("contact-form");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
const submitBtn = form.querySelector("button");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  errorMsg.textContent = "";
  successMsg.textContent = "";

  // 基本驗證
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    errorMsg.textContent = "姓名、Email、訊息為必填欄位";
    return;
  }

  // Email 格式簡單驗證
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "請輸入有效的 Email 地址";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "寄送中...";

  // 用 EmailJS 寄信
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
    })
    .then(
      () => {
        successMsg.textContent = "感謝您的聯絡，我們會盡快回覆！";
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "送出";
      },
      (error) => {
        errorMsg.textContent = "寄信失敗，請稍後再試。";
        submitBtn.disabled = false;
        submitBtn.textContent = "送出";
        console.error("EmailJS Error:", error);
      }
    );
});

//頂端按鈕
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

window.addEventListener("scroll", () => {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
