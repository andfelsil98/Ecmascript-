//DYNAMIC IMPORT: vamos a realizar importaciones de algun elemento de forma dinamica para poder llamar piezas de codigo. ayuda mucho en el sentido de que no se necesita importar todo desde el comienzo sino solo cuando se necesite 

const button = document.getElementById('btn');

button.addEventListener('click',async function(){
    const module = await import('./file.js');
    module.hello();
})

//BIG INT: forma para trabajar con elementos mayores a 2^53

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

//PROMISE ALL SETTLED: nos va a devolver una promesa que se resuelve despues de que todas las promesas dadas se hayan resuelto o rechazado
//PROMISE ALL nos va a devolver las promesas hasta que alguna sea rechazada
const promise1 = new Promise((resolve,reject) => reject ('reject'));
const promise2 = new Promise((resolve,reject) => resolve ('resolve'));
const promise3 = new Promise((resolve,reject) => resolve ('resolve1'));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response));

//GLOBAL THIS La propiedad globalThis proporciona una forma estándar de acceder al valor global this (y, por lo tanto, al propio objeto global) en todos los entornos. A diferencia de propiedades similares como window y self, está garantizado que funciona en contextos de ventana y no ventana. De esta forma, puede acceder al objeto global de manera consistente sin tener que saber en qué entorno se está ejecutando el código.

console.log(window);
console.log(globalThis);

//OPERADOR NULLISH COALESCING

const fooo = null ?? "default string"; // se pregunta si el valor es nulo entonces muestre un valor especifico en este caso el string que dice default string 
console.log(fooo);
//cuando no es nulo imprime el elemento que contiene la variable
const fooo2 = 'Andres' ?? "default string"; //en este caso pregunta si esta nulo y la respuesta es no entonces imprime 'Andres'

//ENCADENAMIENTO OPCIONAL //me sirve para poder imprimir en consola o guardar elementos que aun no han sido creados o que aun no han sido enviados a esa variable sin romper mi codigo. se hace con la sintaxis de ?

const user = {};
console.log(user?.profile?.email);

//ejemplo

if(user?.profile?.email){
    console.log(email);
} else{
    console.log('fail');
}
