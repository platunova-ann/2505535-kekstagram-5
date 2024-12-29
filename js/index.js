import { showBigPicture } from './big-pictures.js';
const SERVER_URL = 'https://29.javascript.htmlacademy.pro/kekstagram';


const renderIndex = (pictures) => {
  container.addEventListener('click', (evt) =>{
    const thumbnail = evt.target.closest(['data-thubnail-id']);
    if(!thumbnail){
      return;
    }
    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });

};
const PATHS = {
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
const getData = () => loadData(PATHS.GET_DATA, ErrorMessages.GET_DATA);

// Шаблон для создания миниатюр
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

// Функция для создания одной миниатюры
const createThumbnail = ({ comments, description, likes, url }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes span').textContent = likes;
  thumbnail.querySelector('.picture__comments span').textContent = comments.length;

  return thumbnail;
};

// Функция для отображения всех миниатюр
const renderThumbnails = (pictures) => {
  container.addEventListener('click',(evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail){
      return;
    }
    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });
  renderThumbnails(pictures, container);

  // Очищаем контейнер перед добавлением новых миниатюр
  container.innerHTML = '';

  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};

// Экспорт функций
export { getData, renderThumbnails};
