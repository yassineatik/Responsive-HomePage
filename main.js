const nav = document.querySelector("nav");
const mobileNav = document.querySelector('nav.mobile-nav');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileMenu = document.querySelector('.mobile-menu-container');
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 700) {
        nav.classList.add('scrolled')
        mobileNav.classList.add('scrolled')
    } else {
        nav.classList.remove("scrolled")
        mobileNav.classList.remove("scrolled")
    }
})

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.add('active');
})

closeIcon.addEventListener("click", () => {
    mobileMenu.classList.remove('active');
})