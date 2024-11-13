
// ----------VERSION 1 ----------------

// function jourtravaille(date) {
//     const joursFeries2024 = [
//         new Date(2024, 0, 1), // 1er janvier >>>> peux pas ajouter "nom des jours fériés"
//         new Date(2024, 3, 13), // Lundi de Pâques  /13 Avril
//         new Date(2024, 4, 1), // Fête du Travail /1 Mai
//         new Date(2024, 4, 8), // Victoire 1945 / 8 Mai 1945
//         new Date(2024, 4, 9), // Ascension / 9 Mai
//         new Date(2024, 4, 20), // Pentecôte / 20 Mai
//         new Date(2024, 6, 14), // Fête Nationale / 14 Juillet
//         new Date(2024, 7, 15), // Assomption / 15 Août
//         new Date(2024, 10, 1), // Toussaint / 1er Novembre
//         new Date(2024, 10, 11), // Armistice 1918 /11 Novembre 1918
//         new Date(2024, 11, 25) // Noël / 25 Décembre
//     ];

//     const day = date.getDate();
//     const month = date.getMonth() + 1; // Les mois commencent à 0 
//     const year = date.getFullYear();
    

//     // Vérifie si la date est un jour férié
//     for (let i = 0; i < joursFeries2024.length; i++) {
//         if (date.getTime() === joursFeries2024[i].getTime()) {
//             console.log(`Le ${day} ${month} ${year} est un jour férié`);
//             return;
//         }
//     }

//     // Vérifie si la date est un week-end (samedi ou dimanche)
//     const dayOfWeek = date.getDay();
//     if (dayOfWeek === 0 || dayOfWeek === 6) {
//         console.log(`le ${day} ${month} ${year} est un week-end`);
//     } else {
//         console.log(`le ${day} ${month} ${year} est un jour travaillé`);
//     }
// }

// // Exemple d'utilisation
// jourtravaille(new Date(2024, 0, 1)); // 1er janvier 2024
// jourtravaille(new Date(2024, 6, 14)); // 14 juillet 2024
// jourtravaille(new Date(2024, 6, 18)); // 18 juillet 2024
// jourtravaille(new Date(2024, 10, 24)); //


// ----------VERSION 2----------------

// function jourtravaille(date) {
//     const joursFeries2024 = [
//         new Date(2024, 0, 1), // 1er janvier
//         new Date(2024, 3, 13), // Lundi de Pâques / 13 avril
//         new Date(2024, 4, 1), // Fête du Travail / 1 mai
//         new Date(2024, 4, 8), // Victoire 1945 / 8 mai
//         new Date(2024, 4, 9), // Ascension / 9 mai
//         new Date(2024, 4, 20), // Pentecôte / 20 mai
//         new Date(2024, 6, 14), // Fête Nationale / 14 juillet
//         new Date(2024, 7, 15), // Assomption / 15 août
//         new Date(2024, 10, 1), // Toussaint / 1er novembre
//         new Date(2024, 10, 11), // Armistice 1918 / 11 novembre
//         new Date(2024, 11, 25) // Noël / 25 décembre

//     ];

//     const day = date.getDate();
//     const month = date.getMonth() + 1; // Les mois commencent à 0
//     const year = date.getFullYear();
//     const dayOfWeek = date.getDay(); // 0 pour dimanche, 6 pour samedi

//     // Vérifie si la date est un jour férié
//     for (let i = 0; i < joursFeries2024.length; i++) {  // La "length" propriété data d'une Array instance 
//                                                         // représente le nombre d'éléments de ce tableau
//                                                         //La valeur est un entier
//         if (date.getTime() === joursFeries2024[i].getTime()) {
//             if (dayOfWeek === 0 || dayOfWeek === 6) { // traduction "day Of Week" jour de la semaine
//                 console.log(`Le ${day} ${month} ${year} est un jour férié (${joursFeries2024[i].nom}) et un week-end.`);
//             } else {  //Les littéraux de gabarits sont délimités par des backticks (`)
//                 console.log(`Le ${day} ${month} ${year} est un jour férié (${joursFeries2024[i].nom}).`);
//             }
//             return;
//         }
//     }

//     // Vérifie si la date est un week-end (samedi ou dimanche)
//     if (dayOfWeek === 0 || dayOfWeek === 6) {
//         console.log(`le ${day} ${month} ${year} est un week-end.`);
//     } else {
//         console.log(`le ${day} ${month} ${year} est un jour travaillé.`);
//     }
// }

