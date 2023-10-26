// defining the interface objects for the projectItems
// JSDoc comment

/**
 * Interface for classes that represent a project.
 */
interface ProjectItem {
    title: string;
    description: string;
    tag: string;
    imgSrc: string;
  }
  
  // This is the data contained in the project one as displayed on the html
  
  // project one
  const projectOne: ProjectItem = {
    title: "Introducing conversational learning",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Education",
    imgSrc: "/assets/images/book2 (1).jpg"
  };

  
  // project two
  const projectTwo: ProjectItem = {
    title: "Content Development for a sustainable future",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Environment",
    imgSrc: "/assets/images/environment (1).jpg"
  };
  
  // project three
  const projectThree: ProjectItem = {
    title: "Largescale training for healthcare professionals",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Healthcare",
    imgSrc: "/assets/images/doctor (1).jpeg"
  };
  
  // project four
  const projectFour: ProjectItem = {
    title: "Introducing conversational learning",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Education",
    imgSrc: "/assets/images/tree me (1).jpg"
  };

 // Get references to the elements
const prevButton = document.querySelector<HTMLButtonElement>(".bottom-btn1"); // Targeting the buttons
const nextButton = document.querySelector<HTMLButtonElement>(".bottom-btn2");
const slides = document.querySelectorAll<HTMLDivElement>(".card"); // Targeting the projects container
let index: number = 0;

function showSlide(index: number) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = '0.3';
    slides[i].classList.remove('active');
  }
  slides[index].style.opacity = '1';
  slides[index].classList.add('active');
  }


prevButton?.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(index);
});

nextButton?.addEventListener('click', () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
});

showSlide(index);

