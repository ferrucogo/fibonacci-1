/* Funzione non ricorsiva che scrive i primi 100 numeri della successione di Fibonacci - V1 */

let i=0, j=1, k=0, position=0;

function fibonacciWhileLoop(numero){
    while (i < numero){
        console.log("Posizione " + position + " - Numero " + i);
        position++;
        k=i+j;
        i=j;
        j=k;
    }
}

fibonacciWhileLoop(100);
console.log('\n');

/* Funzione non ricorsiva che scrive i primi 100 numeri della successione di Fibonacci - V2 */

let fib = [0, 1];
let data = [];

function fibonacciArray(nums) {
    for (let i = 2; i <= nums; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        data.push(fib[i]);
        console.log(data);
    }
    return data;
}
fibonacciArray(100);
console.log('\n');


/* Funzione per la sequenza di Fibonacci non ricorsiva in generale */

// let fib = [0, 1];
// let data = [];

// function fibonacciArray(number) {    
//     for(let indice = 2; i <= number; i++) {
//         fib[indice] = fib[indice - 1] + fib[indice - 2]; 
//         data.push(fib[indice]);
//         console.log(data);
//     } 
//     return data;
// }

/* Funzione che dato un numero restituisca la posizione nella sequenza di Fibonacci*/

let ii=0, jj=1, kk=0, pos=0, num=100; 

function fibonacciPosition(num){
    while (ii < num){
        pos++;
        kk=ii+jj;
        ii=jj;
        jj=kk;
    }
    console.log("Il numero " + num + " si trova alla posizione " + ii);
}

fibonacciPosition(num);

/* Implementare con ricorsione la funzione fattoriale */

let n = 5;

function fattoriale(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * fattoriale(n - 1);
    }
}

console.log("Il fattoriale di " + n + " risulta " + fattoriale(n));

