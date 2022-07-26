//INCLUDES: este elementos trabaja sobre arreglos o strings, nos va a permitir saber si hay un elemento dentro de ese valor

let numbers = [1,2,3,4,6,7,8,9];

if (numbers.includes(20)){ //en este caso si el numero 7 se encuentra dentro de la lista haga algo 
    console.log('Si se encuentra el valor 7');
} else{
    console.log('No se encuentra.');
}

//COMO VAMOS A ELEVAR A LA POTENCIA

let base = 4;
let exponente = 4;
let res = base ** exponente;
console.log(`el resultado es de ${res}`);