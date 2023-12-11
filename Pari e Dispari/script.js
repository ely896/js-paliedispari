/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//funzione onclick scelta pari o dispari

function pariodispari() {
    const numeroUtente = Number(prompt('Scegli un numero tra 1 e 5 ed inseriscilo'));
    //condizione per verificare che i numeri inseriti siano quelli giusti
    if (numeroUtente < 1 || numeroUtente > 5) {
        prompt('numero inserito non corretto, ricominciare');

    }
    return numeroUtente;

}

function numberComputer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minimo = 1;
const massimo = 5;
const numeroRandomComputer = numberComputer(minimo, massimo);

console.log("Numero casuale:", numeroRandomComputer);

const numeroUser = pariodispari();

if (numeroRandomComputer > numeroUser) {
    console.log(`The Winner is Computer`);
} else if (numeroRandomComputer < numeroUser) {
    console.log(`The Winner is User`);
}

let somma = numeroUser + numeroRandomComputer;

console.log(somma);

if (somma % 2 == 0) {
    console.log(`il totale è un numero pari`);
} else if (somma % 2 == 1) {
    console.log(`il totale è un numero dispari`);
} 























/*

function pari() {
    
    const numeroUtente = Number (prompt('Scegli un numero tra 2 e 4 ed inseriscilo'));
    //condizione per verificare che i numeri inseriti siano quelli giusti
    if (numeroUtente !=2 && numeroUtente !=4) {
        prompt('numero inserito non corretto, ricominciare')
    } 
    return numeroUtente
    console.log(numeroUtente);
    //inserimento numero in pagina
    document.getElementById("numberUser").innerHTML = numeroUtente + " " + `questo è il tuo numero`
}

//definizione variabile risultato funzione pari
let numeroUtente = pari();

//stessa funzione per i numeri dispari
function dispari() {
    
    const numeroUtente = Number(prompt('Scegli un numero tra 1, 3 e 5 ed inseriscilo'));
    
    if (numeroUtente !=1 && numeroUtente !=3 && numeroUtente !=5) {
        prompt('numero inserito non corretto, ricominciare')
    }

    console.log(numeroUtente);
    document.getElementById("numberUser").innerHTML = numeroUtente + " " + `questo è il tuo numero`
}


function numberComputer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  const minimo = 1;
  const massimo = 5;
  const numeroRandomComputer = numberComputer(minimo, massimo);
  document.getElementById("computer").innerHTML = numeroRandomComputer + " " + `questo è il numero del computer`
  
  console.log("Numero casuale:", numeroRandomComputer);


function somma() {
    const a = (document.getElementById("numberUser").value);
    const b = (document.getElementById("computer").value);
    let c;
    c = Number(a) + Number(b);
  
    document.getElementById("somma").innerHTML = c + " " + `questa è la somma dei due numeri`
    console.log(c);
}
*/
