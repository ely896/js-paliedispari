/* 
creare una griglia 8x8
generare numeri casuali all'interno dei box da uno a 64
al click i numeri pari diventano verdi, i numeri dispari diventano rossi


//tools:
-document.querySelector('.container')
-for
-let/const
-Math.random()
-if else
-element.addEventListener()
-functions
-operatore modulo %
-array
-classList
-append
//Controllo se il numero random è già stato utilizzato

if (!gridNumbers.includes(randomNumber)) {
    gridNumbers.push(randomNumber);
}
*/

const grid_limit = 64;
const containerEl = document.querySelector('.container');

//creo un array di numeri per verificare che il numero random generato non sia già stato inserito

const gridNumbers = [];

while (gridNumbers.length < 64) {
    const randomNumber = generateRandomNumber(1, grid_limit);

    if (!gridNumbers.includes(randomNumber)) {

        gridNumbers.push(randomNumber)
    }
    
}


// create a for loop to add 64 cells to our grid
for (let i = 1; i <= grid_limit; i++) {
    console.log(i);

    const randomNumber = generateRandomNumber(1, grid_limit);

    const boxElement = generateBoxCell(randomNumber);

    //cadd the single cell to the grid
    containerEl.append(boxElement);
    
}



/**
 * generate box Cell
 * Generate a dom element with class box and returns it
 * @param {number} numb the number to insert into the cell
 * @returns Object
 */
function generateBoxCell(numb) {
    //generate the grid box
    const boxElement = document.createElement('div');
    boxElement.className = 'box';
    boxElement.innerText = numb;
    console.log(boxElement);
    return boxElement;
}


/**
 * Generates a random number
 * between min and max
 * @param {number} min the minimum range for the random number
 * @param {number} max the max range for the random number
 * @returns {number}
 */
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }























//Dichiarazione di funzione senza parametro
/*sayHi();
function sayHi() {
    console.log('Hi');
}
sayHi();*/

//Dichiarazione funzione con parametro
/*
function sayHi(name) {
    console.log(`ciao ${name}`);
}

sayHi('Fabio');

//Funzione con più parametri (se non inserisco i dati di un parametro mi da undefined)

function sayHi(name, lastName) {
    console.log(`ciao ${name} ${lastName}`);
}

sayHi('Fabio', 'Pacifici');*/

//funzione con data attuale già presente in javascript
/*
const yer_of_birth = 1980;//prompt ('quale è il tuo anno di nascita)
const now = new Date().getFullYear();

console.log(now. yer_of_birth);
const age = now - year_of_birth

console.log(age);
*/
