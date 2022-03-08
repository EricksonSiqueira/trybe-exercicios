const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const bookController = require('./controllers/bookController');

const app = express();

const PORT = 3001;

app.use(bodyParser.json());

app.use('/user', userController);
app.use('/book', bookController);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
