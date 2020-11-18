
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.


// SCELTE UTENTE
var pariOdispari = prompt("scrivi pari o dispari")
console.log("io ho scelto ", pariOdispari);
var userNumber = parseInt(prompt("ora inserisci un numero da 1 a 5"));
console.log("il mio numero ", userNumber);
// SCELTE PC
var pcNumber = Math.floor(Math.random() * 5) + 1;
console.log("il numero del pc ", pcNumber);


// SOMMA
var somma = userNumber + pcNumber;
console.log(somma);

if (somma % 2 == 0 && pariOdispari == "pari") {
  alert("hai vinto")
  console.log("hai vinto");
} else if (somma % 2 == 0 && pariOdispari == "dispari") {
  alert("hai perso")
  console.log("hai perso");
} else if (somma % 2 != 0 && pariOdispari == "dispari") {
  alert("hai vinto")
  console.log("hai vinto");
} else if (somma % 2 != 0 && pariOdispari == "pari") {
  alert("hai perso")
  console.log("hai perso");
}
