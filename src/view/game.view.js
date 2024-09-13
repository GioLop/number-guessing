const printGreeting = () => {
  console.log(`\nWelcome to the Number Guessing Game!`);
  console.log(`I'm thinking of a number between 1 and 100.`);
  console.log(`Based on the difficult level you'll have determinated chances to guess the correct number.`);
};

const printLevels = ({ levels }) => {
  console.log(`\nPlease select the difficulty level:`);
  
  for (let key in levels) {
    console.log(`${key}. ${levels[key].name} (${levels[key].chances} chances)`);
  }
};

const getChoice = ({ type = 'choice' }) => {
  const choice = readLineSync.question((`\nEnter your ${type}: `));
  return choice
};

const printOptionInvalidMessage = ({ choice }) => {
  console.log(`\nOption ${choice} is not valid, bye!`);
};

const printLevelMessage = ({ level }) => {
  console.log(`\nGreat! You have selected the ${level.name} difficult level.`);
  console.log(`You have ${level.chances} chances to guess the number.`);
  console.log(`Let's start the game!`);
};

const printCongratsMessage  = ({ attemps }) => {
  console.log(`Congratulations! You guessed the correct number in ${attemps} attempts.`);
};

const printGuessFailMessage = ({ numberToGuess, guess }) => {
  console.log(`Incorrect! The number is ${numberToGuess < guess ? 'less': 'greater'} than ${guess}.`);
};

const printAttempsEndMessage = () => {
  console.log(`I am sorry your attemps have ended!`);
};

module.exports = {
  printGreeting,
  printLevels,
  getChoice,
  printOptionInvalidMessage,
  printLevelMessage,
  printCongratsMessage,
  printGuessFailMessage,
  printAttempsEndMessage
};
