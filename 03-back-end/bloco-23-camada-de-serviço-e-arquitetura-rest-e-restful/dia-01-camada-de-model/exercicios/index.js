const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

const addUser = require('./middlewares/addUser');
const getAllUsers = require('./middlewares/getAllUsers');

app.use(bodyParser.json());

app.post('/user', addUser);

app.get('/user', getAllUsers);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
