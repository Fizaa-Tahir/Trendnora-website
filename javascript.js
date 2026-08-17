document.addEventListener("DOMContentLoaded", function () {

  /* ================= HERO SLIDER ================= */
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  if (slides.length > 0) {
    showSlide(current);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });
  }

  /* ================= NEW IN SWIPER ================= */
  if (typeof Swiper !== "undefined") {
    new Swiper(".newInSwiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 2800,
        disableOnInteraction: false,
      }
    });
  }

});
