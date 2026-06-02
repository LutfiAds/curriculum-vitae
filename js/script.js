/**
 * CV Website - Simple JavaScript
 * Back to Top button & Contact Me alert
 */

(function () {
  "use strict";

  const backToTopBtn = document.getElementById("backToTop");
  const contactMeBtn = document.getElementById("contactMeBtn");

  // Back to Top: show button when user scrolls down
  function handleScroll() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }

  // Back to Top: smooth scroll to top when clicked
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Contact Me: simple alert on click
  function handleContactClick(event) {
    alert("Thank you for visiting my CV website!");
  }

  window.addEventListener("scroll", handleScroll);
  backToTopBtn.addEventListener("click", scrollToTop);

  if (contactMeBtn) {
    contactMeBtn.addEventListener("click", handleContactClick);
  }

  // Initial check in case page loads scrolled
  handleScroll();
})();
