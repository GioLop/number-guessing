class GameModel {
  constructor() {
    this.numberToGuess = 0;
    this.chosenLevel = { name: '', chances: 0 };
    this.attemps = 0
  };

  setNumberToGuess = (number) => { this.numberToGuess = number };

  getNumberToGuess = () => this.numberToGuess;

  setChosenLevel = (level) => { this.chosenLevel = level };

  getChosenLevel = () => this.chosenLevel;

  setAttemps = (number) => { this.attemps = number };

  getAttemps = () => this.attemps;
};

module.exports = {
  GameModel
};