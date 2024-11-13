

function afficherjourssemaines() {
    const jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    
    for (let i = 0; i < jourssemaines.length; i++) { // "length" propriété data d'une Array instance représente
                                                    //le nombre d'éléments de ce tableau
        console.log(jourssemaines[i]);
    }
}

afficherjourssemaines();


// -------- exo divers ----------

// Décomposition :
// Initialisation :

// - let i = 0;

// - Cette partie initialise une variable i avec la valeur 0. Cette variable sert de compteur pour la boucle.

// Condition de continuation :

// - i < jourssemaines.length;

// - Cette partie vérifie si la valeur de i est inférieure à la longueur du tableau jourssemaines. Tant que
//  cette condition est vraie, la boucle continue de s'exécuter.

// Incrémentation :

// - i++

// - Cette partie augmente la valeur de i de 1 à chaque itération de la boucle.

// Corps de la boucle :

// - console.log(jourssemaines[i]);

// - À chaque itération, la boucle exécute cette ligne de code qui affiche l'élément du tableau jourssemaines 
// situé à l'index i dans la console.

// Exemple d'exécution :
// - 1ère itération : i = 0, jourssemaines[0] est "Lundi", donc "Lundi" est affiché.

// - 2ème itération : i = 1, jourssemaines[1] est "Mardi", donc "Mardi" est affiché.

// - Et ainsi de suite jusqu'à ce que i soit égal à la longueur du tableau jourssemaines.

// -- La ligne afficherjourssemaines(); appelle la fonction que nous avons définie--

// Lorsque "afficherjourssemaines();" est appelée :

// - Le tableau jourssemaines est créé avec les jours de la semaine.

// - La boucle for s'exécute, itérant à travers chaque jour de la semaine.

// - Chaque jour est affiché dans la console.

// - En d'autres termes, sans cet appel de fonction, le code à l'intérieur de 
// afficherjourssemaines ne s'exécuterait jamais. C'est la clé pour démarrer le processus. Pas mal, non?