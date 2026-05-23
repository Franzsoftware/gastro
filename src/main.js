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

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const iconPath = document.getElementById('menuPath');

hamburger.addEventListener('click', () => {

    nav.classList.toggle('active');

    if(nav.classList.contains('active')) {

        iconPath.setAttribute(
            'd',
            'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 178.7 150.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 224 105.4 297.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 269.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 224l73.3-73.4z'
        );

    } else {

        iconPath.setAttribute(
            'd',
            'M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
        );

    }

});


// youtube

document.querySelectorAll('.youtube-lite').forEach(video => {

    video.addEventListener('click', () => {

        const iframe = document.createElement('iframe');

        iframe.src = `https://www.youtube-nocookie.com/embed/${video.dataset.videoid}?autoplay=1`;

        iframe.allowFullscreen = true;

        iframe.loading = "lazy";

        iframe.referrerPolicy = "strict-origin-when-cross-origin";

        iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

        video.innerHTML = '';

        video.appendChild(iframe);

    });

});


