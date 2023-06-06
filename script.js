'use strict';

/*
console.log(document.querySelector('.message'));
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').innerText = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').innerText = '⛔ No number!';
    displayMessage('⛔ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').innerText = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').innerText = highscore;
    }
    // When guess is too high or low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').innerText =
      //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').innerText = score;
    } else {
      //   document.querySelector('.message').innerText = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').innerText = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').innerText = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').innerText = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
