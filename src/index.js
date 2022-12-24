import readlineSync from 'readline-sync';

const runGame = (question, randomTask) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);

  console.log(`${question}`);

  let counter = 0;
  const timesRound = 3;

  for (let i = 0; i < timesRound; i += 1) {
    const [task, answer] = randomTask();
    console.log(`Question: ${task}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (answer === answerUser) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    }
  }

  return (counter === 3) ? console.log(`Congratulations, ${nameUser}!`) : console.log(`Let's try again, ${nameUser}!`);
};
export default runGame;
