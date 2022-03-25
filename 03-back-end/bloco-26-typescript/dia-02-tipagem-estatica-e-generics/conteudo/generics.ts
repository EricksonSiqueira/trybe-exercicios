// function getArray(items : any[]) : any[] {
//     return new Array().concat(items);
// };

// com generics

function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
numberArray.push(25);
stringArray.push("Rabbits");
numberArray.push("isto não é um número"); // com generics ele impede que o tipo seja trocado só aceitando o primeiro colocado (nesse caso números)
stringArray.push(30); // aqui é a mesma coisa, porém só aceita strings
console.log(numberArray);
// Saída:  [5, 10, 15, 20, 25, "isto não é um número"]
console.log(stringArray);
// Saída: ["Cats", "Dogs", "Birds", "Rabbits", 30]

interface ProcessIdentity<T, U> { // crio uma interface pra função
    (value: T, message: U): T;
    // vai receber isso  // | retornar isso
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity; // passo a interface pra definir o que é esperado de receber e retornar
let returnNumber = processor(100, "Olá");
let returnString = processor("Olá", 100); // Type check error: Argument of type "string" is not assignable to parameter of type "number".

class ProcessIdentity2<T, U> {
    _value: T;
    _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}

let processor2 = new ProcessIdentity2<number, string>(100, "Olá");
processor2.getIdentity();  // imprime "Olá" e retorna 100


