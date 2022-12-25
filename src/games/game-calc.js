import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const calcAnswer = (operator, number1, number2) => {
  switch (operator) {
    case '+': return String(number1 + number2);
    case '-': return String(number1 - number2);
    case '*': return String(number1 * number2);
    default: throw new Error(`Unknown operator: '${operator}'`);
  }
};

const solveEquation = () => {
  const question = 'What is the result of the expression?';

  const taskEquation = () => {
    const randomNumber1 = getRandomNumber(1, 30);
    const randomNumber2 = getRandomNumber(1, 30);
    const arr = ['+', '-', '*'];
    const randomOperator = arr[getRandomNumber(1, 3)];

    const randomTask = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    const answer = calcAnswer(randomOperator, randomNumber1, randomNumber2);

    return [randomTask, answer];
  };

  runGame(question, taskEquation);
};

export default solveEquation;
