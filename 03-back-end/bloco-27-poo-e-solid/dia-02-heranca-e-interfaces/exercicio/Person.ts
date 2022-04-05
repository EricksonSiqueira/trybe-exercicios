class Person2 {
  constructor(private _name: string, private _birthDate: Date) {  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    const timeDiff = Math.abs(
      Date.now() - new Date(this.birthDate).getTime()
    );

    return Math.floor(timeDiff/ (1000 * 3600 * 24) / 365.25);
  }

  set name(newName: string) {
    if(newName.length >= 3) {
      this._name = newName;
      console.log(`name changed to ${newName}`);
    } else {
      console.log(`name must have 3 characters or more`)
    }
  }

  set birthDate(newBirthDate: Date) {
    const todayDate = new Date(Date.now());

    if(newBirthDate <= todayDate) {
      this._birthDate = newBirthDate;
      console.log(`birthDate changed to ${newBirthDate}`);
    } else {
      console.log('birthDate cannot be a future date');
    }
  }

  get birthDate(): Date {
    return this._birthDate;
  }
}

const person1Birth = new Date('2022-04-05T23:11:20.678Z');
const person2Birth = new Date(Date.now());

const person1 = new Person2('Erickson', person1Birth);
const person2 = new Person2('Anna', person2Birth);

console.log(person1.age);
person1.name = 'erisu';
console.log(person1.name);

person2.birthDate = person1Birth;
console.log(person2.birthDate)