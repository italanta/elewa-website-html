import { modelNames } from "mongoose";

const openModalButton: HTMLElement | null =
  document.getElementById("open-modal-button");
const closeModalButton: HTMLElement | null =
  document.getElementById("closeModal");
const modal: HTMLElement | null = document.getElementById("modal");
//function to open the modal
function openModal() {
  if (modal) {
    modal.style.display = "block";
  }
}
//function to close the modal
function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }
}

// Event listeners
if (openModalButton) {
  openModalButton.addEventListener("click", openModal);
}

if (closeModalButton) {
  closeModalButton.addEventListener("click", closeModal);
}

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (modal && event.target === modal) {
    closeModal();
  }
});
