// Get references to the elements
const slides = document.querySelectorAll('.card');
const prevButton = document.querySelector('.bottom-btn1');
const nextButton = document.querySelector('.bottom-btn2');
// const cardContainer = document.querySelector('.card-container');

let index = 0;

// Function to show a specific slide
function showSlide(index) {
  for (let i = 1; i < slides.length; i++) {
    slides[i].style.opacity = '0.2';
    slides[i].classList.remove('active');
  }
  slides[index].style.opacity = '1';
  slides[index].classList.add('active');
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(index);
});

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
});

// Initialize by showing the first slide
showSlide(index);
