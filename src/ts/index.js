// defining the interface objects for the projectItems
// JSDoc comment
// This is the data contained in the project one as displayed on the html
// project one
var projectOne = {
    title: "Introducing conversational learning",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Education",
    imgSrc: "/assets/images/book2 (1).jpg"
};
// project two
var projectTwo = {
    title: "Content Development for a sustainable future",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Environment",
    imgSrc: "/assets/images/environment (1).jpg"
};
// project three
var projectThree = {
    title: "Largescale training for healthcare professionals",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Healthcare",
    imgSrc: "/assets/images/doctor (1).jpeg"
};
// project four
var projectFour = {
    title: "Introducing conversational learning",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Education",
    imgSrc: "/assets/images/tree me (1).jpg"
};
// Get references to the elements
var prevButton = document.querySelector(".bottom-btn1"); // Targeting the buttons
var nextButton = document.querySelector(".bottom-btn2");
var slides = document.querySelectorAll(".card"); // Targeting the projects container
var index = 0;
function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0.3';
        slides[i].classList.remove('active');
    }
    slides[index].style.opacity = '1';
    slides[index].classList.add('active');
}
prevButton === null || prevButton === void 0 ? void 0 : prevButton.addEventListener('click', function () {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    showSlide(index);
});
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener('click', function () {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
});
showSlide(index);
