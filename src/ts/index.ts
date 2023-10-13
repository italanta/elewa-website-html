const prevBtn= document.querySelector("#scroll-left");
const nextBtn= document.querySelector("#scroll-right");
const carouselSlide=document.querySelector("#carousel-list");
const carouselCards=document.querySelector(".card");

let counter: number=1;
/*carouselCards is an array of cards having data like images,description etc*/
//const size= carouselCards[0].clientWidth;
//carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
 //button listeners

nextBtn.addEventListener('click',()=>{
    console.log("nextBtn clicked")
})