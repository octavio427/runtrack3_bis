
function tri(numbers, order) { //tri prend deux arguments : "numbers" (le tableau à trier) 
    function sortAsc(a, b) {  //et order (l'ordre de tri : "asc" pour ascendant, "desc" pour descendant).
        return a - b;
    }                        
    
    function sortDesc(a, b) {  //Cette fonction prend deux arguments, "a" et "b".
        return b - a;          //Elle retourne un nombre négatif si "a" est inférieur à "b", 
                               //zéro s'ils sont égaux, et un nombre positif si "a" est supérieur à "b". 
                               //Utilisée pour trier un tableau dans l'ordre croissant.
                              //---Semblable à sortAsc, mais inverse la comparaison pour retourner un nombre 
                              //négatif si b est inférieur à a, et ainsi de suite.
                              //Utilisée pour trier un tableau dans l'ordre décroissant.
    }

    if (order === 'asc') {               //Si order est "asc", le tableau numbers est trié en utilisant
        numbers.sort(sortAsc);           // la fonction sortAsc.
    } else if (order === 'desc') {       //Si order est "desc", le tableau numbers est trié en utilisant 
        numbers.sort(sortDesc);          //la fonction sortDesc.
                                         //Si order n'est ni "asc" ni "desc", une erreur est lancée.
    } else {
        throw new Error("L'ordre doit être 'asc' ou 'desc'"); //instruction "throw" permet de lever une 
                                                              //exception définie par l'utilisateur.
    }

    return numbers;
}                                   
    
let numbersAsc = [5, 3, 8, 1, 2];    //Création des tableaux "numbersAsc" et "numbersDesc" : Contiennent 
let numbersDesc = [5, 3, 8, 1, 2];   //les mêmes nombres non triés.
                                    //Appel de tri avec order = 'asc':Trie le tableau dans l'ordre croissant.
                                 //Appel de tri avec order = 'desc':Trie le tableau dans l'ordre décroissant.

console.log(tri(numbersAsc, 'asc')); // [1, 2, 3, 5, 8] // ordre ascendant (asc) ou décroissant (desc),
console.log(tri(numbersDesc, 'desc')); // [8, 5, 3, 2, 1]

// expliquation sur le code : "return a - b;" =
// - Le "-" entre "a" et "b" est l'opérateur de soustraction en JavaScript.
// - "a" - "b" soustrait "b" de "a".
// - Dans le contexte de la fonction "sort()" :
// - Si "a" est inférieur à "b", la différence sera négative, donc "a" sera placé avant "b" dans l'ordre.
// - Si "a" est égal à "b", la différence sera zéro, donc l'ordre restera le même.
// - Si "a" est supérieur à "b", la différence sera positive, donc "a" sera placé après "b".
// - En utilisant cet opérateur de soustraction, la fonction "sortAsc" trie les éléments en ordre croissant.
