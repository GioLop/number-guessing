# number-guessing

A simple number guessing game where the computer randomly selects a number and the user has to guess it.

## Project URL

rodamap(https://roadmap.sh/projects/number-guessing-game)

## Prerequisites

- [NodeJS ^18.x](https://nodejs.org/en)
- [Node Package Manager (npm)](https://www.npmjs.com/)

## Installation

1. Clone this repository.

```shell
git clone https://github.com/GioLop/number-guessing.git
```

2. Enter to folder.

```shell
cd number-guessing
```

3. Install dependecies.

```shell
npm i
```

4. Install app globally.

```shell
npm install -g .
```

Now you can use it.

## Run from your shell

```shell
guessing-game
```

## You'll be prompted

```shell
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2

Great! You have selected the Medium difficulty level.
Let's start the game!

Enter your guess: 50
Incorrect! The number is less than 50.

Enter your guess: 25
Incorrect! The number is greater than 25.

Enter your guess: 35
Incorrect! The number is less than 35.

Enter your guess: 30
Congratulations! You guessed the correct number in 4 attempts.
```
