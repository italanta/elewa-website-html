
// Sample card data (replace with your own data)
const cardData: Card[] = [
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679665800/elewa-group-website/elewa-team-members/jeff-elewa_hdupp7.jpg',
    imageAlt: 'Image 1',
    buttonText: 'Learn More',
    cardTitle: 'Card 1',
    cardDescription: 'Description for Card 1',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,h_1000/v1682586211/IMG_9755_vfprhm.jpg',
    imageAlt: 'Image 2',
    buttonText: 'Learn More',
    cardTitle: 'Card 2',
    cardDescription: 'Description for Card 2',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/frank-elewa_kihn9e.jpg',
    imageAlt: 'Image 3',
    buttonText: 'Learn More',
    cardTitle: 'Card 3',
    cardDescription: 'Description for Card 3',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg',
    imageAlt: 'Image 4',
    buttonText: 'Learn More',
    cardTitle: 'Card 4',
    cardDescription: 'Description for Card 4',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg',
    imageAlt: 'Image 5',
    buttonText: 'Learn More',
    cardTitle: 'Card 5',
    cardDescription: 'Description for Card 5',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/peter-elewa_zuzovx.jpg',
    imageAlt: 'Image 6',
    buttonText: 'Learn More',
    cardTitle: 'Card 6',
    cardDescription: 'Description for Card 6',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg',
    imageAlt: 'Image 7',
    buttonText: 'Learn More',
    cardTitle: 'Card 7',
    cardDescription: 'Description for Card 7',
  },

  // Duplicate the  first card for seamless looping
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679665800/elewa-group-website/elewa-team-members/jeff-elewa_hdupp7.jpg',
    imageAlt: 'Image 1',
    buttonText: 'Learn More',
    cardTitle: 'Card 1',
    cardDescription: 'Description for Card 1',
  },
  
  
];

interface Card {
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  cardTitle: string;
  cardDescription: string;
}

const cardContainer = document.getElementById('carousel-list') as HTMLElement;
const scrollLeftBtn = document.getElementById('scroll-left') as HTMLElement;
const scrollRightBtn = document.getElementById('scroll-right') as HTMLElement;
const cardWidth = 513; // Adjust this value according to your card width in pixels
let currentOffset = 0;//this is the index of the card in the array

// Number of cards visible at a time in th carousel-list div
const visibleCards = 4;

// Function to create a card element from card data
function createCardElement(card: Card): HTMLElement {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerHTML = `
    <div class="card-img-box">
      <img class="card-img" src="${card.imageUrl}" alt="${card.imageAlt}">
    </div>
    <div class="btn-box">
      <div class="btn-text">${card.buttonText}</div>
    </div>
    <div>
      <div class="card-header">${card.cardTitle}</div>
      <div class="card-description">${card.cardDescription}</div>
    </div>
  `;
  return cardElement;
}

// Function to add cards to the carousel
function addCardsToCarousel(cards: Card[]): void {
  cards.forEach((card) => {
    const cardElement = createCardElement(card);
    cardContainer.appendChild(cardElement);//where cardContainer is the div with id->"carousel-list"
  });
}

//functionality for the 'prev' button
scrollLeftBtn.addEventListener('click', () => {
  console.log("prev btn clicked");
  const maxOffset = cardData.length;
  if (currentOffset > 0) {
    currentOffset -= 1;
  } else {
    // If at the first card, set the offset to the last card for a reverse loop
    currentOffset = maxOffset - visibleCards;
  }
  updateCarousel();
});

//functionality for the 'next' button
scrollRightBtn.addEventListener('click', () => {
  console.log("next btn clicked");
  const maxOffset = cardData.length;
  if (currentOffset + visibleCards < maxOffset) {
    currentOffset += 1;
  } else {
    // If the current card is the last one, set the offset to the first card
    currentOffset = 0;
  }
  updateCarousel();
});

// Function to update the position of the card carousel
function updateCarousel(): void {
  cardContainer.style.transform = `translateX(${-currentOffset * cardWidth}px)`;
}

// Initial position of the carousel
addCardsToCarousel([...cardData, ...cardData]);
updateCarousel();
