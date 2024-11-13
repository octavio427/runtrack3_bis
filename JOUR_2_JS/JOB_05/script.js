
// Récupération de l'élément footer
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
    // Hauteur totale du document et de la fenêtre visible
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Calcul du pourcentage de scrolling
    const scrolledPercentage = Math.min((scrollTop / docHeight) * 100, 100);
    
    // Calcul de la nouvelle couleur en fonction du pourcentage
    const red = Math.min(255, (scrolledPercentage / 100) * 255);
    const green = Math.max(0, 128 - (scrolledPercentage / 100) * 128);
    const blue = 255 - red;

    // Application de la couleur de fond dynamique et du texte
    footer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    footer.textContent = `Chargement : ${Math.round(scrolledPercentage)}%`;
});
