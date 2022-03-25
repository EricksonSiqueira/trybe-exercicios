interface Parent {
  name: string,
  age: number,
}

type People = {
  firstName: string,
  lastName: string,
  age: number,
  friends: (string | number)[],
  parent: Parent,
}

const juberval: People = {
  firstName: 'juber',
  lastName: 'val',
  age: 2,
  friends: ['Juliana', 21, 'Erickson', 24],
  parent: { name: 'Juber2', age: 23 },
}

type OS = 'Windows' | 'Linux' | 'Mac';

const meusistemaboladao: OS = 'Linux';
