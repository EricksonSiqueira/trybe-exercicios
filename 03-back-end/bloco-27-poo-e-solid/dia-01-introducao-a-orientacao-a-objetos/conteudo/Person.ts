class Person {
  name: string;
  private _age: number;
  readonly height: string;
  private _weight: number;

  constructor(n:string, a: number, h: string, w: number) {
    this.name = n;
    this._age = a; 
    this.height = h;
    this._weight = w;
  }

  getAge(): number {
    return this._age;
  }
  getWeight(): number {
    return this._weight;
  }

  setAge(newAge: number): void {
    if(newAge > 0 && newAge < 200) {
      this._age = newAge;
    }
  }

  sleep():void {
    console.log(`${this.name} zZZzzZZzzzZZz`);
  }

  birthday() {
    this._age += 1;
  }
}

const p1 = new Person('Erickson Siqueira', 24,'1,73', 73);
const p2 = new Person('Anna Paula', 21,'1,53', 49);

console.log(p1.getAge());
console.log(p2.getWeight());

p1.sleep();
p2.sleep();
