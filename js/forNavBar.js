const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");


hamburger.addEventListener("click", mobileMenu);
navLink.item(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("act");
    navMenu.classList.toggle("act");
}

function closeMenu() {
    hamburger.classList.remove("act");
    navMenu.classList.remove("act");
}
