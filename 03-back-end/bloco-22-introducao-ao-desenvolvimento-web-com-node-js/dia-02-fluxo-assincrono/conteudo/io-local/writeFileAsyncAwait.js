const fs = require('fs').promises;

async function main () {
  try {
    await fs.writeFile('meu-arquivo.txt', 'Esse agora está escrevendo assincronamente');
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Erro ao escrever no arquivo: ${error.message}`);
  }
}

main();