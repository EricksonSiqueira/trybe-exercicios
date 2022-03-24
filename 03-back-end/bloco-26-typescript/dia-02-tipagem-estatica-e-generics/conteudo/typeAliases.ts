type Point = {
  x: number,
  y: number,
};

function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: ", + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });

type Bird = {
  name: string,
  color: string,
  habitat: string,
  maxAge: number,
}