// jourtravaille(new Date(2024, 0, 1)); // 1er janvier 2024
// jourtravaille(new Date(2024, 3, 13)); // 13 avril 2024, lundi de Pâques
// jourtravaille(new Date(2024, 6, 14)); // 14 juillet 2024, fête nationale
// jourtravaille(new Date(2024, 6, 20)); // 20 juillet 2024, un samedi
// jourtravaille(new Date(2024, 7, 18)); // 18 août 2024, un dimanche

//  -------------EXPLICATION ---------------

// En JavaScript, la méthode getDay() de l'objet "Date" renvoie un nombre représentant le jour 
// de la semaine. Le dimanche est représenté par 0, le lundi par 1, et ainsi de suite jusqu'au samedi, 
// qui est représenté par 6.

// Donc, lorsque vous utilisez const dayOfWeek = date.getDay();, cela signifie :

// 0 : Dimanche
// 1 : Lundi
// 2 : Mardi
// 3 : Mercredi
// 4 : Jeudi
// 5 : Vendredi
// 6 : Samedi


// ----littéraux de gabarits (Template literals)---

// Les littéraux de gabarits sont délimités par des backticks (`) plutôt que par
//  des guillemets simples (') ou doubles ("). Ils permettent d'inclure des variables 
// et des expressions dans une chaîne de caractères facilement.

// - Délimiteurs de littéraux de gabarits:

// - `Le ${day} ${month} ${year}` - est une chaîne de caractères entourée de backticks (`).

// - Expression dynamique avec ${}:

// ${day}, ${month}, et ${year} : Les expressions entre ${} sont des variables ou des expressions 
// JavaScript. Elles sont évaluées et leurs valeurs sont insérées dans la chaîne.

// -Avantages :
// -Lisibilité : Les littéraux de gabarits rendent le code plus lisible et plus facile à écrire, 
// notamment lorsque vous avez besoin d'inclure plusieurs variables dans une chaîne.

// -Flexibilité : Vous pouvez inclure des expressions complexes, pas seulement des variables simples.

// -En résumé, `Le ${day} ${month} ${year}` permet de créer une chaîne en insérant les valeurs actuelles 
// des variables day, month, et year. 


// ----------VERSION 2----------------

function jourtravaille(date) {
    const joursFeries2024 = [
        { date: new Date(2024, 0, 1), nom: "1er janvier" },
        { date: new Date(2024, 3, 13), nom: "Lundi de Pâques" },
        { date: new Date(2024, 4, 1), nom: "Fête du Travail" },
        { date: new Date(2024, 4, 8), nom: "Victoire 1945" },
        { date: new Date(2024, 4, 9), nom: "Ascension" },
        { date: new Date(2024, 4, 20), nom: "Pentecôte" },
        { date: new Date(2024, 6, 14), nom: "Fête Nationale" },
        { date: new Date(2024, 7, 15), nom: "Assomption" },
        { date: new Date(2024, 10, 1), nom: "Toussaint" },
        { date: new Date(2024, 10, 11), nom: "Armistice 1918" },
        { date: new Date(2024, 11, 25), nom: "Noël" }
    ];

    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois commencent à 0 
    const year = date.getFullYear();
    const dayOfWeek = date.getDay(); // 0 pour dimanche, 6 pour samedi
    const joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const nomJourSemaine = joursSemaine[dayOfWeek]; // Récupérer le nom du jour de la semaine

    // Vérifie si la date est un jour férié
    for (let i = 0; i < joursFeries2024.length; i++) {
        if (date.getTime() === joursFeries2024[i].date.getTime()) {
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                console.log(`Oui, Le ${nomJourSemaine} ${day} ${month} ${year} (${joursFeries2024[i].nom}) est un jour férié et un week-end.`);               
            } else {
                console.log(`Oui, Le ${nomJourSemaine} ${day} ${month} ${year} (${joursFeries2024[i].nom}) est un jour férié .`);                
            }
            return;
        }
    }

    // Vérifie si la date est un week-end (samedi ou dimanche)
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        console.log(`Non, le ${nomJourSemaine} ${day} ${month} ${year} est un week-end.`);
    } else {
        console.log(`Non, le ${nomJourSemaine} ${day} ${month} ${year} est un jour travaillé.`);
    }
}

jourtravaille(new Date(2024, 0, 1)); // 1er janvier 2024
jourtravaille(new Date(2024, 3, 13)); // 13 avril 2024, lundi de Pâques
jourtravaille(new Date(2024, 6, 14)); // 14 juillet 2024, fête nationale
jourtravaille(new Date(2024, 6, 20)); // 20 juillet 2024, un samedi
jourtravaille(new Date(2024, 7, 18)); // 18 août 2024, un dimanche
jourtravaille(new Date(2024, 7, 20 )); // 18 août 2024, un dimanche

