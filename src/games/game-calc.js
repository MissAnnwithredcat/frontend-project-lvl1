import engine from '../index.js';
import getRandomNumber from '../utils.js';

// ИГРА
const solveEquation = () => {
  // ВОПРОС:
  const question = 'What is the result of the expression?';

  // Формируем уравнение и определяем правильный ответ:
  const taskEquation = () => {
    const randomNumber1 = getRandomNumber(1, 30);
    const randomNumber2 = getRandomNumber(1, 30);
    const arr = ['+', '-', '*'];
    const randomOperator = arr[getRandomNumber(1, 3)];

    const randomTask = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    // Считаем правильный ответ:
    let answer = '';
    switch (randomOperator) {
      case '+': answer = randomNumber1 + randomNumber2;
        break;
      case '-': answer = randomNumber1 - randomNumber2;
        break;
      case '*': answer = randomNumber1 * randomNumber2;
        break;
      default: answer = null;
    }
    answer = String(answer);
    return [randomTask, answer];
  };

  engine(question, taskEquation);
};

export default solveEquation;
