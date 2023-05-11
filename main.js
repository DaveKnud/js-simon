//Visualizzare in pagina 5 numeri casuali.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//Consigli del giorno:
//* Pensate prima in italiano.
//* Dividete in piccoli problemi la consegna.
//Individuate gli elementi di cui avete bisogno per realizzare il programma.

//Container 
const container = document.getElementById("container");
console.log(container);

//Genera numeri random da ricordare
const numeriDaRicordare = generaOrdineNumeriRandom(1, 5);
container.append(numeriDaRicordare);

//Chiedere all'utente di ricordarsi i numeri precenti

function rispostaUtente (){
    let numeriRicordatiUser = prompt ("Inserisci qui' i numeri");
    console.log(numeriRicordatiUser);
    document.getElementById("container").innerHTML += numeriRicordatiUser;
}

setTimeout(rispostaUtente,3000);




//FUNZIONI
//Timing Function


//create order random number
function generaOrdineNumeriRandom(min, max) {
    const numeriRandom = [];
  
    while(numeriRandom.length < max) {
          //Creare numero casuale nel min e max
        const nuovoNum = generaNumeroRandom(1,100);
        if(!numeriRandom.includes(nuovoNum)) {
            numeriRandom.push(nuovoNum);
        }
    }
    return numeriRandom;
}

//create random number
function generaNumeroRandom(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


