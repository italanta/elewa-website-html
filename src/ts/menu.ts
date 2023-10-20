// responsive navbar
const menubtn = document.querySelector('.menu');
const menuicon = document.querySelector('.material-symbols-outlined');
const menudetails: HTMLElement | any = document.querySelector('.links');

menubtn?.addEventListener('click', () =>{
  menudetails.style.display = "flex"
  menudetails.style.flexDirection = "column"
})
