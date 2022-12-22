import displayBoard from './display.js';

// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aXlNuRsfySWf8mThxcIh/scores';

const fetchData = async () => {
  const gameId = 'aXlNuRsfySWf8mThxcIh';

  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
  );
  const result = await response.json();
  const data = result.result;
  displayBoard(data);
  console.log(data);
};
document.addEventListener('DOMContentLoaded', fetchData);
// fetchData();
