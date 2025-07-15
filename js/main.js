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

// 打字機效果（支援多句切換）
document.addEventListener("DOMContentLoaded", function () {
  const texts = ["Hello!", "I'am Abby💗"];
  const target = document.getElementById("typewriter");
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (!target) return;

    if (charIndex < texts[textIndex].length) {
      target.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        target.textContent = "";
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        type();
      }, 2000);
    }
  }

  type();
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

// 滾動出現動畫
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
