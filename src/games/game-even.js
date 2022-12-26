import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const askEvenNumber = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskNumber = () => {
    const task = getRandomNumber(1, 100);

    const correctAnswer = isEven(task) ? 'yes' : 'no';

    return [task, correctAnswer];
  };

  runGame(question, taskNumber);
};
export default askEvenNumber;
