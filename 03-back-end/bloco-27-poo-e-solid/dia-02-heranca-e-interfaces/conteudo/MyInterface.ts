interface MyInterface {
  myNumber: number,
  myFunc(myparam: number): string,
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `A soma de ${this.myNumber} com ${myParam} é: ${myParam + this.myNumber}`
  }
}

const myObj = new MyClass(10);

console.log(myObj.myFunc(5));
