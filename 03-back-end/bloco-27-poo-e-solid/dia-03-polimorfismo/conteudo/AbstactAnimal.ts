/*
Dicionário en-pt:
- fish: peixe
*/

abstract class AbstractAnimal {
  constructor(public name: string) { }
  abstract move(): void // fala que vai precisa ter esse método porém n implementa
}
class AbstractBird extends AbstractAnimal {
  move() { console.log(`${this.name} está voando.`); }
}
class AbstractMammal extends AbstractAnimal {
  move() { console.log(`${this.name} está andando.`); }
}
class AbstractFish extends AbstractAnimal {
  move() { console.log(`${this.name} está nadando.`); }
}

const AbstractShark = new AbstractFish('Tubarão');
const AbstractParrot = new AbstractBird('Papagaio');
const AbstractArmadillo = new AbstractMammal('Tatu');

const myMove3 = (animal: AbstractAnimal) => {
  animal.move();
}
myMove3(AbstractShark);
myMove3(AbstractParrot);
myMove3(AbstractArmadillo);

/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/