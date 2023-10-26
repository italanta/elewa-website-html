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

  
  // function that allows the carousel to respond
  const prevButton = document.querySelector<HTMLButtonElement>("bottom-btn1"); // targeting the buttons
  const nextButton = document.querySelector<HTMLButtonElement>("bottom-btn2");
  const slides = document.querySelectorAll<HTMLDivElement>(".card"); // targeting the projects container. The HTMLElements helps in making the style a property of the container.
  const slideContainer = document.querySelector<HTMLDivElement>("card-container")
  let index: number = 0;
  // console.log(slides)


  function showSlide(index : number) {
    for(let i = 0; i < slides.length; i++) {
      console.log(slides[i]);
      slides[i].style.opacity= '0.3';
      slides[i].classList.remove('active');
    }
    slides[index].style.opacity='1';
    slides[index].classList.add('active');
    if (slideContainer) {
      slideContainer.style.transform = `translateX(-$(index * 100)%)`;
    }
  }

  // for(let i = 0; i < slides.length; i++) {
  //   console.log(slides[i]);
  //   slides[i].style.opacity= '0.3';
  //   slides[i].classList.remove('active');
  // }
  // slides[index].style.opacity='1';
  // slides[index].classList.add('active');
  // if (slideContainer) {
  //   slideContainer.style.transform = `translateX(-$(index * 100)%)`;
  // }

prevButton?.addEventListener('click',()=>{
  index--;
  if(index < 0){
    index=slides.length-1;
  }
  showSlide(index);
})

nextButton?.addEventListener('click',()=>{
  index++;
  if(index >= slides.length){
    index= 0;
  }
  showSlide(index);
})

showSlide(index)












  // prevButton?.addEventListener("click", function handleClick (event) {
  //   console.log("clicked")
  //   slides.style.transition = "transform 0.5s";
  //   slides.style.transform = "translateX(-200px)";
  // });
  
  // nextButton?.addEventListener("click", function handleClick (event) {
  //   console.log("clicked")
  //   slides.style.transition = "transform 0.5s";
  //   slides.style.transform = "translateX(200px)";
  // });
  // document.addEventListener("DOMContentLoaded", () => {
  //     //Declare variables for the elements of the html 
  //     const icon = document.querySelector("icon");
  //     const iconTwo = document.querySelector("icontwo");
  //     const ul = document.querySelector("ul");
  //     //condition to check if the icon,icontwo and ul exist
  //     if (icon && iconTwo && ul) {
  //         //When fa-bars is clicked it adds the show class,then it's replaced with the fa-times
  //       icon.addEventListener("click", () => {
  //         ul.classList.add("show");
  //         icon.style.display = "none";
  //         iconTwo.style.display = "block";
  //       });
  //       //when fa-times is clicked it removes the .show class, then it's display is replaced with the fa-bars
  //       iconTwo.addEventListener("click", () => {
  //         ul.classList.remove("show");
  //         icon.style.display = "block";
  //         iconTwo.style.display = "none";
  //       });
  //     }
  //   });