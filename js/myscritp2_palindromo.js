// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.


// var userWord = isPalindrome(prompt("Scrivi una parola"));
var userWord = prompt("Scrivi qua una parola");
console.log(userWord);

var conversione = revString(userWord);
console.log(conversione);

function revString(str) {
var splString = str.split("");
var revArray = splString.reverse();
return revArray.join("");
console.log(revArray);
}
