import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (dividend, divider) => {
  let num1 = dividend;
  let num2 = divider;
  if (num1 === 0 || num1 === 1) {
    return Error(`${num1} is not a prime or a composite number. Please, try again.`);
  }
  if (num2 === 0) {
    return Error(`${num2} can't divide by zero. Please, try again.`);
  }

  let result = num1 % num2;
  if (result === 0) {
    result = num2;
  } else {
    num1 = num2;
    num2 = result;
    result = getGCD(num1, num2);
  }
  return result;
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
