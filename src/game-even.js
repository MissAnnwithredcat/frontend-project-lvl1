import readlineSync from 'readline-sync';

const askNameUser = () => readlineSync.question('May I have your name? ');

// Функция рандомного числа:
const getRandomNumber = () => Math.floor(Math.random() * 10000);

// ИГРА
const askEvenNumber = () => {
  // ПРИВЕТСТВИЕ
  console.log('Welcome to the Brain Games!');
  const nameUser = askNameUser();
  console.log(`Hello, ${nameUser}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result = 0;
  let sum = 0;

  // ЛОГИКА ИГРЫ
  for (let i = 0; i < 3; i += 1) {
    // Формируем рандомное число:
    const number = getRandomNumber();
    // Озвучиваем число Игроку:
    console.log(`Question: ${number}`);
    // Просим вписать ответ:
    const answerUser = readlineSync.question('Your answer: ');
    // Определяем правильный ответ:
    if (number % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }

    // Выводим результат Игроку:
    if (result === answerUser) {
      sum += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.`);
      break;
    }
  }

  return (sum === 3) ? console.log(`Congratulations, ${nameUser}!`) : console.log(`Let's try again, ${nameUser}!`);
};
export default askEvenNumber;
