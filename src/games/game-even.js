import engine from '../index.js';
import { getRandomNumber } from '../random.js';

// ИГРА
const askEvenNumber = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskNumber = () => {
    const randomTask = getRandomNumber();

    // Определяем правильный ответ:
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
