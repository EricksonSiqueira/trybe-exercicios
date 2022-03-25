interface Phone {
  screenType: string,
  brand: string,
  ram: number,
  onTheScreen(toPrint: string): string,
};

const motoY: Phone = {
  screenType: 'AMOLED',
  brand: 'MOTOROLA',
  ram: 1,
  onTheScreen(toPrint: string): string {
    return `${toPrint}`;
  }
}

enum arCondicionado {
  numTem = 1,
  tem,
}

console.log(arCondicionado.tem);
