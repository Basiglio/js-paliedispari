// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.


// CHIEDO PAROLA
var userWord = prompt("Scrivi qua una parola");
console.log(userWord);


// CREO FUNZIONE
function revString(str) {
// SPLITTO LE LETTERE
var splString = str.split("");
// FACCIO REVERSE LETTERE
var revArray = splString.reverse();
// RIUNISCO LE LETTERE
return revArray.join("");
console.log(revArray);
}
// UTILIZZO LA FUNZIONE CREATA
var conversione = revString(userWord);
console.log(conversione);

if (userWord == conversione) {
  alert("Complimenti la tua Parola è un palindromo")
} else {
  alert("La tua Parola non è un palindromo")
}
