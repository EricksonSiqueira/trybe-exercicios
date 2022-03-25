enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor: EyeColor;
  CPF?: string | number;


  constructor(name: string, birthDate: Date, eyeColor: EyeColor, CPF?: number | string) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
    this.CPF = CPF;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`);
  }

  watch(): void {
    console.log(`${this.name} está observando.`);
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black, '123.234.123-40');

console.log(person1);

person1.speak();

console.log(person2);

person2.watch();

person1.CPF = '123.456.789.01';

console.log('\nwith cpf' ,person1);
