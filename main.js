//Visualizzare in pagina 5 numeri casuali.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//Consigli del giorno:
//* Pensate prima in italiano.
//* Dividete in piccoli problemi la consegna.
//Individuate gli elementi di cui avete bisogno per realizzare il programma.

//Container 
const elContainer = document.getElementById("container");
console.log(elContainer);

//Colonna
const elColonna = document.getElementById("col");
console.log(elColonna);

//Genera numeri random da ricordare
const numeriDaRicordare = generaOrdineNumeriRandom(1, 5);
elColonna.append(numeriDaRicordare);

//Chiedere all'utente di ricordarsi i numeri precenti

function rispostaUtente (){
    var numeriRicordatiUser = parseInt(prompt ("Inserisci qui' i numeri"));
    console.log(numeriRicordatiUser);
    //document.getElementById("container").innerHTML += numeriRicordatiUser;

    //NON FUNIONA PERCHE?
    elColonna.classList.add("inactive");

    //Creo condizione per vedere se i numeri inseriti dall'utente sono uguali a quelli generati random
    if (numeriDaRicordare.includes (numeriRicordatiUser)) {
        elContainer.innerHTML += `BRAVOO HAI VINTO`;
        console.log('hai vinto');
    }

    else{
        elContainer.innerHTML += `Hai Perso`;
        console.log('hai perso');
    }
}

//Timing Function
setTimeout(rispostaUtente,1000);


//FUNZIONI GENERALI
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


