import { getRandomInteger } from './util.js';
import { getComment } from './comments.js';

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

function addItem(item) {
  data.push(item);
}

// Генерация фото
// Функция для получения описания фотографии
const getPhotoDescription = () => {
  const photoDescription = ['Невероятное', 'Вдохновляющее', 'Амбициозное', 'Возмутительное'];
  return `${photoDescription[getRandomInteger(0, photoDescription.length - 1)]} фото Кекса`;
};

// Функция-генератор объектов фотографии
const getPhoto = () => {
  let previousPhotoId = 0;
  return () => {
    previousPhotoId += 1;
    return {
      id: previousPhotoId,
      url: `photos/${previousPhotoId}.jpg`,
      description: getPhotoDescription(),
      likes: getRandomInteger(15, 200),
      comments: Array.from({length: getRandomInteger(0, 30)}, getComment())
    };
  };
};

export { getPhoto, addItem, data };
