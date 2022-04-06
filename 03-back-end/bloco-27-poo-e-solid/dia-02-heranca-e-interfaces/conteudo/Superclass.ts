class Superclass {
  constructor(
    public isSuper:boolean = true

  ) { }

  public sayHello():void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {

}

const main2 = (superclass: Superclass) => {
  superclass.sayHello();
}

const superclass = new Superclass();
const subclass = new Subclass();

main2(superclass);
main2(subclass);
