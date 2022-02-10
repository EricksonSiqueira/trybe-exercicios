const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise ((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if(err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('./arquivo.txt')
  .then((content) => {
    console.log(`Arquivo lido com sucesso! Conteúdo: ${content.toString('utf8')}`);
  })
  .catch((err) => {
    console.error(`Erro ao ler o arquivo ${err.message}`);
  });

readFilePromise('arquivo.txt')
  .then((content) => {
    console.log(`Lido arquivo.txt com ${content.byteLength} bytes`); 
    return readFilePromise('arquivo.txt');
  })
  .then(content => {
    console.log(`Lido arquivo.txt com ${content.byteLength} bytes`);
    return readFilePromise('arquivo.txt');
  })
  .then((content) => {
    console.log(`Lido arquivo.txt com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.log(`Erro ao ler arquivos: ${err.message}`);
  });