//OBJECT.ENTRIES: el cual me va a permitir devolver los elementos y valores de un objeto a un arreglo

const data = {
    frontend: 'Andres',
    backend: 'Isabel',
    design: 'Ana',
};
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//OBJECT.VALUES: el cual me devuelve los VALORES de un objeto a un arreglo

const data2 = {
    frontend: 'Andres',
    backend: 'Isabel',
    design: 'Ana',
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);

//PADDING: como poner nuevos caracteres a una cadena

const string = 'Hello';
console.log(string.padStart(7,'hi')); //en este caso con el comando padStar(incluir el numero de caracteres que ya tiene el string + los que le voy a agregar, que caracteres le quiero agregar en este caso iran al comienzo del string)
console.log(string.padEnd(12,'-----'));//padEnd para poner los nuevos elementos al final del string

//TRAILING COMAS: me permite aclarar que despues de cada coma habra o no necesariamente habra un nuevo valor 

const obj = {
    name:'Andres', //trailing coma
}

//ASYNC, AWAIT

const helloWorld = () =>{
    return new Promise((resolve,reject) => { //if ternario
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            :reject(new Error('Test Error'))
    });
};

const helloAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//usando TRY CATCH

const anotherFunction = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch(error){
        console.log(error);
    }
}

anotherFunction();

//EJEMPLO DE ASYNC Y AWAIT

// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(600); //1. llamas a la funcion comprar helado e Ingresas el dinero

//ACA TERMINA EL EJEMPLO DE ASYNC Y AWAIT