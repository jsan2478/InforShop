

const hamburgerButton = document.querySelector(".hamburger-container");
const closeButton = document.querySelector(".x-button-container");
const menu = document.querySelector(".navbar");



hamburgerButton.addEventListener("click", function() {
    hamburgerButton.classList.toggle("active");
    closeButton.classList.toggle("active");
    menu.classList.toggle("open");
})


closeButton.addEventListener("click", function() {
    hamburgerButton.classList.toggle("active");
    closeButton.classList.toggle("active");
    menu.classList.toggle("open");
})
