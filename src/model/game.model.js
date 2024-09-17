class GameModel {
  constructor() {
    this.chosenLevel = { name: '', chances: 0 };
    this.attemps = 0;
    this.step = '';
    this.isNumberGuessed = false;
    this.numberToGuess = 0;
    this.guessChoice = 0;
  };

  getChosenLevel = () => this.chosenLevel;

  getAttemps = () => this.attemps;

  getStep = () => this.step;

  getNumberToGuess = () => this.numberToGuess;

  getIsNumberGuessed = () => this.isNumberGuessed;

  getGuessChoice = () => this.guessChoice;

  setChosenLevel = (level) => { 
    this.chosenLevel = level;
    return this.getChosenLevel();
  };
  
  setAttemps = (number) => { 
    this.attemps = number
    return this.getAttemps();
  };
  
  setStep = (step) => { 
    this.step = step
    return this.getStep();
  };

  setNumberToGuess = (number) => {
    this.numberToGuess = number;
    return this.getNumberToGuess();
  };

  setIsNumberGuessed = (boolean) => {
    this.isNumberGuessed = boolean;
    return this.getIsNumberGuessed();
  };

  setGuessChoice = (number) => {
    this.guessChoice = number;
    return this.getGuessChoice();
  };

  restore = () => {
    this.chosenLevel = { name: '', chances: 0 };
    this.attemps = 0;
    this.step = '';
    this.isNumberGuessed = false;
    this.numberToGuess = 0;
    this.guessChoice = 0;
  };
};

module.exports = {
  GameModel
};