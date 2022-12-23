import engine from '../index.js';
import getRandomNumber from '../utils.js';

const askPrimeNumber = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const taskNumber = () => {
    const randomNumber = getRandomNumber(1, 100);
    let answer = '';

    // Вычисляем число простое или нет
    const isPrimeNumber = (number) => {
      for (let i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    answer = isPrimeNumber(randomNumber);
    return [randomNumber, answer];
  };
  engine(question, taskNumber);
};

export default askPrimeNumber;
