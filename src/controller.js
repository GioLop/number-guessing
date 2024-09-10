const readLineSync = require('readline-sync');

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

const levelsProperties = Object.values(levels);
const levelsKeys = Object.keys(levels);

const main = () => {
  console.log(`Welcome to the Number Guessing Game!`);
  console.log(`I'm thinking of a number between 1 and 100.`);
  console.log(`Based on the difficult level you'll have N chances to guess the correct number.`);
  console.log(`\nPlease select the difficulty level:`);

  for (let key in levels) {
    console.log(`${key}. ${levels[key].name} (${levels[key].chances} chances)`);
  }
  
  const choice = readLineSync.question(('\nEnter your choice: '));

  if (!levelsKeys.includes(choice)) {
    console.log(`\nOption ${choice} is not valid, bye!`);
    return;
  }
  
  console.log(`\nGreat! You have selected the ${levels[choice].name} difficult level.`);
  console.log(`Let's start the game!\n`);
};

module.exports = {
  main
};
