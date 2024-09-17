const { 
  GAME_LEVELS,
  GAME_STEPS
} = require('../lib/constanst.lib');
const { getRandomNumber } = require('../lib/number.lib');
const { GameModel } = require('../model/game.model');
const { GameView } = require('../view/game.view');

const model = new GameModel();
const view = new GameView();

class GameController {
  init = () => {
    model.setStep(GAME_STEPS[1]);
    this.run();
  };

  greet = () => {
    view.printGreeting();
    this.runStep(GAME_STEPS[2]);
  };

  showInstructions = () => {
    view.printLevels({ levels: GAME_LEVELS });
    this.runStep(GAME_STEPS[3]);
  };

  chooseLevel = () => {
    const choice = view.getChoice({ type: 'choice' });
    const levelsKeys = Object.keys(GAME_LEVELS);
    
    if (!levelsKeys.includes(choice)) {
      view.printInvalidChoice({ choice });
      this.runStep(GAME_STEPS[3]);
    } else {
      model.setChosenLevel(GAME_LEVELS[choice]);
      model.setNumberToGuess(getRandomNumber());
      this.runStep(GAME_STEPS[4]);
    }
  };

  showChoosenLevel = () => {
    const level = model.getChosenLevel();
    
    view.printLevelMessage({ level });
    this.runStep(GAME_STEPS[5]);
  };

  runAttemp = () => {
    const numberToGuess = model.getNumberToGuess();
    const attemps = model.getAttemps();
    const guess = view.getChoice({ type:'guess' });

    model.setAttemps(attemps + 1);
    model.setGuessChoice(guess);
    model.setIsNumberGuessed(Number(guess) === Number(numberToGuess));
    this.runStep(GAME_STEPS[6]);
  };

  evaluate = () => {
    const attemps = model.getAttemps();
    const { chances } = model.getChosenLevel();
    const isNumberGuessed = model.getIsNumberGuessed();
    const hasMoreChances = attemps < chances;
    
    if (isNumberGuessed || !hasMoreChances) {
      this.runStep(GAME_STEPS[7]);
    } else {
      this.tryAgain();
      this.runStep(GAME_STEPS[5]);
    }
  };

  tryAgain = () => {
    const numberToGuess = model.getNumberToGuess();
    const guess = model.getGuessChoice();
      
    view.printGuessFailMessage({ numberToGuess, guess });
  };

  showResult = () => {
    const attemps = model.getAttemps();
    const isNumberGuessed = model.getIsNumberGuessed();
    
    if (isNumberGuessed) {
      view.printCongratsMessage({ attemps });
    } else {
      view.printAttempsEndMessage();
    }

    this.runStep(GAME_STEPS[8]);
  };

  askAnotherRound = () => {
    const another = view.getAnotherRound();
    if (another) {
      model.restore();
      this.runStep(GAME_STEPS[2]);
    } else {
      this.runStep(GAME_STEPS[9]);
    }
  };

  quit = () => {
    view.printQuitMessage();
  };

  runStep = (step) => {
    model.setStep(step);
    this.run();
  };

  run = () => {
    const currentStep = model.getStep();
    
    switch (currentStep) {
      case GAME_STEPS[1]:
        this.greet();
        break;
      case GAME_STEPS[2]:
        this.showInstructions();
        break;
      case GAME_STEPS[3]:
        this.chooseLevel();
        break
      case GAME_STEPS[4]:
        this.showChoosenLevel();
        break;
      case GAME_STEPS[5]:
        this.runAttemp();
        break;
      case GAME_STEPS[6]:
          this.evaluate();
          break;
      case GAME_STEPS[7]:
        this.showResult();
        break;
      case GAME_STEPS[8]:
        this.askAnotherRound();
        break;
      default:
        this.quit();
        break;
    }
  };
}

module.exports = { GameController };
