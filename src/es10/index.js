//FLAT: me sirve para ir unificando en una sola matriz un arreglo con mas arreglos internamente donde el parametro que se pone dentro de los parentesis array.flat() se refiere a la profundidad a la que quiero unificar en este caso si no se pone numero la profundidad es 1 y asi sucesivamente

let array = [1,2,3, ['a','b','c', [1,2,3]]];

console.log(array.flat());

//FLATMAP: el cual va a permitir mapear cada elemento luego pasarle una funcion y unificar

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value*2])); //en este caso se toma cada uno de los valores de mi array se muestra en pantalla e inmediatamente al lado de ese valor se ejecuta la funcion que en este caso es multiplicar ese valor por dos y se muestra tambien en pantalla dentro de ese mismo array

//TRIM: me va a permitir eliminar los espacios en blanco de un string

let hello = '       Hello world';
console.log(hello);
console.log(hello.trimStart()); //para eliminar los espacios al inicio del texto

let hello2 = 'hello world       ';
console.log(hello2);
console.log(hello2.trimEnd());

//OPTIONAL CATCH: podemos pasar de forma opcional el parametro de error al valor de catch

//como se hacia antes
try{

} catch(error){
    error

}

// como se puede desde es10
try{

} catch{
    error

}

//FROM ENTRIES: el cual me va a permitir transformar una lista de listas en un objeto con su llave y valor. esto se puede hacer tambien en el caso contrario de objetos a arreglos

let entries = [['name','oscar'],['age',24]];
console.log(Object.fromEntries(entries));

//SYMBOL: se agrego una caracteristica en la cual se puede ahora agregar una descripcion

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);