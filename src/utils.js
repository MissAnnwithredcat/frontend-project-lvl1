const getRandomNumber = (min, max) => {
  if (min > max) {
    return Error(`${min} can't be more ${max}. Please, try again.`);
  }
  return Math.floor(Math.random() * (max - min) + min);
};

export default getRandomNumber;
