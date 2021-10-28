// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// creo due variabili una per inserire i numeri da sommare e la seconda per avere una variabile di partenza a cui sommare i valori della prima 
let numeri = []
let risultato = 0;
// creo un ciclo for dove chiedo i dati all'utente e li sommo fra di loro
for(let i = 0; i < 10; i++){
    numeri.push(parseInt(prompt("inserisci un numero: ")));
    risultato += numeri[i]; 
}
// stampa totale
console.log("risultato: ", risultato);


