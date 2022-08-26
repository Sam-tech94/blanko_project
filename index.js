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

//init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
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


// setInterval(function(){
//     const styles = window.getComputedStyle(arrowRight);
//     const display = styles.getPropertyValue('display');
//     if(display == 'block') {
//         startSlide()
//     }
//     // else{
//     //     reset()
//     // }
// }, 1)


