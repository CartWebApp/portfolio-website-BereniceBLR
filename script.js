let currentPage = 0;
const pages = document.querySelectorAll('.page');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentCarouselIndex = 0;

// Flip pages on next/prev buttons
document.getElementById('next').addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add('flipped');
    currentPage++;
  }
  updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove('flipped');
  }
  updateCarousel();
});

// Function to update carousel images on page flips
function updateCarousel() {
  if (pages[currentPage].classList.contains('carousel-page')) {
    carouselItems[currentCarouselIndex].style.transform = 'translateX(-100%)'; // Slide current image out
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
    carouselItems[currentCarouselIndex].style.transform = 'translateX(0)'; // Slide new image in
  }
}


