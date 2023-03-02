

const hamburgerButton = document.querySelector(".hamburger-container");
const closeButton = document.querySelector(".x-button-container");
const menu = document.querySelector(".navbar");


const toggle = function() {
    hamburgerButton.classList.toggle("active");
    closeButton.classList.toggle("active");
    menu.classList.toggle("open");
}

hamburgerButton.addEventListener("click", toggle)


closeButton.addEventListener("click", toggle)
