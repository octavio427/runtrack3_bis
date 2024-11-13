<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="script.js">
    <title>script-04-JS</title>
   
</head>

<body>
    
<textarea id="keylogger" rows="10" cols="30"></textarea> <!--"textarea"contrôle d'édition de texte brut sur 
                                                          plusieurs lignes-->

    <!-- <script>
        // Sélectionner le textarea par son ID
        const textarea = document.getElementById("keylogger");/*récupère l'élément <textarea> 
                                                              avec l’id keylogger et le stocke dans une 
                                                              variable textarea pour y accéder facilement 
                                                              dans le reste du code.*/
                                                               
        // Ajouter un écouteur d'événements sur l'ensemble du document
        document.addEventListener("keydown", (event) => {   /*un écouteur d’événement keydown au document.
                                                           Cela permet d’intercepter les frappes de touches, 
                                                           peu importe où le curseur se trouve sur la page 
                                                           (qu'il soit dans le textarea ou ailleurs).*/
                                                           
            // Vérifier si la touche enfoncée est une lettre (a-z)
            if (event.key.length === 1 && event.key.match(/[a-zA-Z]/i)) { /*- letter.length === 1 pour s'assurer 
                                                                          qu'il ne s'agit pas d'une touche de 
                                                                          contrôle (comme Shift ou Enter), 
                                                                          - letter.match(/[a-zA-Z]/) pour 
                                                                          vérifier que la touche est une 
                                                                          lettre.
                                                                          Si les deux conditions sont vraies,
                                                                           nous continuons le traitement de 
                                                                           la touche.*/
                // Vérifier si le focus est dans le textarea
                if (document.activeElement === textarea) {  /*-La propriété document.activeElement renvoie 
                                                            l’élément actuellement en focus. Ici, on compare
                                                            ce dernier avec textarea pour vérifier si le
                                                            textarea est l'élément actif.
                                                            -Si c’est vrai, l’utilisateur a son curseur dans
                                                            le textarea, et on doit donc ajouter la lettre 
                                                            deux fois.
                                                            -Si ce n'est pas vrai, on ajoute la lettre une 
                                                            seule fois.*/

                    // Ajouter la lettre deux fois si le focus est dans le textarea
                    textarea.value += event.key + event.key; /*Si le textarea est en focus, on ajoute la 
                                                             lettre deux fois dans textarea.value.*/
                } else {
                    // Ajouter la lettre une fois si le focus n'est pas dans le textarea
                    textarea.value += event.key; /*Sinon, si le textarea n'est pas en focus, on ajoute 
                                                 seulement la lettre une fois.*/
                }
            }
        });
    </script> -->

    <script src= "script.js"></script> 

</body>
<!-- <body>
    <textarea id="keylogger"></textarea>

    <script>
        
        document.addEventListener('keypress', function(event) {
            let keylogger = document.getElementById('keylogger');
            let key = event.key;

            if (key.match(/[a-zA-Z]/)) {
                if (document.activeElement === keylogger) {
                    keylogger.value += key + key;
                } else {
                    keylogger.value += key;
                }
            }
        });
    </script>

 <script src= "script.js"></script> 
</body> -->