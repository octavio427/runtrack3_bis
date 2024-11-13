
function isPrime(num) { //fonction nommée isPrime qui prend un argument num.
    if (num <= 1) { //Si num est inférieur ou égal à 1, ce n'est pas un nombre premier. La fonction retourne donc false
        return false;
    }
    for (let i = 2; i < num; i++) { //La boucle commence avec i égal à 2 et continue jusqu'à ce que i soit inférieur à num.
        if (num % i === 0) {
            return false; //Condition : if (num % i === 0),Si "num" est divisible par "i" (remainder  “reste” ou “reste laissé” 
                         //de la division num / i est 0),
                       //cela signifie que "num" n'est pas un nombre premier, car il a un diviseur autre que 1 et lui-même. La fonction 
                      //retourne alors "false".
        }
    }
    return true; //Si la boucle se termine sans trouver de diviseur (aucun "i" n'a satisfait num % i === 0), alors "num" est
                 // un nombre premier, et la fonction retourne true.
}

// Conclusion :
// num <= 1 : retourne false.
// Divisible par un autre nombre que 1 et lui-même : retourne false.
// Aucune des deux conditions ci-dessus : retourne true.

function sommenombrespremiers(a, b) {
    if (isPrime(a) && isPrime(b)) {
        console.log(`Nombres premiers`);
        return a + b;
    } else {
        console.log(`N'est pas un nombres premiers`);
        return false;
    }
}

console.log(sommenombrespremiers(3, 5)); // 8 (car 3 et 5 sont des nombres premiers)
console.log(sommenombrespremiers(4, 5)); // false (car 4 n'est pas un nombre premier)
console.log(sommenombrespremiers(2, 5)); 
