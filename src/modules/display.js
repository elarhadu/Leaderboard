const trackDetails = document.querySelector('.track-details');

const displayBoard = async (scoreDetails) => {
  trackDetails.innerHTML = '';
  scoreDetails.forEach((scoreDetail) => {
    trackDetails.innerHTML += `
        <div> ${scoreDetail.user}: ${scoreDetail.score} </div>
        `;
  });
};

export default displayBoard;
