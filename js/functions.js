function validateStringLength(inputString, maxLength) {
  return (inputString.length <= maxLength);
}

// Примеры использования функции
validateStringLength('проверяемая строка', 20); // true
validateStringLength('проверяемая строка', 18); // true
validateStringLength('проверяемая строка', 10); // false

function isPalindrome(str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';

  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }

  return normalizedStr === reversedStr;
}

// Примеры использования:
isPalindrome('топот'); // true
isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false
isPalindrome('Лёша на полке клопа нашёл'); // true
