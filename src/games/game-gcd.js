import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (dividend, divider) => {
  if (divider === 0) {
    return Math.abs(dividend);
  }
  return getGCD(divider, dividend % divider);
};

const askDivisor = () => {
  const question = 'Find the greatest common divisor of given numbers.';

  const taskNumber = () => {
    const randomNumber1 = getRandomNumber(2, 100);
    const randomNumber2 = getRandomNumber(2, 100);
    const task = `${randomNumber1} ${randomNumber2}`;
    const number1 = (randomNumber1 > randomNumber2) ? randomNumber1 : randomNumber2;
    const number2 = (randomNumber1 > randomNumber2) ? randomNumber2 : randomNumber1;

    const correctAnswer = String(getGCD(number1, number2));
    return [task, correctAnswer];
  };

  runGame(question, taskNumber);
};
export default askDivisor;
