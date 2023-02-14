import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (firstNumber, step, length) => {
  const arr = [firstNumber];
  for (let i = 0; i <= length; i += 1) {
    const newNum = arr[i] + step;
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

    const progression = getProgression(start, step, length);

    const hiddenNumberIndex = getRandomNumber(1, 10);
    const correctAnswer = String(progression[hiddenNumberIndex]);
    progression[hiddenNumberIndex] = '..';
    const task = progression.join(' ');
    return [task, correctAnswer];
  };
  runGame(question, taskProgression);
};

export default askProgression;
