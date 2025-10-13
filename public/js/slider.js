document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const intervalTime = 3000; // 3 seconds

  function nextSlide() {
    // Remove active from current
    slides[currentIndex].classList.remove('active');

    // Calculate next index
    currentIndex = (currentIndex + 1) % slides.length;

    // Add active to next slide
    slides[currentIndex].classList.add('active');
  }

  // Start slider
  setInterval(nextSlide, intervalTime);
});
