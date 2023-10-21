// navigationPage interaction

const navPage = document.querySelector(".navigation-page");

window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    navPage.classList.add("navbar-scrolled");
  } else if (window.scrollY < 5) {
    navPage.classList.remove("navbar-scrolled");
  }
});
