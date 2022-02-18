const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());

const Cep = require('./controllers/CepController');

app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.get('/cep/:cep', Cep.findByCep);

app.listen(3000, () => console.log('Online na porta 3000'));
