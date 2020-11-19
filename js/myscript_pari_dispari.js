
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.


// SCELTE UTENTE
// PAri o dispari?
var pariOdispari = prompt("scrivi pari o dispari")
console.log("io ho scelto ", pariOdispari);
// Se non mette pari e dispari
while ((pariOdispari != "pari") && (pariOdispari != "dispari")) {
  alert("errore devi inserire pari o dispari");
  pariOdispari = prompt("scrivi pari o dispari");
}
// NUMERO
var userNumber = parseInt(prompt("ora inserisci un numero da 1 a 5"));
console.log("il mio numero ", userNumber);
// se non mette numero maggiore di 0 o minore 6
while ((userNumber < 1) || (userNumber > 5 )) {
  alert("errore devi inserire un numero da 1 a 5");
  userNumber = parseInt(prompt("ora inserisci un numero da 1 a 5"));
}
// SCELTE PC

pcNumber = pcRandomNumber();
console.log("il numero del pc ", pcNumber);

// SOMMA
somma = somma();
console.log(somma);

risultato(somma);
//--------------------------------------------------------------
// FUNZIONI
function pcRandomNumber(numero) {
  var pcNumber = Math.floor(Math.random() * 5) + 1;
  return pcNumber;
}

function somma(somma) {
  var somma = userNumber + pcNumber;
  return somma;
}

function risultato(numero) {
  if (somma % 2 == 0 && pariOdispari == "pari") {
    alert("hai vinto")
    // console.log("hai vinto");
  } else if (somma % 2 == 0 && pariOdispari == "dispari") {
    alert("hai perso")
    // console.log("hai perso");
  } else if (somma % 2 != 0 && pariOdispari == "dispari") {
    alert("hai vinto")
    // console.log("hai vinto");
  } else {
    alert("hai perso")
    // console.log("hai perso");
  }

}
