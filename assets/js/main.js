
  document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  
  // Select both desktop and mobile toggles
  const themeToggles = document.querySelectorAll("#themeToggle, #themeTogglemobile");
  const rtlToggles = document.querySelectorAll("#rtlToggle, #rtlTogglemobile");

  // MENU TOGGLE
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("hidden");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  });

  // DARK MODE (Syncs across all buttons)
  themeToggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      themeToggles.forEach(t => t.textContent = isDark ? "☀️" : "🌙");
    });
  });

  // RTL MODE (Syncs across all buttons)
  rtlToggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const isRTL = document.documentElement.dir === "rtl";
      document.documentElement.dir = isRTL ? "ltr" : "rtl";
    });
  });
});
