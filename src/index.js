import displayBoard from './modules/display.js';
import fetchData from './modules/fetch.js';
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
};

newGame();
fetchData();

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', async () => {
  const gameId = 'Ttc0Z4NnGUfsGkYfGuJB';

  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
  );
  const result = await response.json();
  const data = result.result;
  displayBoard(data);
});

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
  const gameId = 'Ttc0Z4NnGUfsGkYfGuJB';

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
