import engine from '../index.js';
import getRandomNumber from '../utils.js';

const askEvenNumber = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskNumber = () => {
    const randomTask = getRandomNumber(1, 100);

    let answer = '';
    if (randomTask % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    return [randomTask, answer];
  };

  engine(question, taskNumber);
};
export default askEvenNumber;
