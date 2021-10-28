// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo lista ammessi
const listGatsby = ["giovannino", "pierino", "paolo", "francesco", "mirco"];
console.log(listGatsby)
const mess = document.getElementById("lista")

// mail utente
const nameGuest = prompt("inserisci la tua mail")
let found = false;

for (let i = 0; i < listGatsby.length; i++){
    if (nameGuest == listGatsby[i]) {
        found = true;
    }
}

if (found == true) {
    mess.innerHTML = "sei in lista";
} else {
    mess.innerHTML = "non sei in lista"
}