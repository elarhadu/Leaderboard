import './style.css';
import scoreDetails from './modules/details.js';

const trackDetails = document.querySelector('.track-details');

scoreDetails.forEach((scoreDetail) => {
  const displayScores = document.createElement('div');
  displayScores.innerHTML = '';
  displayScores.innerHTML += `
    <div> ${scoreDetail.name}: ${scoreDetail.score} </div>
    `;
  trackDetails.appendChild(displayScores);
});