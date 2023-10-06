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
const navLinks = document.getElementById("navLinks");
const contactButton = document.getElementById("contactButton");


lineButton?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
  contactButton?.classList.toggle("open");

});
