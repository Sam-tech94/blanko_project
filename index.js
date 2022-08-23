const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".fa-solid")
const closeMenu = document.querySelectorAll(".nav_a");


hamburger.addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("active")
    close.classList.toggle("fa-bars")
    close.classList.toggle("fa-xmark")
})


function remove_active(){
    document.querySelector(".nav").classList.remove("active")
    close.classList.add("fa-bars")
    close.classList.remove("fa-xmark")
}

closeMenu.forEach((close) => {
    close.addEventListener("click", remove_active)
})