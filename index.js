'use strict';

const randomNumber = Math.floor(Math.random() * 1000) + 1;
console.log(randomNumber);

let userNumber;

do {
  userNumber = prompt('Enter your number');

  if (randomNumber > Number(userNumber)) {
    alert('More');
  } else if (randomNumber < Number(userNumber)) {
    alert('Less');
  }

  if (userNumber === 'exit') {
    console.log('Exit');
    break;
  }
} while (Number(randomNumber) !== Number(userNumber));

alert('You win!');
