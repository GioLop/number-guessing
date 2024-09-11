const readLineSync = require('readline-sync');

const main = () => {
  const thinkedNumber = Math.floor(Math.random() * 100) + 1;

  console.log(thinkedNumber);

  console.log(`Welcome to the Number Guessing Game!`);
  console.log(`I'm thinking of a number between 1 and 100.`);
  console.log(`Based on the difficult level you'll have determinated chances to guess the correct number.`);
  console.log(`\nPlease select the difficulty level:`);
  
  const levels = {
    1: {
      name: 'Easy',
      chances: 10
    },
    2: {
      name: 'Medium',
      chances: 5
    },
    3: {
      name: 'Hard',
      chances: 3
    }
  };

  for (let key in levels) {
    console.log(`${key}. ${levels[key].name} (${levels[key].chances} chances)`);
  }
  
  const choice = readLineSync.question(('\nEnter your choice: '));
  const levelsKeys = Object.keys(levels);

  if (!levelsKeys.includes(choice)) {
    console.log(`\nOption ${choice} is not valid, bye!`);
    return;
  }
  
  console.log(`\nGreat! You have selected the ${levels[choice].name} difficult level.`);
  console.log(`Let's start the game!\n`);

  let chances = levels[choice].chances;
  let attemp = 1;
  let numberIsGuessed = false;

  do {
    const guess = readLineSync.question(('\nEnter your guess: '));
    if (thinkedNumber === Number(guess)) {
      console.log(`Congratulations! You guessed the correct number in ${attemp} attempts.`);
      numberIsGuessed = true;
      chances = 0;
    } else {
      console.log(`Incorrect! The number is ${thinkedNumber < guess ? 'less': 'greater'} than ${guess}.`);
      chances = chances - 1;
      attemp = attemp + 1;
    }
  } while (chances > 0 && !numberIsGuessed);

  if (!numberIsGuessed && chances === 0) {
    console.log(`I am sorry your attemps have ended!`);
    console.log(`Do you want to try again?`);
  }
};

module.exports = {
  main
};
