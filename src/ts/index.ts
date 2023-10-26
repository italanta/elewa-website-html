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
  interface ProjectItem{
  title:string
  descriptions:string
  tag:string
  imgSrc:string
}
const description="Eos qui ratione voluptatem suqui nesciunt.Neque porro quisquam dolorem ipsum quia"
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
    imgSrc:"https://rb.gy/5ygcu",
    tag:"Health care",
    title:"Large scale training for healthcare professionals",
    descriptions:description
  },
  {
    imgSrc:"https://rb.gy/5ygcu",
    tag:"Health care",
    title:"Large scale training for healthcare professionals",
    descriptions:description
  },
  {
    imgSrc:"https://rb.gy/5ygcu",
    tag:"Health care",
    title:"Large scale training for healthcare professionals",
    descriptions:description
  },
  {
    imgSrc:"https://rb.gy/5ygcu",
    tag:"Health care",
    title:"Large scale training for healthcare professionals",
    descriptions:description
  },
  {
    imgSrc:"https://rb.gy/5ygcu",
    tag:"Health care",
    title:"Large scale training for healthcare professionals",
    descriptions:description
  },
]
const projectCardsContainer = document.querySelector('.project-cards');

if (projectCardsContainer) {
  mockProject.forEach((project) => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const img = document.createElement('img');
    img.src = project.imgSrc;
    card.appendChild(img);

    const tag = document.createElement('span');
    tag.textContent = project.tag;
    card.appendChild(tag);

    const title = document.createElement('h2');
    title.textContent = project.title;
    card.appendChild(title);

    const description = document.createElement('p');
    description.textContent = project.descriptions;
    card.appendChild(description);

    

    // Append the card to the container
    projectCardsContainer.appendChild(card);
const scrollLeftButton = document.getElementById('scroll-left') as HTMLButtonElement;
const scrollRightButton = document.getElementById('scroll-right') as HTMLButtonElement;
const scrollStep = 200; // Adjust this value as needed

scrollLeftButton.addEventListener('click', () => {
  if (projectCardsContainer) {
    projectCardsContainer.scrollBy({
      left: -scrollStep,
      behavior: 'smooth',
    });
  }
});

scrollRightButton.addEventListener('click', () => {
  if (projectCardsContainer) {
    projectCardsContainer.scrollBy({
      left: scrollStep,
      behavior: 'smooth',
    });
  }
});

  });
 }
 
});
  