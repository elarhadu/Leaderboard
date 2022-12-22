import displayBoard from './modules/display.js';
import './style.css';

const newGame = async () => {
  const gameTitle = {
    name: 'Space Runners',
  };

  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameTitle),
    },
  );

  const result = await response.json();
  return result;
  // console.log(result);
};

newGame();

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', async () => {
  const gameId = 'aXlNuRsfySWf8mThxcIh';

  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
  );
  const result = await response.json();
  const data = result.result;
  displayBoard(data);
});

window.addEventListener('DOMContentLoaded', newGame);

let gamerDetails = {
  user: '',
  score: '',
};

const gamer = document.querySelector('.gamer-name');
const score = document.querySelector('.score');

gamer.addEventListener('input', (e) => {
  const gamerName = e.target.value.trim();
  gamerDetails = {
    ...gamerDetails,
    user: gamerName,
  };
});

score.addEventListener('input', (e) => {
  const score = e.target.value.trim();
  gamerDetails = {
    ...gamerDetails,
    score,
  };
});

const form = document.querySelector('.input-score');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const gameId = 'aXlNuRsfySWf8mThxcIh';

  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gamerDetails),
    },
  );
  form.reset();
  return response;
});
