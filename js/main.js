/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
import {renderThumbnails} from './thumbnails.js';
import { getData} from './api.js';

import { showBigPicture } from './big-pictures.js';



// Загрузка данных с сервера и отображение миниатюр
getData()
  .then((data) => {
    // eslint-disable-next-line no-console
    console.log('Данные успешно загружены:', data);
    renderThumbnails(data);
    document.querySelector('.pictures').addEventListener('click', ({target}) => {
      const picture = target.closest('a[class = \'picture\']');
      if (!picture) {
        return;
      }
      showBigPicture(data[picture.dataset.thumbnailsId]);
    });
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Ошибка при загрузке данных:', error.message);
  });

//import{getPictures} from './data.js';
//renderThumbnails(getPictures());


const usedIds = new Set();
const usedUrls = new Set();

const descriptions = [
  'Солнечный день на пляже',
  'Восход солнца в горах',
  'Прекрасный цветок весной',
  'Городская архитектура на закате',
  'Смешные моменты с питомцем',
  'Уютное кафе на углу улицы',
  'Приключения в лесу',
  'Забавные моменты с друзьями',
  'Удивительная природа вокруг',
  'Зимняя сказка с снегом'
];


const users = [
  'Аня',
  'Максим',
  'Ольга',
  'Дмитрий',
  'Елена',
  'Сергей',
  'Ирина',
  'Никита',
  'Татьяна',
  'Александр'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLikes() {
  return getRandomNumber(15, 200); // Случайное число от 15 до 200
}

function getRandomComments(count) {
  const comments = [];
  const commentIds = new Set();

  for (let i = 0; i < count; i++) {
    let commentId;
    do {
      commentId = getRandomNumber(1, 1000); // Генерируем случайный ID для комментария
    } while (commentIds.has(commentId));
    commentIds.add(commentId);

    const user = users[getRandomNumber(0, users.length - 1)];
    const avatarId = getRandomNumber(1, 6);
    const message = messages[getRandomNumber(0, messages.length - 1)];

    comments.push({
      id: commentId,
      avatar: `img/avatar-${avatarId}.svg`,//1
      message: message,
      name: user
    });
  }
  return comments;
}


function createPhotoObject() {
  let id;

  // Генерируем уникальный идентификатор и URL
  do {
    id = getRandomNumber(1, 25); // Генерируем число от 1 до 25
  } while (usedIds.has(id));

  usedIds.add(id); // Добавляем ID в множество использованных
  usedUrls.add(`photos/${id}.jpg`); // Добавляем URL в множество использованных

  const description = descriptions[getRandomNumber(0, descriptions.length - 1)];
  const likes = getRandomLikes();
  const commentsCount = getRandomNumber(0, 30); // От 0 до 30
  const comments = getRandomComments(commentsCount);

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: description,
    likes: likes,
    comments: comments
  };
}

// Пример использования
createPhotoObject();
//renderThumbnails([photo]);

