// modules/util.js
export function formatString(str) {
  return str.trim().toLowerCase();
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
