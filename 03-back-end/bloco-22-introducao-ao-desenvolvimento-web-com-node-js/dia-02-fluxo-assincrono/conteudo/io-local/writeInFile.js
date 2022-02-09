const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Esse é o novo texto do arquivo')
  .then(() => {
    console.log('Arquivo escrito com sucesso!')
  })
  .catch((err) => {
    console.error(`Erro ao escrever no arquivo: ${err.message}`);
  });