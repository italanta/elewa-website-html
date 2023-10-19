// Get references to the HTML elements in the document
const carousel: HTMLElement | null = document.querySelector(".projects-carousel"); // Reference to the carousel container
const nextButton: HTMLElement | null = document.querySelector("#nextButton"); // Reference to the "Next" button
const prevButton: HTMLElement | null = document.querySelector("#prevButton"); // Reference to the "Previous" button
const carouselCardWidth: number = 480; // Width of each carousel card in pixels

// Initialize the index to keep track of the current image
let currentIndex: number = 0;

// Function to display the next image in the carousel
/**
 * Displays the next image in the carousel.
 */
function nextImage (): void {
  currentIndex++;
  if (currentIndex > 3) {
    currentIndex = 0;
  }
  updateCarousel();
}

/**
 * Displays the previous image in the carousel.
 */
function prevImage (): void {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 3;
  }
  updateCarousel();
}

/**
 * Updates the position of elements in the carousel based on the current index.
 */
function updateCarousel (): void {
  const newPosition: number = -currentIndex * carouselCardWidth;
  if (carousel !== null) {
    carousel.style.transform = `translateX(${newPosition}px)`;
  }
}

// Add event listeners to the "Next" and "Previous" buttons
if (nextButton !== null && prevButton !== null) {
  nextButton.addEventListener("click", nextImage); // When the "Next" button is clicked, call nextImage function
  prevButton.addEventListener("click", prevImage); // When the "Previous" button is clicked, call prevImage function
}
