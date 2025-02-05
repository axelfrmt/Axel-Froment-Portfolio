// Sélection des éléments
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const popupContent = document.querySelector(".popup-content");
const body = document.body;

// Fonction pour afficher la popup
openPopup.addEventListener("click", () => {
    popup.classList.add("show");
    body.classList.add("no-scroll"); // Désactive le scroll du body
});

// Fonction pour fermer la popup
function closePopupFunc() {
    popup.classList.remove("show");
    body.classList.remove("no-scroll"); // Réactive le scroll du body
}

// Fermer la popup en cliquant sur la croix
closePopup.addEventListener("click", closePopupFunc);

// Fermer la popup en cliquant en dehors du contenu
popup.addEventListener("click", (event) => {
    if (!popupContent.contains(event.target)) {
        closePopupFunc();
    }
});
