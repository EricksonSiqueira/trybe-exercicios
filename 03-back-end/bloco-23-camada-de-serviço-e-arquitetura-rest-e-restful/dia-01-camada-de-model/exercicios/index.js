const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

const addUser = require('./middlewares/addUser');
const getAllUsers = require('./middlewares/getAllUsers');
const getUserById = require('./middlewares/getUserById');

app.use(bodyParser.json());

app.post('/user', addUser);

app.get('/user', getAllUsers);

app.get('/user/:id', getUserById);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
