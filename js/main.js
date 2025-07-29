document.addEventListener("DOMContentLoaded", () => {
  // =====================
  // 1. 中英切換（支援 data-lang）
  // =====================
  const langToggleBtn = document.getElementById("langToggle");
  let currentLang = "zh";
  if (langToggleBtn) {
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
  }

  // =====================
  // 2. 打字機效果
  // =====================
  const texts = ["Welcome to my website!"];
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

  // =====================
  // 3. 星星評分效果
  // =====================
  document.querySelectorAll(".star-rating").forEach((container) => {
    const max = 5;
    let current = Number(container.dataset.score) || max;
    for (let i = 1; i <= max; i++) {
      const star = document.createElement("span");
      star.innerHTML = "★";
      star.classList.add("star");
      star.dataset.value = i;
      container.appendChild(star);
    }

    const stars = container.querySelectorAll(".star");
    const updateStars = (value) => {
      stars.forEach((star) => {
        star.classList.toggle("active", Number(star.dataset.value) <= value);
      });
    };

    stars.forEach((star) => {
      star.addEventListener("mouseover", () => updateStars(star.dataset.value));
      star.addEventListener("mouseout", () => updateStars(current));
      star.addEventListener("click", () => {
        current = star.dataset.value;
        updateStars(current);
      });
    });

    updateStars(current);
  });

  // =====================
  // 4. 回頂端按鈕 + 滾動控制
  // =====================
  const backToTopBtn = document.getElementById("backToTop");
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (backToTopBtn)
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // =====================
  // 5. Intersection 滾動出現
  // =====================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // =====================
  // 6. 圖片點擊放大 Overlay
  // =====================
  const overlay = document.getElementById("imageOverlay");
  const overlayImage = document.getElementById("overlayImage");
  document.querySelectorAll(".zoomable").forEach((img) => {
    img.addEventListener("click", () => {
      if (overlay && overlayImage) {
        overlayImage.src = img.src;
        overlay.style.display = "flex";
      }
    });
  });
  if (overlay) {
    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
      overlayImage.src = "";
    });
  }

  // =====================
  // 7. 側邊導覽錨點高亮
  // =====================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".side-nav a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      if (pageYOffset >= section.offsetTop - 100) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href").includes(current)
      );
    });
  });

  // =====================
  // 8. 專案搜尋過濾
  // =====================
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const keyword = this.value.toLowerCase();
      document.querySelectorAll(".project-card").forEach((card) => {
        const text = card.innerText.toLowerCase();
        card.parentElement.style.display = text.includes(keyword) ? "" : "none";
      });
    });
  }

  // =====================
  // 9. 啟用 Bootstrap Tooltip
  // =====================
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
    new bootstrap.Tooltip(el);
  });
});
