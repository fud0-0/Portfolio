let currentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
  const images = window.sliderImages; // <-- grab the global array
  const sliderImage = document.getElementById("slider-image");

  function showImage(index) {
    if (images && images.length > 0) {
      sliderImage.src = images[index];
    }
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  // Expose the controls globally so your HTML buttons work
  window.prevSlide = prevSlide;
  window.nextSlide = nextSlide;

  showImage(currentIndex);
});
