#!/usr/bin/env node
import { runGame } from '../index.js';

const getGcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getRandomNumber = () => Math.floor(Math.random() * 50) + 1;

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  
  return { question, correctAnswer };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

// Оборачиваем в функцию и экспортируем её
const runGcdGame = () => {
  runGame(gameDescription, generateRound);
};

export default runGcdGame;
