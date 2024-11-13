
// Sélection du bouton par son id
const button = document.getElementById("button");

// Variable pour stocker l'article (initialement vide)
let article;

// Fonction pour afficher/cacher l'article
function showhide() {
    // Si l'article n'existe pas, on le crée et l'ajoute
    if (!article) {
        article = document.createElement("article");
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    } else {
        // Si l'article existe déjà, on le supprime
        article.remove();
        article = null; // Remet article à null pour pouvoir recréer l'élément
    }
}

// Écouteur d'événement sur le bouton pour appeler showhide() au clic
button.addEventListener("click", showhide);


// - Sélection du bouton : On utilise getElementById pour récupérer le bouton avec l'id "button".
// - Variable article : On définit article au niveau global (en dehors de la fonction) pour suivre l'état 
// de l'élément <article>. Elle est initialisée à null pour indiquer que l'article n'est pas encore créé.
// - Fonction showhide() :
// - Création de l'article : Si article est null (l'article n'existe pas encore), on crée un nouvel élément
//  <article>, lui donne le texte, et l'ajoute au <body>.
// - Suppression de l'article : Si article n'est pas null (l'article existe déjà), on le supprime avec remove() 
// et on remet article à null pour indiquer que l'article n'existe plus.
// - Écouteur d'événement : Lorsque le bouton est cliqué, la fonction showhide() est appelée pour afficher ou
//  cacher l'article en fonction de son état actuel.