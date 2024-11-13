
// let  bisextile = (2000, 2020, 2024, 2028, 2400);// 2020 2024 2028
// const  bisextile = [
//     {year: 2000, isFavorite: true},  // 2000 2020 2024 2028 2400
//     {year: 2020, isFavorite: true},
//     {year: 2024, isFavorite: true},
//     {year: 2028, isFavorite: true},
//     {year: 2400, isFavorite: true}
//     ]
   
// const testYear = 2020 ;  // <<< metter date bisextile

// let isBisextile = bisextile.some(element => element.year === testYear);

// if (isBisextile) {      

//     alert("Année bisextile !");
// } else {
//     alert("Année non bisextile.");
//     }

 // -----------------------------

const Bisextile = [2000, 2020, 2024, 2028, 2400]; // Tableau d'années bisextiles

const testYear = 2020; // Année à vérifier

// Vérification si l'année est dans le tableau bisextile
let isBisextile = Bisextile.includes(testYear);  // Bisextile."includes" rentre dans le tableau pour chercher la valeur demandé

if (isBisextile) {
    alert("Année bisextile !");
} else {
    alert("Année non bisextile.");
}

    // --------Calcule année bisextile ---------


//  const TestYear = 2022; // L'année à vérifier

// // Fonction pour vérifier si une année est bisextile
// function IsBisextile(Year) {
//     if (Year % 4 === 0 && (Year % 100 !== 0 || Year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Appel de la fonction pour l'année testée
// if (IsBisextile(TestYear)) {
//     alert("Année bisextile !");
// } else {
//     alert("Année non bisextile.");
// }
