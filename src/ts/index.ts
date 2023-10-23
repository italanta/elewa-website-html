
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
  imgSrc: "/src/images/Education.jpg"
};
console.log(projectOne)

// project two
const projectTwo: ProjectItem = {
  title: "Content Development for a sustainable future",
  description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
  tag: "Environment",
  imgSrc: "/src/images/Environment.jpg"
};
console.log(projectTwo)

// project three
const projectThree: ProjectItem = {
  title: "Largescale training for healthcare professionals",
  description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
  tag: "Healthcare",
  imgSrc: "/src/images/Healthcare.jpg"
};
console.log(projectThree)

// project four
const projectFour: ProjectItem = {
  title: "Introducing conversational learning",
  description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
  tag: "Education",
  imgSrc: "/src/images/Learning.jpg"
};
console.log(projectFour)

// function that allows the carousel to respond
const leftBtn = document.getElementById("left"); // targeting the buttons
const rightBtn = document.getElementById("right");
const projectsContainer = document.querySelector(".projects") as HTMLElement; // targeting the projects container. The HTMLElements helps in making the style a property of the container.

leftBtn?.addEventListener("click", function handleClick (event) {
  console.log("clicked")
  projectsContainer.style.transition = "transform 0.5s";
  projectsContainer.style.transform = "translateX(-200px)";
});

rightBtn?.addEventListener("click", function handleClick (event) {
  console.log("clicked")
  projectsContainer.style.transition = "transform 0.5s";
  projectsContainer.style.transform = "translateX(200px)";
});
document.addEventListener("DOMContentLoaded", () => {
    //Declare variables for the elements of the html 
    const icon = document.getElementById("icon");
    const iconTwo = document.getElementById("icontwo");
    const ul = document.querySelector("ul");
    //condition to check if the icon,icontwo and ul exist
    if (icon && iconTwo && ul) {
        //When fa-bars is clicked it adds the show class,then it's replaced with the fa-times
      icon.addEventListener("click", () => {
        ul.classList.add("show");
        icon.style.display = "none";
        iconTwo.style.display = "block";
      });
      //when fa-times is clicked it removes the .show class, then it's display is replaced with the fa-bars
      iconTwo.addEventListener("click", () => {
        ul.classList.remove("show");
        icon.style.display = "block";
        iconTwo.style.display = "none";
      });
    }
  });
