import engine from '../index.js';
import { getRandomNumber, getRandomOperator } from '../random.js';

// ИГРА
const solveEquation = () => {
  // ВОПРОС:
  const question = 'What is the result of the expression?';

  // Формируем уравнение и определяем правильный ответ:
  const taskEquation = () => {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const arr = ['+', '-', '*'];
    const randomOperator = arr[getRandomOperator()];

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
