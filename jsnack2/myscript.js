// L’utente inserisce due parole in successione, con due prompt.
const wordFirst = prompt("inserisci la prima parola");
const wordSecond = prompt("inserisci ls deconda parola");
// controllo i valori in console
console.log(wordFirst.length);
console.log(wordSecond.length);

// Il software stampa prima la parola più corta, poi la parola più lunga.
let stampa = document.getElementById("wordMax");

// Stampo il maggiore.
if (wordFirst.length > wordSecond.length) {
    console.log (wordFirst);
    stampa.innerHTML = wordSecond + " " + wordFirst;
} else if (wordFirst.length === wordSecond.length) {
    console.log (wordFirst + wordSecond);
    stampa.innerHTML = "pari";
} else if (wordFirst.length < wordSecond.length) {
    console.log (wordSecond);
    stampa.innerHTML = wordFirst + " " + wordSecond ;
};







