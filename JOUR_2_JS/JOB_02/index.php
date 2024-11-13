<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="script.js">
        <title>script-02-JS</title>
    </head>
    <body>

        <button id="button">Afficher / Cacher le texte</button>

        <!-- <script>
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
        </script> -->

        <style>

            #button {
                margin-top : 10px;
                background-color: red;
                color : white;
                border-radius : 5px ;
                cursor: pointer;

            }

            #button:hover {
                background: green ;
                color : white ;
            }

        </style>

        <script src= "script.js"></script> 

    </body>
</html>
