import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const calcExpression = (operator, number1, number2) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: throw new Error(`Unknown operator: '${operator}'`);
  }
};

const calcEquation = () => {
  const question = 'What is the result of the expression?';

  const taskEquation = () => {
    const randomNumber1 = getRandomNumber(1, 30);
    const randomNumber2 = getRandomNumber(1, 30);
    const arr = ['+', '-', '*'];
    const randomOperator = arr[getRandomNumber(1, 3)];

    const task = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    const correctAnswer = String(calcExpression(randomOperator, randomNumber1, randomNumber2));

    return [task, correctAnswer];
  };

  runGame(question, taskEquation);
};

export default calcEquation;
