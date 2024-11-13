

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
            
//  >>> addEventListener <<<<
// La fonction d'écouteur d'événements de JavaScript vous permet de créer des 
// réponses personnalisées à des événements tels que les clics de souris, 
// les clics de clavier et le redimensionnement des fenêtres.                                                                   