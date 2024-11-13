<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="script.js">
        <title>script-01-JS</title>
    
    </head>

    <body>

        <article id="citation">La vie a beaucoup plus d’imagination que nous</article>
            <button id="button">Afficher la citation</button> <!--L'ID "button" permet de cibler cet élément dans 
                                                            le JavaScript pour lui ajouter des comportements.-->

            <!-- <script>
                function citation() {
                    let citationElement = document.getElementById('citation');//>>> Utilise document.getElementById pour récupérer
                        console.log(citationElement.textContent);             // l'élément avec l'ID "citation" et le stocke 
                                                                            //dans la variable citationElement.
                }                                                             //>>> console.log(citationElement.textContent); : Affiche
                                                                    // le contenu textuel de l'élément citation dans la console du navigateur.
                                                                                                                                        
                document.getElementById('button').addEventListener('click', citation); //- document.getElementById('button') : Cible l'élément avec
                                                                                    //l'ID "button".
                                                                                //- .addEventListener('click', citation); : Ajoute un écouteur
                                                                                    // d'événement pour le clic. Lorsque le bouton est cliqué, 
                                                                                    //il appelle la fonction citation.
            </script> -->

        <!-- >>> addEventListener <<<<
        La fonction d'écouteur d'événements de JavaScript vous permet de créer des 
        réponses personnalisées à des événements tels que les clics de souris, 
        les clics de clavier et le redimensionnement des fenêtres. -->

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



<!-- <article id="citation">La vie a beaucoup plus d'imagination que nous</article>
<button id="button">Afficher la citation</button>
<script>
function citation () {
    let citationElement =document.getElementById ('citation');
    console.log (citationElement.textContent);
    }
    document.getElementById ('button').addEventListener('click',citation);
</script> -->