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