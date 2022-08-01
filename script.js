'use strict';

const guessNumber = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const guessMyNumber = document.querySelector('h1');
const again = document.querySelector('.again');

let score = 20;
let highScore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;

const disable = () => {
  guessNumber.disabled = true;
  btnCheck.style.cursor = 'not-allowed';
};

btnCheck.addEventListener('click', () => {
  const guess = Number(guessNumber.value);
  if (guessNumber.value) {
    if (score < 1) {
      disable();
      guessMyNumber.textContent = 'GAME OVER!';
      body.style.backgroundColor = '#e4000f';
      number.textContent = randomNumber;
      message.textContent = ' You lost the game!';
    } else if (guess < randomNumber) {
      score -= 1;
      message.textContent = 'TOO LOW!';
    } else if (guess > randomNumber) {
      score -= 1;
      message.textContent = 'TOO HIGH!';
    } else {
      disable();
      message.textContent = 'CORRECT NUMBER!';
      document.querySelector('.highscore').textContent = score;
      body.style.backgroundColor = '#60b347';
      number.textContent = randomNumber;
      number.style.width = '30rem';
      guessMyNumber.textContent = 'CONGRATS!';
      btnCheck.disabled = true;
      if (score > highScore) {
        highScore = score;
      }
    }
  } else {
    message.textContent = 'PLEASE ENTER A NUMBER!';
  }
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
  guessNumber.value = '';
});

again.addEventListener('click', () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  btnCheck.style.cursor = 'pointer';
  btnCheck.disabled = false;
  guessNumber.disabled = false;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  guessMyNumber.textContent = 'Guess My Number!!';
  number.textContent = '?';
  message.textContent = 'Start guessing...';
});
