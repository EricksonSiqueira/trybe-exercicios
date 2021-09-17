// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => addJoke(data.joke));
};

const addJoke = (joke) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  const p = document.createElement('p');
  p.innerText = joke;
  jokeContainer.appendChild(p);
}

window.onload = () => fetchJoke();