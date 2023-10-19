// Get references to the HTML elements in the document
var carousel = document.querySelector(".projects-carousel"); // Reference to the carousel container
var nextButton = document.querySelector("#nextButton"); // Reference to the "Next" button
var prevButton = document.querySelector("#prevButton"); // Reference to the "Previous" button
var carouselCardWidth = 480; // Width of each carousel card in pixels
// Initialize the index to keep track of the current image
var currentIndex = 0;
// Function to display the next image in the carousel
/**
 * Displays the next image in the carousel.
 */
function nextImage() {
    currentIndex++;
    if (currentIndex > 3) {
        currentIndex = 0;
    }
    updateCarousel();
    console.log("test");
}
/**
 * Displays the previous image in the carousel.
 */
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 3;
    }
    updateCarousel();
}
/**
 * Updates the position of elements in the carousel based on the current index.
 */
function updateCarousel() {
    var newPosition = -currentIndex * carouselCardWidth;
    if (carousel !== null) {
        carousel.style.transform = "translateX(".concat(newPosition, "px)");
    }
}
// Add event listeners to the "Next" and "Previous" buttons
if (nextButton !== null && prevButton !== null) {
    nextButton.addEventListener("click", nextImage); // When the "Next" button is clicked, call nextImage function
    prevButton.addEventListener("click", prevImage); // When the "Previous" button is clicked, call prevImage function
}
