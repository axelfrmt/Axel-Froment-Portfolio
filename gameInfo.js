document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector(".hero");

    if (scrollPosition > 50) {
        hero.classList.add("scrolled");
    } else {
        hero.classList.remove("scrolled");
    }
});

const video = document.getElementById("bgVideo");
const content = document.querySelector(".content_scroll");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.pause(); // Stoppe la vidéo quand le content est visible
        } else {
            video.play(); // Reprend la vidéo quand le content disparaît
        }
    });
}, { threshold: 1.0 }); // Déclenche quand l'élément est **totalement** visible

observer.observe(content);