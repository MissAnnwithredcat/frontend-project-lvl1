import readlineSync from 'readline-sync';

const askNameUser = () => readlineSync.question('May I have your name? ');

// Функция рандомного числа:
const getRandomNumber = () => Math.floor(Math.random() * 1000);

// Функция рандомного оператора:
const arr = ['+', '-', '*'];
const getRandomOperator = () => Math.floor(Math.random() * 3);

// ИГРА
const solveEquation = () => {
  // ПРИВЕТСТВИЕ
  console.log('Welcome to the Brain Games!');
  const nameUser = askNameUser();
  console.log(`Hello, ${nameUser}`);
  console.log('What is the result of the expression?');

  let result = 0;
  let sum = 0;

  // ЛОГИКА ИГРЫ
  // eslint-disable-next-line no-unreachable-loop
  for (let i = 0; i < 3; i += 1) {
    // Формируем рандомное уравнение:
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const randomOperator = arr[getRandomOperator()];

    // Озвучиваем уравнение Игроку:
    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);

    // Предлагаем ввести ответ:
    const answerUser = readlineSync.question('Your answer: ');

    // Считаем правильный ответ:
    switch (randomOperator) {
      case '+': result = randomNumber1 + randomNumber2;
        break;
      case '-': result = randomNumber1 - randomNumber2;
        break;
      case '*': result = randomNumber1 * randomNumber2;
        break;
      default: result = null;
    }
    // Выводим результат раунда Игроку:
    if (result === Number(answerUser)) {
      sum += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.`);
      break;
    }
  }

  return (sum === 3) ? console.log(`Congratulations, ${nameUser}!`) : console.log(`Let's try again, ${nameUser}!`);
};

export default solveEquation;
