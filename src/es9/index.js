//OPERADOR DE REPOSO: puede extraer las propiedades de un objeto que aun no se a construido

const obj = {
    nombre:'Andres',
    age:'24',
    country:'COL'
};

let { nombre, ...all} = obj; //con ...all estoy asignando todos las otras propiedades del objeto obj a all de esta forma si imprimo all me imprime todo lo que inclui ahi quitando nombre que fue el primer parametro que se paso. esto es util si quiero desestrcuturar los datos y solo imprimir algunos entonces en el lado izquierdo se puede poner por ejemplo lo que no quiero imprimir y en all el resto 
console.log( nombre ,all);

//USO DE PROPIEDADES DE PROPAGACION PARA UNIR 2 O 3 O 4 OBJETOS

const obj1 = {
    nombre: 'Andres',
    age:24,
};

const obj2 = {
    ...obj1, //de esta forma uno el objeto 1 con el objeto 2, este queda guardado en el objeto 2
    country: 'COL',
};

console.log(obj2);

//PROMISE.FINALLY para saber cuando se ha acabado un accion para ejecutar una siguiente accion

const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log('finalizo')) //esta linea nueva me sirve para que cuando ya todo se haya ejecutado sea then o el catch si hay un error me indique que todo finalizo

//REGEX: Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto. En JavaScript, las expresiones regulares también son objetos. en este caso con el regex data quiero encontrar si el patron que se puse en el .exec es de la forma que yo lo necesito (formato de fecha) en el regexData para este caso una fecha 

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //internamente estoy indicando que debe ser un numero del 0 al 9 y que este tendra 4 digitos para el primero y 2 para el segundo y el tercero.
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);