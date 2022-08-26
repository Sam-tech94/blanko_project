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


// slider

let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

// clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}    

function showAll() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "block";
    }
}

//init slider
function startSlide() {
    reset();
    sliderImages[current].style.display = "block";
}

//show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

//left arrow click
arrowLeft.addEventListener("click", () => {
    if (current === 0) {
        current = sliderImages.length;
    }

    slideLeft();
})

//right arrow click
arrowRight.addEventListener("click", () => {
    if (current === sliderImages.length - 1) {
        current = -1;
    }

    slideRight();
});

const sliding = () => window.innerWidth <= 900 ? startSlide() : showAll();

window.addEventListener('resize', sliding, true); 

sliding()




