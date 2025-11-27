const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

function toggleMenu() {
  const isExpanded = burgerMenu.getAttribute("aria-expanded") === "true";
  burgerMenu.setAttribute("aria-expanded", !isExpanded);
  navMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  body.classList.toggle("menu-open");
}

burgerMenu.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    burgerMenu.classList.remove("active");
    burgerMenu.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
  });
});

document.addEventListener("click", (e) => {
  if (
    body.classList.contains("menu-open") &&
    !navMenu.contains(e.target) &&
    !burgerMenu.contains(e.target)
  ) {
    toggleMenu();
  }
});
