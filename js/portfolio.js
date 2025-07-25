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

// 導覽列滾動效果
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
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
