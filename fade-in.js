document.addEventListener("DOMContentLoaded", function () {
  const fadeIns = document.querySelectorAll(".fade-in");

  function checkFadeIn() {
    fadeIns.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        element.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkFadeIn);
  checkFadeIn();
});
