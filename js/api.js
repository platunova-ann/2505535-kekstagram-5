
const SERVER_URL = 'https://29.javascript.htmlacademy.pro/kekstagram';


const Path = {
  GET_DATA: '/data',
};

const ErrorMessages = {
  GET_DATA: 'Не удалось загрузить данные с сервера',
};

// Функция для загрузки данных
const loadData = (path, errorMessage) =>
  fetch(`${SERVER_URL}${path}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(errorMessage);
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorMessage);
    });

// Функция для получения данных с сервера
const getData = () => loadData(Path.GET_DATA, ErrorMessages.GET_DATA);


// Экспорт функций
export { getData };
