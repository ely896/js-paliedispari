/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//Dichiarazione variabile per inserire una parola

const parola = prompt('inserisci una parola');

console.log(parola);

// Definisco una funzione che mi permetta di prendere le lettere della parola inserita e d'invertile 


function isParolaPalindroma(parola) {
    const parolaInvertita = parola.split("").reverse().join("");
    console.log(parolaInvertita);
    return parola === parolaInvertita;
  }
  
  const isPalindroma = isParolaPalindroma(parola);
  
  console.log("La parola è palindroma?", isPalindroma);