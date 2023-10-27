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
    //structure for the mock data
    interface ProjectItem{
      title:string
      descriptions:string
      tag:string
      imgSrc:string
    }
    
    //Constant description to cut out repetition
    const description="Eos qui ratione voluptatem suqui nesciunt.Neque porro quisquam dolorem ipsum quia"
    
    //The actual Mock data
    const mockProject:ProjectItem[]=[
      {
        imgSrc:"https://rb.gy/5ygcu",
        tag:"Education",
        title:"Introducting Coversational learning ipsum dolar",
        descriptions:description
      },
      {
        imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
        tag:"Environment",
        title:"Content development for a sustainable future",
        descriptions:description
      },
      {
        imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
        tag:"Health care",
        title:"Large scale trainin for healthcare professionals",
        descriptions:description
      },
      {
        imgSrc:"https://rb.gy/5ygcu",
        tag:"Education",
        title:"Introducting Coversational learning ipsum dolar",
        descriptions:description
      },
      {
        imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
        tag:"Environment",
        title:"Content development for a sustainable future",
        descriptions:description
      },
      {
        imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
        tag:"Health care",
        title:"Large scale training for healthcare professionals",
        descriptions:description
      },
      {
        imgSrc:"https://rb.gy/5ygcu",
        tag:"Education",
        title:"Introducting Coversational learning ipsum dolar",
        descriptions:description
      },
      {
        imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
        tag:"Environment",
        title:"Content development for a sustainable future",
        descriptions:description
      },
      {
        imgSrc:"https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg",
        tag:"Health care",
        title:"Large scale training for healthcare professionals",
        descriptions:description
      },
    ]
    //Get the div element from the html
    const projectsDisplay=document.getElementById("projects-display") as HTMLDivElement
    console.log(projectsDisplay)
    //iterate over the mock data to display them in cards
    mockProject.forEach((project)=>{
      const card = document.createElement("div");
        card.className = "project";
      //image for mock data
        const img = document.createElement("img");
        img.src = project.imgSrc;
        img.alt = project.title;
        //title for mock data
        const h2 = document.createElement("h2");
        h2.textContent = project.title;
        //paragraph for mock data
        const p = document.createElement("p");
        p.textContent = project.descriptions;
        //span for mock data
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = project.tag;
        card.append(img,span, h2, p);
        projectsDisplay.appendChild(card);
    })
    //Grab the arrows from the html
    const leftArrow=document.getElementById("left-arrow")
    const rightArrow=document.getElementById("right-arrow")
    //Initial scroll position set to 0
    let scrollPosition=0;
    //My image width initial being 300px 
    const imageWidth=300;

    //Event listener to handle the left arrow click
    leftArrow?.addEventListener('click',()=>{
     scrollPosition-=imageWidth
     //Condition of reaching far left end of the page
     if(scrollPosition<0){
      scrollPosition=0
     }
     //Apply the scroll method on the project to scroll items to the left
     projectsDisplay.scroll({
      left:scrollPosition,
      behavior:"smooth"
     })
    })

    //Event listener to handle right arrow click
    rightArrow?.addEventListener("click", () => {
      //Scroll position set as equal to image width
      scrollPosition += imageWidth;
      //Condition checking whether we have reached the end of our page
      if (scrollPosition > projectsDisplay.scrollWidth - projectsDisplay.clientWidth) {
        scrollPosition = projectsDisplay.scrollWidth - projectsDisplay.clientWidth;
      }
      //Apply the scroll method on the project to scroll items to the right
      projectsDisplay.scroll({
        left: scrollPosition,
        behavior: "smooth",
      });
    });
    
    
    })

    // menu ts

    document.addEventListener("DOMContentLoaded", function () {
  let isX = false;

  function toggleLines() {
    const line1 = document.querySelector(".line1") as HTMLElement;
    const line2 = document.querySelector(".line2") as HTMLElement;
    const line3 = document.querySelector(".line3") as HTMLElement;

    if (isX) {
      line1.style.transform = "rotate(0deg)";
      line2.style.opacity = "1";
      line3.style.transform = "rotate(0deg)";
    } else {
      line1.style.transform = "rotate(45deg)";
      line2.style.opacity = "0";
      line3.style.transform = "rotate(-45deg)";
    }

    isX = !isX;
  }

  const lineButton = document.getElementById("lineButton");
  if (lineButton) {
    lineButton.addEventListener("click", toggleLines);
  }
});

const lineButton = document.getElementById("lineButton");
const navMiddle = document.getElementById("navMiddle");
const navRight = document.getElementById("navRight");

lineButton?.addEventListener("click", () => {
  navMiddle?.classList.toggle("open");
  navRight?.classList.toggle("open");
});
