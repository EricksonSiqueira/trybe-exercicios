class SuperAnimal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}
class SuperBird extends SuperAnimal {
  move() {
    super.move();
    console.log(`${this.name} está voando.`);
  }
}
class SuperMammal extends SuperAnimal {
  move() { console.log(`${this.name} está andando.`); }
}

const a = new SuperAnimal('Tubarão');
const b = new SuperBird('Papagaio');
const m = new SuperMammal('Tatu');

const myMove2 = (animal: SuperAnimal) => {
  animal.move();
}
myMove2(a);
myMove2(b);
myMove2(m);

/*
Saída:
Tubarão está se movendo.
Papagaio está se movendo.
Papagaio está voando.
Tatu está andando.
*/