import readlineSync from 'readline-sync';

const runGame = (question, taskGame) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);

  console.log(`${question}`);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [task, correctAnswer] = taskGame();
    console.log(`Question: ${task}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${nameUser}!`);
    }
  }

  return console.log(`Congratulations, ${nameUser}!`);
};
export default runGame;
