//DEFAULT PARAMS
//Antes de es6 los valores que se daban por defecto se tenian que definir dentro de las funciones
function newFunction(name,age,country){
    var name = name || 'Andres';
    var age = age || '24';
    var country = country || 'COL';
    console.log(name,age,country)
}

//es6 para cuando se quiere establecer elementos por defecto los declaro directamente en los parametros de la funcion de esa forma cuando se llame la funcion si no se envian argumentos toma los parametros por defecto y si se le envian argumentos si toma los que se enviaron
function newFunction2(name = 'Andres', age = 24, country = 'COL'){
    console.log(name,age,country);
}

newFunction2(); //si lo envio asi toma los parametros por defecto que se establecieron
newFunction2('Felipe','18','MX');// si lo envio asi si toma los argumentos puestos en este llamado

//TEMPLATE LITERALS
//cambios en los template literals los cuales permiten separar o unir varios elementos

//forma antes de es6
let hello = "Hello";
let world = "World";
let phrase = hello + ' ' + world;
console.log(phrase);

// con es6 se usa los literal templates que se rifiere a usar esta comillas `` para concatenar de forma mas entedible
let phrase2 = `buenas ${hello} ${world}`;
console.log(phrase2)

//MULTILINEA EN LOS STRINGS

//como se hacia antes para poner un texto y luego otro debajo
let lorem = 'prueba para la multilinea\n'+
'otra frase de prueba';
console.log(lorem);

//como se hace con es6 solo se usa la comilla francesa y dentro de las mismas comillas se puede poner dicho espacio

let lorem2 = `prueba para multilinea
otra frase de prueba`;
console.log(lorem2);

//DESESTRUCTURACION DE ELEMENTOS. se refiere a como accedo a los elementos de un objeto

//como se hacia antes
let person = {
    'name': 'Andres',
    'age': 32,
    'country': 'COL'
}
console.log(person.name, person.age);

//como se hace con es6

let{ age, country } = person;

console.log(age,country);

//OPERADOR DE PROPAGACION (...) para unir dos arreglos y otros elementos

let team1 = ['Andres','Oscar','Julian'];
let team2 = ['Valeria','Yesica','Camila'];

// como se hacia antes
let education = ['david','Andres','Oscar','Julian','Valeria','Yesica','Camila'];
console.log(education);

//como se hace con es6
let education2 = ['david', ...team1,...team2];
console.log(education2);

//let en vez de var. var se encuentra en el scope global mientras que let solo esta disponible en el bloque en el que fue llamado

{
    var global = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(global);

const a = 'b';

//PROPIEDAD DE OBJETOS MEJORADA

//como se hacia antes
let nombre = 'Andres';
let edad = 24;

obj = { name: nombre, age: edad};

//como se hace en es6

obj2 = {nombre,edad}; //solo debe ponerse el nombre de las variables directamente y estas se guardaran en el objeto con su valor
console.log(obj2);

//ARROW FUNCTION
// como se hacia antes 
const names = [
    {name: 'Andres', age: 24},
    {name:'Yesica', age:20}
];
//se asignaba una variable al elemento que queria sacar de la lista.map y el argumento era una funcion anonima
let listOfNames = names.map(function(item){
    console.log(item.name)
})

//con es6, las ARROS FUNCTIONS son funciones anonimas en este caso la funcion anonima tiene un parametro llamado item el cual va a mapear la lista de objetos y aimprimir en consola los nombres unicamente 
let listOfNames2 = names.map(item => console.log(item.name));


let listOfNames3 = (name, age, country) => {
    //...
}

const listOfNames4 = name =>{
    //...
};

//esta arrow function toma una variable de nombre la multiplica por si misma y retorna el valor a la constante square
const square = num => num*num;

//PROMESAS: son algo en algun momento del tiempo va a suceder se usan con la sintaxis de resolve, reject entonces si algo se cumple(resolve) va a devolver algo especifico y si no se cumple (reject) devuelve otra cosa. surge para suplir los inconvenientes que genera el hecho de que js sea asincronico es decir que dos eventos o mas no van a pasar al mismo tiempo lo que cual generaba problemas de escalabilidad etc.

const helloPromise = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('HEY!');
        }
        else{
            reject('UPS!!');
        }
    });
}

//como se ejecuta una promesa

helloPromise() //se pueden poner varios then si tengo varias posibilidades , adicionlamennte se usa catch para mostrar tambien cuando haya un error
    .then(response => console.log(response))
    .catch(error => console.log(error));


//CLASES

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//MODULOS import desde module.js


//como se hacia antes
const hello = require('./module');
console.log(hello());

// como se hace con es6

// import { hello } from './module.js';
// hello();

//GENERADORES: funcion especial que devuelve ciertos valores segun el algortimo definido. la sintaxis es como la de una funcion normal pero adicionalmente se le pone un asterisco 

function* helloWorld(){
    if (true){
        yield 'Hello, ';
    };
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value); //sintaxis para que pase de un if al otro
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);




