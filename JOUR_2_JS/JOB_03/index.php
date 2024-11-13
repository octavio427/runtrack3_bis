<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="script.js"> -->
    <title>script-03-JS</title>
   
</head>

<body>

    <button id="button">Clique sur moi</button> <!--L'ID "button" permet de cibler cet élément dans le JavaScript 
                                               pour lui ajouter des comportements.-->
        <p id= "compteur">0</p> <!--L'ID "compteur" permet de cibler cet élément dans le JavaScript pour
                                mettre à jour son contenu.-->

        <script>
            
            function addone() {
                let compteurElement = document.getElementById('compteur');
                let compteur = parseInt(compteurElement.textContent);
                compteur++;
                compteurElement.textContent = compteur;
            }

// - function addone() { ... } : Déclare une fonction nommée addone qui contient le code à exécuter lorsque le
// bouton est cliqué.
// - let compteurElement = document.getElementById('compteur'); : Utilise document.getElementById pour 
// récupérer l'élément avec l'ID "compteur" et le stocke dans la variable compteurElement.
// - let compteur = parseInt(compteurElement.textContent); : Récupère le contenu textuel de l'élément 
// compteurElement, le convertit en nombre entier (parseInt) et le stocke dans la variable compteur.
// compteur++; : Incrémente la valeur de compteur de 1.
// - compteur

            document.getElementById('button').addEventListener('click', addone);
        </script>


    <script>

        // ---------tableau multiplication---------------
        var laLune =() =>{

            console.log ('Bien venue dans la table de multiplication');
        }
        var multiplication = () =>{
            for(let = index= 0 ; index <13 ; index++){
            console.log (`3x ${index} = ${index*3}`);
            }
        }
        
        
    </script>

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

    <!-- <script src= "script.js"></script> -->
</body>