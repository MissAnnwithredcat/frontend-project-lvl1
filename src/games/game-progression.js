import engine from '../index.js';
import { getRandomNumber, getRandomNumber10 } from '../random.js';

const askProgression = () => {
  const question = 'What number is missing in the progression?';

  const taskProgression = () => {
    const start = getRandomNumber();
    const step = getRandomNumber10();
    let answer = '';

    // Строим прогрессию
    const getProgression = (firstNumber, chank) => {
      const arr = [firstNumber];
      for (let i = 0; i <= 10; i += 1) {
        const newNum = arr[i] + chank;
        arr.push(newNum);
      }
      return arr;
    };

    const progression = getProgression(start, step);

    // Формируем прогрессию для Игрока
    const randomPartOfProgress = getRandomNumber10();
    const freePlace = progression[randomPartOfProgress];
    answer = String(freePlace);
    progression[randomPartOfProgress] = '...';
    const randomTask = progression;
    return [randomTask, answer];
  };
  engine(question, taskProgression);
};

export default askProgression;
