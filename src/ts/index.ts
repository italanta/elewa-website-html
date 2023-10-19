const carouselList = document.getElementById('carousel-list');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const cardWidth = 474; // Adjust this value according to your card width in pixels
const maxVisibleCards = 4;
let currentOffset = 0;

// Function to update the position of the card carousel
function updateCarousel() {
  carouselList.style.transform = `translateX(${-currentOffset * cardWidth}px)`;
}

// Event listener for the "Scroll Left" button
scrollLeftBtn.addEventListener('click', () => {
  if (currentOffset > 0) {
    currentOffset -= 1;
    updateCarousel();
  }
});

// Event listener for the "Scroll Right" button
scrollRightBtn.addEventListener('click', () => {
  if (currentOffset < Math.ceil(carouselList.children.length / maxVisibleCards) - 1) {
    currentOffset += 1;
    updateCarousel();
  }
});

// Initial position of the carousel
updateCarousel();