//開啟動畫
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return; // 預防找不到元素出錯

  preloader.style.opacity = "0";
  preloader.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// Scroll reveal 簡易實作
const photo = document.querySelector(".photo");
const text = document.querySelector(".text-content");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const photoTop = photo.getBoundingClientRect().top;
  const textTop = text.getBoundingClientRect().top;

  if (photoTop < windowHeight - 100) {
    photo.classList.add("visible");
  }
  if (textTop < windowHeight - 100) {
    text.classList.add("visible");
  }
}

window.addEventListener("scroll", revealOnScroll);
// 頁面載入時檢查一次
revealOnScroll();

document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("langToggle");
  let currentLang = "tw"; // 預設中文

  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "tw" ? "en" : "tw";
    langToggle.textContent = currentLang === "tw" ? "EN" : "中";

    document.querySelectorAll("[data-lang-tw]").forEach((el) => {
      el.textContent = el.getAttribute(`data-lang-${currentLang}`);
    });
  });
});
