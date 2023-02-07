const menuBtn = document.querySelector(".burger-menu-btn");
const navMenu = document.querySelector(".mobile-nav");
const documentBodyRef= document.querySelector('body')

menuBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    documentBodyRef.classList.toggle("lock");   
    if (navMenu.classList.contains('active')) {
        documentBodyRef.classList.add('lock');
    }
}

// SCROLL on CLICK

const navLink = document.querySelectorAll(".menu-list__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("active");
    documentBodyRef.classList.remove('lock');
}

