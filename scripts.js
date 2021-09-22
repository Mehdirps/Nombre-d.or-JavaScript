let button = document.querySelector("button");
let section = document.querySelector("section");
button.addEventListener("click", () => {

    let nombrefi = document.createElement("p")
    let nombre = 0;
    nombrefi.textContent = nombre;
    section.appendChild(nombrefi);
    let nombre2 = 1;
    let nombrefib = document.createElement("p")
    nombrefib.textContent = nombre2
    section.appendChild(nombrefib);

    for (let compteur = 0; compteur < 20; compteur++) {

        let somme = nombre + nombre2;
        nombre = nombre2;
        nombre2 = somme;
        let nombrefi = document.createElement("p")
        nombrefi.textContent += somme;
        console.log(somme);
        section.appendChild(nombrefi);
    }

    return(button);
});