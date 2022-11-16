'use strict';
import readline from 'readline';

const generate = () => {
  let value = '';

  while (value.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (!value.includes(number)) {
      value += number;
    }
  }

  return value;
}

console.log(generate());


const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const counter = (userNum) => {
  const numbers = Array(10);
  numbers.fill(0);

  let bulls = 0;
  let cows = 0;

  const generatedNum = generate();

  for (let i = 0; i < generatedNum.length; i++) {
    if (generatedNum[i] === userNum[i]) {
      bulls++;
    } else {
      if (numbers[+userNum[i]] > 0) {
        cows++;
      }

      if (numbers[+generatedNum[i]] < 0) {
        cows++;
      }

      numbers[+generatedNum[i]]++;
      numbers[+userNum[i]]--;
    }
  }
console.log(numbers)
  return {bulls, cows};
}

terminal.question('Enter number:', (num) => {
  const {bulls, cows} = counter(num);

  if (bulls === 4) {
    console.log('you won');
    terminal.close();
  } else {
    console.log(`Bulls:${bulls}, Cows:${cows}`);
    terminal.close();
  }
});
