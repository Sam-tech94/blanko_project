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
const reset = () => {
    sliderImages.forEach(slide => slide.style.display = "none");
}    

const showAll = () => {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "block";
    }

}

//init slider
const startSlide = () => {
    reset();
    sliderImages[current].style.display = "block";
}

//show prev
const slideLeft = () => {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// show next
const  slideRight = () => {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

const moveSlideLeft = () => {
    if (current === 0) {
        current = sliderImages.length;
    }

    slideLeft();
};

//left arrow click
arrowLeft.addEventListener("click", moveSlideLeft)

const moveSlideRight = () => {
    if (current === sliderImages.length - 1) {
        current = -1;
    }

    slideRight();
};



//right arrow click
arrowRight.addEventListener("click", moveSlideRight);

const sliding = () => window.innerWidth <= 900 ? startSlide() : showAll();

window.addEventListener('resize', sliding, true); 

sliding()


// popup sign-in

document.getElementById("sign_in_active").addEventListener("click", () => {
    document.querySelector(".div_form").classList.add("active")
    document.body.style.opacity = "0.9"
});

document.querySelector(".div_form .close_btn").addEventListener("click", () => {
    document.querySelector(".div_form").classList.remove("active")
    document.body.style.opacity = "1";
})



