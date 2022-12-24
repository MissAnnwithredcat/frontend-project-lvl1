import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGreaterCommonDivider = (dividend, divider) => {
  let num1 = dividend;
  let num2 = divider;
  let result = num1 % num2;
  if (result === 0) {
    result = num2;
  } else {
    num1 = num2;
    num2 = result;
    result = getGreaterCommonDivider(num1, num2);
  }
  return result;
};

const askDivisor = () => {
  const question = 'Find the greatest common divisor of given numbers.';

  const taskNumber = () => {
    const randomNumber1 = getRandomNumber(2, 100);
    const randomNumber2 = getRandomNumber(2, 100);
    const randomTask = `${randomNumber1} ${randomNumber2}`;
    const number1 = (randomNumber1 > randomNumber2) ? randomNumber1 : randomNumber2;
    const number2 = (randomNumber1 > randomNumber2) ? randomNumber2 : randomNumber1;

    const answer = String(getGreaterCommonDivider(number1, number2));
    return [randomTask, answer];
  };

  runGame(question, taskNumber);
};
export default askDivisor;
