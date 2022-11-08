import readlineSync from 'readline-sync';

const askNameUser = () => readlineSync.question('May I have your name? ');
export default askNameUser;
