let yes: boolean = true;
let no: boolean = false;

let x: number;

let y: number = 10;
let z: number = 1234.123;

let s: string;
let empety: string = '';
let full: string = 'full';

function sayHelloWorld():void { //existe apenas para indicar a ausência de um valor, como em uma função sem valor retornado.
  console.log("Hello World!");
}

let nullValue = null;
let undefinedValue = undefined;

//Como visto antes podemos utilizar a inferência de tipo no TypeScript . 
//Podemos declarar uma variável sem especificarmos explicitamente o tipo, e o compilador irá fazer a inferência do tipo através do valor passado para a variável.

let flag = true; // o compilador irá inferir o tipo boolean
const numberPI = 3.1416; // o compilador irá inferir o tipo number
let message = "Hello World!"; // o compilador irá inferir o tipo string
