window.addEventListener("scroll", () => {
  const navigationPage = document.querySelector(".navigation-page");
  if (window.scrollY > 0) {
    navigationPage.classList.add("scrolled");
  } else {
    navigationPage.classList.remove("scrolled");
  }
});
