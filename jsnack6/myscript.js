// Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

// creo un array
const  lista = [];

// // creo un ciclo while per generare fino a quando numeri non ha 50 posizioni occupate 
while(lista.length < 50) {
    // creo un generatore di numeri random da 0 a 50
    const genNumeri = Math.floor(Math.random() * 50) + 1;
    // creo una variante booleana per escludere dal ciclo i numeri già presenti nell'array
    let trovato = false;
        // controlla se il numero generato è già presente nell'array
        for(i = 0; i < lista.length; i++){
            if (genNumeri === lista[i]){
                trovato = true;
            }
        }
    // // stampo in console i numeri generati dal ciclo 
    if (trovato == false){
        lista.push(genNumeri);
    }
}
console.log("La lista di numeri è: " + lista);