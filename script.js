// menu responsive code
var menu = document.querySelector('.menu');
var menu_toggle = document.querySelector('.menu_toggle');


menu_toggle.onclick = function()
{
   menu_toggle.classList.toggle('active');
   menu.classList.toggle('responsive');
}

//site animation

const header = document.querySelector('header');
const title_span = document.querySelectorAll('.left h1 span');
const p = document.querySelector('.left p');
const a = document.querySelector('.left a');
const img = document.querySelector('.image_bird');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

window.addEventListener('load',()=>{
   
    const tl = gsap.timeline({paused: false});

    tl
    .from(header, 1, { y: -100, opacity: 0, duration: 2, ease: "power2.out" }, 0.1)
    
    // Animation de la colonne gauche et droite en même temps
    .from([left, right], { x: -100, opacity: 0, duration: 0.75, ease: "power2.out" }, "-=1")

    // Animation colonne droite 
    .from(img, 1, { opacity : 0, duration: 1, ease: "power2.out"}, "-=0.5")

    // Animation des textes et boutons de la colonne gauche
    .from(title_span, 1, { opacity: 0, duration: 1, ease: "power2.out"}, "-=0.5")
    .from(p, 1, { opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5")
    .from(a, 1, { opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5");

    tl.play();
})




//portfolio page grid

document.querySelectorAll('.category').forEach(category => {
    // Vérifier si l'utilisateur est sur mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
        // Effet au survol (desktop)
        category.addEventListener('mouseenter', () => {
            category.querySelector('h3').style.opacity = '0';
            category.querySelector('p').style.opacity = '1';
        });

        category.addEventListener('mouseleave', () => {
            category.querySelector('h3').style.opacity = '1';
            category.querySelector('p').style.opacity = '0';
        });
    } else {
        // Effet au clic (mobile)
        category.addEventListener('click', () => {
            const isVisible = category.querySelector('p').style.opacity === '1';
            
            // Cacher tous les autres textes avant d'afficher celui-ci
            document.querySelectorAll('.category p').forEach(p => p.style.opacity = '0');
            document.querySelectorAll('.category h3').forEach(h3 => h3.style.opacity = '1');

            // Afficher ou cacher le texte cliqué
            category.querySelector('h3').style.opacity = isVisible ? '1' : '0';
            category.querySelector('p').style.opacity = isVisible ? '0' : '1';
        });
    }
});

//games Listing slide top down
document.addEventListener("DOMContentLoaded", () => {
    const games = document.querySelectorAll('.game');

    function handleScroll() {
        games.forEach(game => {
            if (!game.classList.contains('show')) {
                const gameTop = game.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (gameTop < windowHeight - 100) {
                    game.classList.add('show');
                    console.log("Un élément devient visible :", game);
                }
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
});

console.log("Nombre de .game détectés :", document.querySelectorAll('.game').length);

