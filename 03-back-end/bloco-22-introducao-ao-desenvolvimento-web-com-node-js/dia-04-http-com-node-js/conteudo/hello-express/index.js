const express = require('express');

const app = express();

app.get('/hello', handleHelloWorldRequest);

app.listen(3001, () => {
  console.log('Aplicação está ouvindo na porta 3001');
});

function handleHelloWorldRequest(_request, response) {
  response.status(200).send('Olá, express!');
}
