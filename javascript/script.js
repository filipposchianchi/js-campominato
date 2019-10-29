// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

var listaNumeriCasuali = [];

//genero i numeri e li metto nell array, faccio questo ciclo 16 volte
do {
    //genero un nuovo numero
    numeroCasuale = Math.floor(Math.random() * 100 + 1 );

    //controllo se il numero è gia presente, se non è presente lo aggiungo
    if (ricercaNumero2(listaNumeriCasuali, numeroCasuale) === false) {
        listaNumeriCasuali.push(numeroCasuale);
    }
    

} while(listaNumeriCasuali.length < 16)

console.log(listaNumeriCasuali);


var presaMina = false;
var listaNumeriUtente = [];

while (presaMina == false) {
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
    console.log("Numero insirito dall'utente è " ,numeroUtente)

    if(ricercaNumero2(listaNumeriUtente, numeroUtente) === false) {
        listaNumeriUtente.push(numeroUtente);
    } else {
        alert("Numero già inserito");
    }

    if(ricercaNumero2(listaNumeriCasuali, numeroUtente) === true) {
        presaMina = true;
        alert("Hai preso una mina")
    }

    if (listaNumeriUtente.length === 84) {
        alert("HAI VINTO!!!!")
        presaMina = true;
    }
  
}

console.log("hai totalizzato ", listaNumeriUtente.length - 1, " punti.");



//funzione che ritorna true se trova il numero nell array false altrimenti
function ricercaNumero2 (arrayNumeri, numero) {
    for(var i =0; i < arrayNumeri.length; i++) {
        if (arrayNumeri[i] === numero) {
            return true;
        }
    }
    return false;
}

