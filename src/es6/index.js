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


