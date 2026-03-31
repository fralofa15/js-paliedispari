//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//Scelta dell'utente 
let scelta = prompt("Scegli pari o dispari").toLocaleLowerCase();

//Controllo della scelta
if(scelta === "pari") {
    scelta = "pari";
    console.log('Hai scelto pari');
} else if(scelta === "dispari") {
    scelta = "dispari";
    console.log('Hai scelto dispari'); 
} else {
    console.log('non hai scelto');  
}

//L'utente scegli un numero da 1 a 5
let numeroScelto = Number(prompt("Scegli un numero da 1 a 5"));

console.log("il tuo numero è " + numeroScelto);

//Generazione numero del computer
let numeroComputer = numeroRandom();

console.log("il numero del computer è " + numeroComputer);

//Somma dei numeri
let numeroFinale = sommaNumeri(numeroComputer, numeroScelto);

console.log("la somma dei due numeri è " + numeroFinale);
