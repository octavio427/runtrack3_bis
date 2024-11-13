
// let hello = "Hello Javascript!"

    // alert (hello)
    // console.log (Hello)

// -------------------

// let iceCream = "chocolat";

// if (iceCream === "chocolat") {
//   alert("J'adore la glace au chocolat !");
// } else {
//     alert("Ooooh, mais j'aurais préféré au chocolat.");
//     }

// ---------------------

 let iceCream = "chocolat";

    if (iceCream === "chocolat") {
        console.log("J'adore la glace au chocolat !");
    } else {
        console.logt("Ooooh, mais j'aurais préféré au chocolat.");
    }

// -----------------------


        document.querySelector("html").addEventListener("click", function () {});

        // let myHTML = document.querySelector("html");
        // myHTML.addEventListener("click", function () {});

// let myImage = document.querySelector("img");

    myImage.addEventListener("click", function () {
        let mySrc = myImage.getAttribute("src");
            if (mySrc === "images/Desing1.png") {
                myImage.setAttribute("src", "images/Desing2.png");
            } else {
                myImage.setAttribute("src", "images/Desing1.png");
            }
    }); 

// ----------------------
// let  resultat = fonction ();

//     if (resultat) {  
//         alert ("OK");

//     } else {  
//         alert("erreur");
//     }
