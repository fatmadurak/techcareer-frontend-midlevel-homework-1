const wrapper = document.querySelector(".wrapper");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    wrapper.classList.add("scrolled");
  } else {
    wrapper.classList.remove("scrolled");
  }
});
