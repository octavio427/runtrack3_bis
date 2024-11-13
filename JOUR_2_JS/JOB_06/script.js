// Sélection des éléments
// const footer = document.getElementById("footer");
// const body = document.body;

// // Couleur de défilement pour le footer
// window.addEventListener("scroll", () => {
//     const scrollTop = window.scrollY;
//     const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolledPercentage = Math.min((scrollTop / docHeight) * 100, 100);
    
//     const red = Math.min(255, (scrolledPercentage / 100) * 255);
//     const green = Math.max(0, 128 - (scrolledPercentage / 100) * 128);
//     const blue = 255 - red;

//     footer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//     footer.textContent = `Chargement : ${Math.round(scrolledPercentage)}%`;
// });

// // Détection du code Konami
// const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
// let konamiIndex = 0;

// window.addEventListener("keydown", (event) => {
//     if (event.key === konamiCode[konamiIndex]) {
//         konamiIndex++;
//         if (konamiIndex === konamiCode.length) {
//             body.classList.add("konami-style");
//             footer.textContent = "La Plateforme_";
//         }
//     } else {
//         konamiIndex = 0; // Réinitialiser si le code est incorrect
//     }
// });

/*-------------------------------------*/

const footer = document.getElementById("footer");
const body = document.body;

// Gestion de la couleur du footer pendant le scroll
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = Math.min((scrollTop / docHeight) * 100, 100);
    
    const red = Math.min(255, (scrolledPercentage / 100) * 255);
    const green = Math.max(0, 128 - (scrolledPercentage / 100) * 128);
    const blue = 255 - red;

    footer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    footer.textContent = `Chargement : ${Math.round(scrolledPercentage)}%`;
});

// Code Konami
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiIndex = 0;

// Détection du Code Konami
window.addEventListener("keydown", (event) => {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            body.classList.add("konami-style");
            footer.textContent = "La Plateforme_";
        }
    } else {
        konamiIndex = 0; // Réinitialisation en cas d'erreur
    }
});
