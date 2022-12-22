import displayBoard from './display.js';

const fetchData = async () => {
  const gameId = 'Ttc0Z4NnGUfsGkYfGuJB';
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
  );
  const result = await response.json();
  const data = result.result;
  displayBoard(data);
};

export default fetchData;
