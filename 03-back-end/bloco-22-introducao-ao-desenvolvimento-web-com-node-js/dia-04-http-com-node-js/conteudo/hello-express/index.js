const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());


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


app.get('/recipes/search', (request, response) => {
  const { name, minPrice } = request.query;
  const recipesFound = recipes
    .filter((recipe) => recipe.name.toLowerCase().includes(name.toLowerCase()) && recipe.price > parseInt(minPrice));

  if (!recipesFound) return response.status(404).json({ error: 'Recipe not found' });

  response.status(200).json(recipesFound);
});

app.get('/recipes/:id', (request, response) => {
  const { id } = request.params;
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if(!recipe) return response.status(404).json({ error: 'Recipe not found'});

  response.status(200).json(recipe);
});

app.get('/drinks/search', (request, response) => {
  const { name } = request.query;
  const drink = drinks.filter((drink) => drink.name.toLowerCase().includes(name.toLowerCase()));

  if(!drink) return response.status(404).json({ error: 'Drink not found'});

  response.status(200).json(drink);
});

app.get('/drinks/:id', (request, response) => {
  const { id } = request.params;
  const drink = drinks.find((drink) => drink.id === parseInt(id));

  if(!drink) return response.status(404).json({ error: 'Drink not found'});

  response.status(200).json(drink);
});

app.get('/drinks', (_request, response) => {
  const sortedDrinks = sortArrayOfObjects(drinks, 'name');
  response.json(sortedDrinks);
});

app.post('/recipes', (request, response) => {
  const { id, name, price } = request.body;
  recipes.push({id, name, price});
  response.status(201).json({ message: 'Recipe created sucessfully'});
});

app.get('/validateToken', (request, response) => {
  const token = request.headers.authorization;
  if(token.length !== 16) return response.status(401).json({ error: 'Invalid token'});

  response.status(200).json({ message: 'Valid token'});
});



app.listen(3001, () => {
  console.log('Aplicação está ouvindo na porta 3001');
});

