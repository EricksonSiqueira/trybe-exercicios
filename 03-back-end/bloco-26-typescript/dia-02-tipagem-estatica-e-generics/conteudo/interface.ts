interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
    sayHello(): string;
}

let employee: Employee = {
  firstName: 'Erickson',
  lastName: 'Siqueira',
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
  sayHello(): string {
    return `Hello from ${this.fullName()}!`;
  },
};

console.log(employee.sayHello());
