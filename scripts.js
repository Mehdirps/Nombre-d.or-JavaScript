let button = document.querySelector("button");
let nombrefi = document.querySelector("p")
let nombre = 0;
let nombre2 = 1;
button.addEventListener("click", () => {

    for (let compteur = 0; compteur < 20; compteur++) {

        let somme = nombre + nombre2;
        nombre = nombre2;
        nombre2 = somme;
        console.log(somme);
        nombrefi.textContent = somme + compteur;
    }
})