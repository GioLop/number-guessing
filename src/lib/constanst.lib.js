const GAME_LEVELS = {
  1: { name: 'Easy', chances: 10 },
  2: { name: 'Medium', chances: 5 },
  3: { name: 'Hard', chances: 3 }
};

const GAME_STEPS = { 
  1: 'Greet', 
  2: 'Show Levels', 
  3: 'Choice Level',
  4: 'Show choosen level',
  5: 'Guess Attemp',
  6: 'Evaluate guess',
  7: 'Show Result',
  8: 'Ask for other round',
  9: 'End Game'
};

module.exports = {
  GAME_LEVELS,
  GAME_STEPS
};