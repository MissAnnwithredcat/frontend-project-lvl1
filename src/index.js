import readlineSync from 'readline-sync';

// const askNameUser = readlineSync.question('May I have your name? ');

// ИГРА
const engine = (question, randomTask) => {
  // ПРИВЕТСТВИЕ
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);

  console.log(`${question}`);

  let sum = 0;

  // ЛОГИКА ИГРЫ
  for (let i = 0; i < 3; i += 1) {
    // Озвучиваем задание Игроку:
    const answer = randomTask();
    const task = answer[0];
    console.log(`Question: ${task}`);

    // Просим вписать ответ:
    const answerUser = readlineSync.question('Your answer: ');

    // Определяем правильный ответ:
    const trueAnswer = answer[1];

    // Выводим результат Игроку:
    if (trueAnswer === answerUser) {
      sum += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      break;
    }
  }

  return (sum === 3) ? console.log(`Congratulations, ${nameUser}!`) : console.log(`Let's try again, ${nameUser}!`);
};
export default engine;
