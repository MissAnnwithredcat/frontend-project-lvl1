export const getRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber === 0) {
    randomNumber = Math.floor(Math.random() * 100);
  }
  return randomNumber;
};

export const getRandomNumber10 = () => Math.floor(Math.random() * 10);

export const getRandomOperator = () => Math.floor(Math.random() * 3);
