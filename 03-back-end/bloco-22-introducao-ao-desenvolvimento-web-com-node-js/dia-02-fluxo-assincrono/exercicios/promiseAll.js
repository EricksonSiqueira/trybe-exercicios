const fs = require('fs').promises;
const words = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

Promise.all([
  fs.writeFile('file1.txt', words[0]),
  fs.writeFile('file2.txt', words[1]),
  fs.writeFile('file3.txt', words[2]),
  fs.writeFile('file4.txt', words[3]),
  fs.writeFile('file5.txt', words[4]),
])
  .then(() => console.log('Arquivos criados com sucesso'))
  .catch((err) => console.error(`Não foi possível criar os arquivos \n ${err.message}`));

  Promise.all([
    fs.readFile('file1.txt', 'utf8'),
    fs.readFile('file2.txt', 'utf8'),
    fs.readFile('file3.txt', 'utf8'),
    fs.readFile('file4.txt', 'utf8'),
    fs.readFile('file5.txt', 'utf8')
  ])
  .then(([file1, file2, file3, file4, file5]) => {
    const fullString = `${file1} ${file2} ${file3} ${file4} ${file5}`;
    console.log(fullString);
  })
  .catch((err) => console.error(`Não foi possível ler os arquivos \n ${err.message}`));
