const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');

const app = express();

const PORT = 3001;

app.use(bodyParser);

app.use('/user', userController);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
