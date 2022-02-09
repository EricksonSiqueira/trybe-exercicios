const simpsonsData = require('./simpsons.json');
const fs = require('fs').promises;

const renderData = ((data) => {
  data.forEach((character) => {
    console.log(`${character.id} - ${character.name}`);
  });
});
const searchData = (id) => {
  return new Promise ((resolve, reject) => {
    const character = simpsonsData.find((character) => character.id == id);
    if (!character) {
      reject(new Error('id não encontrado'));
    }
    resolve(character);
  });
}

const removeData = () => {
  const data = simpsonsData.filter((character) => character.id != 6 && character.id != 10);
  
  try {
    fs.writeFile('simpsons.json', JSON.stringify(data));
    console.log('Arquivo modificado com sucesso!');
  } catch (err){
    console.error(`Erro ao modificar o arquivo \n ${err.message}`);
  }
}

const newFile = (min, max, nomeDoArquivo) => {
  const data = simpsonsData.filter((character) => character.id >= min && character.id <= max);
  try {
    fs.writeFile(nomeDoArquivo, JSON.stringify(data));
    console.log(`Arquivo ${nomeDoArquivo} criado com sucesso!`);
  } catch (err) {
    console.log(`Não foi possível criar o arquvivo \n ${err.message}`);
  }
}

const addCharacterById = (id) => {
  const character = simpsonsData.find((char) => char.id == id);
  if (character) {
    const simpsonFamily = require('./simpsonFamily.json');
    simpsonFamily.push(character);
    try {
      fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonFamily));
      console.log('Arquivo modificado com sucesso!');
    } catch (err) {
      console.log(`Não foi possível modificar o arquivo \n ${err.message}`);
    }
  } else {
    console.log('O personagem não foi encontrado');
  }
}

const tradeCharacter = (idToAdd, idToRemove) => {
  const characterToAdd = simpsonsData.find((char) => char.id == idToAdd);
  const characterToRemove = simpsonsData.find((char) => char.id != idToRemove);
  if (characterToAdd && characterToRemove) {
    try{
      const simpsonFamily = require('./simpsonFamily.json');
      const newArr = simpsonFamily.filter((char) => char.id != idToRemove);
      newArr.push(characterToAdd);
      fs.writeFile('simpsonFamily.json', JSON.stringify(newArr));
      console.log('Arquivo modificado com sucesso!');
    } catch (err) {
      console.log(`Não foi possível modificar o arquivo\n ${err.message}`);
    }
  }
}

tradeCharacter(5, 8);
