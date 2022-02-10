const fs = require('fs');

const fileCreator = (fileName, content) => {
  if(fileName && content) { 
    fs.writeFile(fileName, content, (err) => {
      if(err) {
        return console.log(err);
      } else {
        return 'ok';
      }
    })
    return 'ok';
  } else {
    return 'Os paramêtros não podem estar vazios';
  }
}

module.exports = fileCreator;
