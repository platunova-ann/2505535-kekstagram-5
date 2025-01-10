const getRandomIdElement = (array) => {

  array[getRandomInteger(0, array.length -1)];
  const createIdGenerator = () =>{
    let lastGeneratedId = 0;
    return () => {
      lastGeneratedId +=1;
      return lastGeneratedId
    }
  }
}

function formatString(str) {
  return str.trim().toLowerCase();
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomIdElement, formatString, getRandomNumber };
