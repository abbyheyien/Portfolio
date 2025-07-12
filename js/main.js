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
document.querySelectorAll(".lang-option").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const selectedLang = this.getAttribute("data-lang");
    document.querySelectorAll("[data-lang]").forEach((el) => {
      el.style.display =
        el.getAttribute("data-lang") === selectedLang ? "" : "none";
    });
  });
});

// 回頂端按鈕
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// 打字機效果
document.addEventListener("DOMContentLoaded", function () {
  const text = "Hello! Welcome to my website💗";
  const target = document.getElementById("typewriter");
  let index = 0;

  function type() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        target.textContent = "";
        index = 0;
        type();
      }, 2000);
    }
  }

  type();
});
