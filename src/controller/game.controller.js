const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const { LEVELS } = require('../lib/constanst.lib');


const printGreeting = () => {
  console.log(`\nWelcome to the Number Guessing Game!`);
  console.log(`I'm thinking of a number between 1 and 100.`);
  console.log(`Based on the difficult level you'll have determinated chances to guess the correct number.`);
};

const printLevels = () => {
  console.log(`\nPlease select the difficulty level:`);
  
  for (let key in LEVELS) {
    console.log(`${key}. ${LEVELS[key].name} (${LEVELS[key].chances} chances)`);
  }
}

const chooseLevel = () => {
  const choice = readLineSync.question(('\nEnter your choice: '));
  const levelsKeys = Object.keys(LEVELS);

  if (!levelsKeys.includes(choice)) {
    console.log(`\nOption ${choice} is not valid, bye!`);
    return;
  }

  return LEVELS[choice];
};

const printLevelMessage = (level) => {
  console.log(`\nGreat! You have selected the ${level.name} difficult level.`);
  console.log(`You have ${level.chances} chances to guess the number.`);
  console.log(`Let's start the game!`);
}

const runAttemps = ({chances, thoughtNumber}) => {
  let attemp = 1;
  let numberIsGuessed = false;

  do {
    const guess = readLineSync.question(('\nEnter your guess: '));
    if (thoughtNumber === Number(guess)) {
      console.log(`Congratulations! You guessed the correct number in ${attemp} attempts.`);
      numberIsGuessed = true;
      chances = 0;
    } else {
      console.log(`Incorrect! The number is ${thoughtNumber < guess ? 'less': 'greater'} than ${guess}.`);
      chances = chances - 1;
      attemp = attemp + 1;
    }
  } while (chances > 0 && !numberIsGuessed);

  if (!numberIsGuessed && chances === 0) {
    console.log(`I am sorry your attemps have ended!`);
  }
}

const main = () => {
  printGreeting();  
  const level = chooseLevel();
  printLevelMessage(level);
  runAttemps({chances: level.chances, thoughtNumber});
};

module.exports = {
  main
};
