import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const askEvenNumber = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskNumber = () => {
    const randomTask = getRandomNumber(1, 100);

    const isEven = (number) => number % 2 === 0;
    const answer = isEven(randomTask) ? 'yes' : 'no';

    return [randomTask, answer];
  };

  runGame(question, taskNumber);
};
export default askEvenNumber;
