//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//Richiesta della parola
const parolaInserita = prompt("Scrivi una parola").toLocaleLowerCase();

//Verifica della parola
if (palindromo(parolaInserita)) {
    console.log("È palindroma");
} else {
    console.log("Non è palindroma");
}