//REPLACE ALL
const string = 'Javascript es maravilloso, con Javascript puedo crear el futuro de la web';
const replacedString = string.replace('Javascript', 'Python'); //antes se podia usar el metodo replace para reemplazar unicamente el primer elemento que encontrara llamada javascript y lo reemplazaba por python
console.log(replacedString);

const replacedString2 = string.replaceAll("Javascript", 'Python'); //con replace all si me reemplaza todos los elementos que se llamen Javascript por python
console.log(replacedString2);

//METODOS PRIVADOS DE CLASES

class Message{
    #show(val){ //con el simbolo # estoy aclarando que el metodo el privado y solo se podra acceder a el dentro de la misma clase en este caso como lo llamo fuera de clase me dara un error
        console.log(val);
    };
};

const message = new Message();
message.show('Hola');

//PROMISE ANY: un elemento global de promise cuyo argumento es un arreglo de promesas que se le van a pasar y devuelve la primera promise que sea resuelta

const promise1 = new Promise((resolve,reject) => reject('1'));
const promise2 = new Promise((resolve,reject) => resolve('2'));
const promise3 = new Promise((resolve,reject) => resolve('3'));

Promise.any([promise1,promise2,promise3])
    .then (response => console.log(response));

//REFERENCIAS DEBILES

class anyClass{
    constructor(element){
        this.ref = new WeakRef(element);
    }
}

//NUEVOS OPERADORES DE ASIGNACION

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isTrue ??= isFalse);
