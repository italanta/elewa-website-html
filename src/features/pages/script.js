
// selectors
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// event listner then using toggle()
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//selecting each link in the navbar 
document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () =>{
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    
}))