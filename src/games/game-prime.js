import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const hasDivider = (num) => {
  const arrDivider = [];
  const firstDivider = 2;
  for (let i = firstDivider; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      arrDivider.push(i);
    }
  }

  return arrDivider.length === 0;
};

const askPrimeNumber = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const taskNumber = () => {
    const randomNumber = getRandomNumber(2, 100);

    const answer = hasDivider(randomNumber) ? 'yes' : 'no';
    return [randomNumber, answer];
  };
  runGame(question, taskNumber);
};

export default askPrimeNumber;
