const slides = document.querySelectorAll('.slide');
let index = 0;

function prevSlide(){
slides[index].classList.remove('active');
index--;

if(index < 0)
index = slides.length -1;

slides[index].classList.add('active'); 
}

document.querySelector('.bottom-btn1').addEventListener('click', e => {
prevSlide();
});

function nextSlide(){
slides[index].classList.remove('active');
index++;

if(index > slides.length -1)
index = 0;

slides[index].classList.add('active'); 
}

document.querySelector('.bottom-btn2').addEventListener('click', e => {
nextSlide();
});
