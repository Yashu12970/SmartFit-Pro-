// MOBILE MENU

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", function () {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuIcon.innerHTML = '<i class="ri-close-line"></i>';
    } else {
        menuIcon.innerHTML = '<i class="ri-menu-line"></i>';
    }

});


// CLOSE MENU WHEN CLICKING A LINK

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

        menuIcon.innerHTML = '<i class="ri-menu-line"></i>';

    });

});


// CONTACT FORM

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for contacting SmartFit Pro!");

    contactForm.reset();

});