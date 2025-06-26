// 預載動畫
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  preloader.style.opacity = "0";
  preloader.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// 中英切換
const langToggleBtn = document.getElementById("langToggle");
let currentLang = "zh"; // 預設中文

langToggleBtn.addEventListener("click", () => {
  const zhElems = document.querySelectorAll('[data-lang="zh"]');
  const enElems = document.querySelectorAll('[data-lang="en"]');
  if (currentLang === "zh") {
    zhElems.forEach((el) => (el.style.display = "none"));
    enElems.forEach((el) => (el.style.display = ""));
    langToggleBtn.textContent = "中";
    currentLang = "en";
  } else {
    zhElems.forEach((el) => (el.style.display = ""));
    enElems.forEach((el) => (el.style.display = "none"));
    langToggleBtn.textContent = "EN";
    currentLang = "zh";
  }
});

// 回頂端按鈕
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// 導覽列滾動效果
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
