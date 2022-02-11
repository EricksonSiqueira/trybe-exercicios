const express = require('express');
const app = express();


const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const sortArrayOfObjects = (array, key) => {
  return array.sort((obj1, obj2) => obj1[key] > obj2[key] ? 1 : obj2[key] > obj1[key] ? -1 : 0);
}

app.get('/recipes', (_request, response) => {
  const sortedRecipes = sortArrayOfObjects(recipes, 'name');
  response.json(sortedRecipes);
});

app.get('/drinks', (_request, response) => {
  const sortedDrinks = sortArrayOfObjects(drinks, 'name');
  response.json(sortedDrinks);
})

app.listen(3001, () => {
  console.log('Aplicação está ouvindo na porta 3001');
});

