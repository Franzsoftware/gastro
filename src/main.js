import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


// Hover categorias 

const cards = document.querySelectorAll('.cat');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover');
    })

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
    })
});

// Hamburger menú

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const icon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');

    if(nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});


