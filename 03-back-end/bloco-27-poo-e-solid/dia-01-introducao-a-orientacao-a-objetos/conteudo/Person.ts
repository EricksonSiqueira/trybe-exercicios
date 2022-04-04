class Person {
  private name: string;
  private height: string;
  private weight: number;

  constructor(n:string, h: string, w: number) {
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  getName() {
    return this.name;
  }
  getHeight() {
    return this.height;
  }
  getWeight() {
    return this.weight;
  }

  sleep():void {
    console.log(`${this.name} zZZzzZZzzzZZz`);
  }
}

const p1 = new Person('Erickson Siqueira', '1,73', 73);
const p2 = new Person('Anna Paula', '1,53', 49);

console.log(p1.getHeight());
console.log(p2.getHeight());

p1.sleep();
p2.sleep();
