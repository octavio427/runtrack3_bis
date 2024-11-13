

function fizzbuzz() {
    for (let i = 1; i <= 151; i++) {   //Itère à travers les nombres de 1 à 151.
        if (i % 3 === 0 && i % 5 === 0) { //Vérifie si "i" est un multiple de 3 et de 5. Si c'est le cas, 
                                          // affiche "FizzBuzz".
            console.log("FizzBuzz"); // calcul : i/nombres=resultat
        } else if (i % 3 === 0) {  //Si "i" est seulement un multiple de 3, affiche "Fizz".
            console.log("Fizz");
        } else if (i % 5 === 0) { //Si "i" est seulement un multiple de 5, affiche "Buzz".
            console.log("Buzz");
        } else {
            console.log(i); //Si aucune des conditions précédentes n'est remplie, affiche le nombre "i".
        }
    }
}

fizzbuzz(); // execute/appelle la fonction fizzbuzz


// ---------------------------

// Explication :
// La boucle for :

// for (let i = 1; i <= 151; i++) : Itère à travers les nombres de 1 à 151.

// Conditions :

// if (i % 3 === 0 && i % 5 === 0) : Vérifie si "i" est un multiple de 3 et de 5. Si c'est le cas, 
// affiche "FizzBuzz".

// else if (i % 3 === 0) : Si "i" est seulement un multiple de 3, affiche "Fizz".

// else if (i % 5 === 0) : Si "i" est seulement un multiple de 5, affiche "Buzz".

// else : Si aucune des conditions précédentes n'est remplie, affiche le nombre "i".


// Pour chaque nombre de 1 à 151 :

// Si le nombre est divisible par 3 et par 5, "FizzBuzz" est affiché.

// Si le nombre est divisible par 3 seulement, "Fizz" est affiché.

// Si le nombre est divisible par 5 seulement, "Buzz" est affiché.

// Sinon, le nombre lui-même est affiché.