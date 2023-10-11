// responsive navbar
const toggleBtn: HTMLElement | null = document.querySelector('.toggle_btn');
const toggleBtnIcon: HTMLElement | null = document.querySelector('.toggle_btn i');
const dropDownMenu: HTMLElement | null = document.querySelector('.navbar_dropdown_menu');

if (toggleBtn && toggleBtnIcon && dropDownMenu) {
  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen: boolean = dropDownMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  };
}
console.log(dropDownMenu);