import engine from '../index.js';
import getRandomNumber from '../utils.js';

const askProgression = () => {
  const question = 'What number is missing in the progression?';

  const taskProgression = () => {
    const start = getRandomNumber(1, 100);
    const step = getRandomNumber(1, 10);
    let answer = '';

    const getProgression = (firstNumber, chank) => {
      const arr = [firstNumber];
      for (let i = 0; i <= 10; i += 1) {
        const newNum = arr[i] + chank;
        arr.push(newNum);
      }
      return arr;
    };

    const progression = getProgression(start, step);

    const randomPartOfProgress = getRandomNumber(1, 10);
    const freePlace = progression[randomPartOfProgress];
    answer = String(freePlace);
    progression[randomPartOfProgress] = '..';
    const randomTask = progression.join(' ');
    return [randomTask, answer];
  };
  engine(question, taskProgression);
};

export default askProgression;
