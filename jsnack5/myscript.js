// Crea un array vuoto.
let numeri = [];

//     Chiedi per 6 volte all’utente di inserire un numero,

let numeriDispari= [];

for(let i = 0; i < 6; i++){

    numeri.push(parseInt(prompt("inserisci un numero: ")));

    if(numeri[i] % 2 != 0){
        numeriDispari[i] = numeri[i];
    }
}

// stampo numeri dispari 
console.log(numeriDispari);