const readlineSync = require('readline-sync');

class GameView {
  printGreeting = () => {
    console.log(`\nWelcome to the Number Guessing Game!`);
    console.log(`I'm thinking of a number between 1 and 100.`);
    console.log(`Based on the difficult level you'll have determinated chances to guess the correct number.`);
  };
  
  printLevels = ({ levels }) => {
    console.log(`\nPlease select the difficulty level:`);
    
    for (let key in levels) {
      console.log(`${key}. ${levels[key].name} (${levels[key].chances} chances)`);
    }
  };
  
  printLevelMessage = ({ level }) => {
    console.log(`\nGreat! You have selected the ${level.name} difficult level.`);
    console.log(`You have ${level.chances} chances to guess the number.`);
    console.log(`Let's start the game!`);
  };
  
  printCongratsMessage  = ({ attemps }) => {
    console.log(`Congratulations! You guessed the correct number in ${attemps} attempts.`);
  };
  
  printGuessFailMessage = ({ numberToGuess, guess }) => {
    console.log(`Incorrect! The number is ${numberToGuess < guess ? 'less': 'greater'} than ${guess}.`);
  };
  
  printAttempsEndMessage = () => {
    console.log(`I am sorry your attemps have ended!`);
  };
  
  printInvalidChoice = ({ choice }) => {
    console.log(`\nOption ${choice} is not valid, try again!`);
  };

  printQuitMessage = () => {
    console.log('\nThank you for playing this game, see you later!');
  };

  getChoice = ({ type = 'choice' }) => {
    return readlineSync.question((`\nEnter your ${type}: `));
  };

  getAnotherRound = () => {
    return readlineSync.keyInYN(`\nDo you want to play another round?`);
  };
};

module.exports = { GameView };
