// L’utente inserisce due numeri in successione, con due prompt.
const numbFirst = parseInt(prompt("inserisci il primo numero"));
const numbSecond = parseInt(prompt("inserisci il secondo numero"));

// creo variabile da stampare
const numbMax = document.getElementById("numbMax");
// Stampo il maggiore.
if (numbFirst > numbSecond) {
    numbMax.innerHTML = numbFirst
} else if (numbFirst === numbSecond) {
    numbMax.innerHTML = "pari"
} else if (numbFirst > numbSecond) {
    numbMax.innerHTML = numbSecond
}



