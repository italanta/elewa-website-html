// TypeScript code in your index.ts file

// Sample card data (replace with your own data)
const cardData: Card[] = [
    {
      imageUrl: 'https://your-image-url1.jpg',
      imageAlt: 'Image 1',
      buttonText: 'Learn More',
      cardTitle: 'Card 1',
      cardDescription: 'Description for Card 1',
    },
    {
      imageUrl: 'https://your-image-url2.jpg',
      imageAlt: 'Image 2',
      buttonText: 'Learn More',
      cardTitle: 'Card 2',
      cardDescription: 'Description for Card 2',
    },
    // Add more card data objects as needed
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
  let currentOffset = 0;
  
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
      cardContainer.appendChild(cardElement);
    });
  }
  
  // Event listener for the "Scroll Left" button
  scrollLeftBtn.addEventListener('click', () => {
    if (currentOffset > 0) {
      currentOffset -= 1;
      updateCarousel();
    }
  });
  
  // Event listener for the "Scroll Right" button
  scrollRightBtn.addEventListener('click', () => {
    const maxOffset = Math.max(0, cardContainer.children.length - 4);
    if (currentOffset < maxOffset) {
      currentOffset += 1;
      updateCarousel();
    }
  });
  
  // Function to update the position of the card carousel
  function updateCarousel(): void {
    cardContainer.style.transform = `translateX(${-currentOffset * cardWidth}px)`;
  }
  
  // Initial position of the carousel
  addCardsToCarousel(cardData);
  updateCarousel();