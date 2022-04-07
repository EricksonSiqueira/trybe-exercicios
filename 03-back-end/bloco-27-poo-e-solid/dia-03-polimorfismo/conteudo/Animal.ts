class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo...`)}
}

class Bird extends Animal {
  move() { console.log(`${this.name} está voando...`)}
  // sobreescrevendo metodo do pai (Animal)
}

class Mammal extends Animal {
  move() { console.log(`${this.name} está andando...`)}
  // sobreescrevendo metodo do pai (Animal)
}

const shark = new Animal('Tubarão');
const parot = new Bird('Papagaio');
const wolf = new Mammal('Lobo');

const myMove = (animal: Animal) => {
  animal.move();
}

myMove(shark);
myMove(parot);
myMove(wolf);
