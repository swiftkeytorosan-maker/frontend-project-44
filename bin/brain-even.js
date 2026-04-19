#!/usr/bin/env node

import { runGame } from '../src/index.js';

const isEven = (number) => number % 2 === 0;

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const generateRound = () => {
  const number = getRandomNumber();
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  
  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(gameDescription, generateRound);