enum Color {
  black = 'preta',
  white = 'branca',
  red = 'vermelha',
  silver = 'prata',
}

class Car {
  private brand: string;
  private color: Color;
  private doors: number;
  public ac?: boolean;

  constructor(brand: string, color: Color, doors: number, ac?: boolean) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
    this.ac = ac || false;
  }

  public honk():void {
    console.log(`aquela buzinada violenta`);
  }

  public setDoors(doors: number):void {
    this.doors = doors;
  }
};

const carro = new Car('volkisvague', Color.black, 4, true);
const carroDaJu = new Car('gol bolota', Color.silver, 2, false);
carroDaJu.ac = true;
carroDaJu.setDoors(6);
console.log(carroDaJu);
