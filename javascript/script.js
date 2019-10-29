// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

//genero il primo numero e lo metto nell array
var numeroCasuale = Math.floor(Math.random() * 100 + 1 )
var listaNumeriCasuali = [numeroCasuale];

//faccio questo ciclo 16 volte
do {
    //genero un nuovo numero
    numeroCasuale = Math.floor(Math.random() * 100 + 1 );

    //controllo se il numero è gia presente, se non è presente lo aggiungo
    ricercaNumero(listaNumeriCasuali, numeroCasuale)

} while(listaNumeriCasuali.length < 16)

console.log(listaNumeriCasuali);


var presaMina = false;
var giaInserito = false;
var listaNumeriUtente = [];

do {
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
    console.log("Numero insirito dall'utente è " ,numeroUtente)


    for(var i = 0; i<listaNumeriUtente.length; i++) {
        if (listaNumeriUtente[i] == numeroUtente) {
            giaInserito =true;
            alert("Numero già inserito");
        }
    }

    if(giaInserito === false) {
        for (var i = 0; i< listaNumeriCasuali.length; i++) {
            if (listaNumeriCasuali[i] === numeroUtente) {
                presaMina = true;
                alert("presa mina");
            }
        }
        listaNumeriUtente.push(numeroUtente);
    }
    console.log(listaNumeriUtente);


} while (presaMina = false || listaNumeriUtente.length > 84) 









function ricercaNumero (arrayNumeri, numero) {
    var trovato = false;

    for (var i = 0; i < arrayNumeri.length; i++) {
        if (numero == arrayNumeri[i]) {
            trovato = true;
        }
    } 

    if(trovato === false) {
        arrayNumeri.push(numeroCasuale);
    }

    return arrayNumeri;
}


