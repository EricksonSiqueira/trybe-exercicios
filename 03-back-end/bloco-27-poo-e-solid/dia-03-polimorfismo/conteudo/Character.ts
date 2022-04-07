abstract class Character {
  constructor(public name: string) { }

  abstract talk(): void
  abstract specialMove(): void
}

class MeeleCharacter extends Character {
  public talk(): void {
    console.log(`Olá sou um personagem Meele com nome ${this.name}`);
  }

  public specialMove(): void {
      console.log(`${this.name} está utilizando o ataque especial grito de guerra!`);
  }
}

class LongRangeCharacter extends Character {
  public talk(): void {
      console.log(`Olá sou um personagem Ranged com nome ${this.name}`);
  }

  public specialMove(): void {
      console.log(`${this.name} está utilizando o ataque especial flecha celestial!`);
  }
}

const myCharacter = (character: Character) => {
  character.talk();
  character.specialMove();
}

const garrosh = new MeeleCharacter('Garrosh grito infernal');
const legolas = new LongRangeCharacter('Légolas');

myCharacter(garrosh);
myCharacter(legolas);
