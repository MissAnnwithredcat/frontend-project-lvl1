import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (firstNumber, chank, length) => {
  const arr = [firstNumber];
  for (let i = 0; i <= length; i += 1) {
    const newNum = arr[i] + chank;
    arr.push(newNum);
  }
  return arr;
};

const askProgression = () => {
  const question = 'What number is missing in the progression?';

  const taskProgression = () => {
    const start = getRandomNumber(1, 100);
    const step = getRandomNumber(1, 10);
    const length = 10;
    let answer = '';

    const progression = getProgression(start, step, length);

    const randomPartOfProgress = getRandomNumber(1, 10);
    const freePlace = progression[randomPartOfProgress];
    answer = String(freePlace);
    progression[randomPartOfProgress] = '..';
    const randomTask = progression.join(' ');
    return [randomTask, answer];
  };
  runGame(question, taskProgression);
};

export default askProgression;
