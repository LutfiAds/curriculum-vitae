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

  // Gallery: show placeholder when image fails or is too small to display
  function initGalleryPlaceholders() {
    const galleryImages = document.querySelectorAll(".gallery-media img");

    galleryImages.forEach(function (img) {
      function showPlaceholder() {
        const media = img.closest(".gallery-media");
        if (media) {
          media.classList.add("is-placeholder");
        }
      }

      img.addEventListener("error", showPlaceholder);

      if (img.complete) {
        if (!img.naturalWidth || img.naturalWidth < 50) {
          showPlaceholder();
        }
      } else {
        img.addEventListener("load", function () {
          if (!img.naturalWidth || img.naturalWidth < 50) {
            showPlaceholder();
          }
        });
      }
    });
  }

  initGalleryPlaceholders();

  // Initial check in case page loads scrolled
  handleScroll();
})();
