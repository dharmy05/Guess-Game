'use strict'
// document.querySelector('.number').textContent = '10'
// document.querySelector('.score').textContent = '30'
// document.querySelector('.highscore').textContent = '30'
// document.querySelector('.message').textContent = 'Gues completed'
// document.querySelector('.guess').value = ''
// console.log(document.querySelector('.guess').value);

let number = Number(Math.floor(Math.random() * 20) + 1);
//   document.querySelector('.number').textContent = number;
console.log(number, typeof number);

let score = document.querySelector('.score').textContent;
// console.log(score);
score--;
//  console.log( score);

let highscore = document.querySelector('.highscore').textContent;
highscore = score;
console.log( highscore);


const handler = () => {
    let guess = document.querySelector('.guess').value
        // console.log(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Guess';
  } else if (guess == number) {
      document.querySelector('.message').textContent = 'Guess Correct';
      document.querySelector('.highscore').textContent = score+1
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = ' 30rem'
      document.querySelector('.number').textContent = number;

  } else if (guess < number) {
      if (score > 1) {
          document.querySelector('.score').textContent = score--;
          document.querySelector('.message').textContent = 'To Low';
      } else {
          document.querySelector('.message').textContent = 'You Lost'; 
          document.querySelector('.score').textContent = 0;
      }
  } else if (guess > number) {
      if (score > 1) {
          document.querySelector('.score').textContent = score--;
        document.querySelector('.message').textContent = 'To High';
      } else {
          document.querySelector('.message').textContent = 'You Lost';
           document.querySelector('.score').textContent = 0;
      }
  }
};

const check = document.querySelector('.check');
check.addEventListener('click', handler);

const resetBtn = document.querySelector('.again')
const reset = () => {
    document.querySelector('.message').textContent = 'Start Guessing...'
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = ' 15rem';
}
resetBtn.addEventListener('click', reset)