// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.


// CHIEDO PAROLA
var userWord = prompt("Scrivi qua una parola");
console.log(userWord);

// CORREZIONE GIANLUCA
var parolaAlContrarioUtente =  giraParola(userWord);
console.log(parolaAlContrarioUtente);


var userWord = ePalindroma();


//----------------------------------------------------------------------
// CREO IL CICLO PER SCORRERE LA PAROLA DELL'UTENTE

function giraParola(parola) {
  var parolaAlContrario = "";
  for (var i = userWord.length-1; i >= 0; i--) {
    parolaAlContrario +=  userWord[i];
  }
  return parolaAlContrario;
}

function ePalindroma(parola1, parola2) {
  if (userWord == parolaAlContrarioUtente) {
    console.log("palindroma");
  } else {
    console.log("non palindroma");
  }
}



// MIO ESERCIZIO

// CREO FUNZIONE
// function isPalindrome(str) {
// SPLITTO LE LETTERE
// var splString = str.split("");
// FACCIO REVERSE LETTERE
// var revString = splString.reverse();
// RIUNISCO LE LETTERE
// return revString.join("");
// console.log(revString);
// }
// UTILIZZO LA FUNZIONE CREATA
// var conversione = isPalindrome(userWord);
// console.log(conversione);

// if (userWord == conversione) {
//   alert("Complimenti la tua Parola è un palindromo")
// } else {
//   alert("La tua Parola non è un palindromo")
// }
