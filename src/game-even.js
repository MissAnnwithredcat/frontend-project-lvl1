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

  let result = '';

  // ЛОГИКА ИГРЫ
  for (let i = 0; i < 3; i += 1) {
    // Формируем рандомное число:
    const number = getRandomNumber();
    // Озвучиваем число Игроку:
    console.log(`Question: ${number}`);
    // Просим вписать ответ:
    const answerUser = readlineSync.question('Your answer: ');
    // Проверяем ответ на правильность:
    if (number % 2 === 0) {
      if (answerUser === 'yes') {
        result = 'true';
        console.log('Correct!');
      } else {
        result = 'false';
        console.log(`'${answerUser}' is wrong answer ;(. Correct answer was 'yes'.`);
        break;
      }
    } else if (answerUser === 'no') {
      result = 'true';
      console.log('Correct!');
    } else {
      result = 'false';
      return `'${answerUser}' is wrong answer ;(. Correct answer was 'no'.`;
    }
  }
  return (result === 'true') ? console.log(`Congratulations, ${nameUser}!`) : console.log(`Let's try again, ${nameUser}!`);
};
export default askEvenNumber;
