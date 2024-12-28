/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
const SERVER_URL = 'https://29.javascript.htmlacademy.pro/kekstagram';

const Paths = {
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
const getData = () => loadData(Paths.GET_DATA, ErrorMessages.GET_DATA);
getData()
  .then((data) => {
    console.log('Данные успешно загружены:', data);
    // Здесь можно обработать данные, например, отобразить их на странице
    renderImages(data);
  })
  .catch((error) => {
    console.error('Ошибка при загрузке данных:', error.message);
  });

// Функция для отображения изображений на странице
const renderImages = (images) => {
  const container = document.createElement('div');
  container.classList.add('images-container');

  images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image.url;
    imgElement.alt = `Изображение ${image.id}`;
    imgElement.classList.add('image');

    const likesElement = document.createElement('p');
    likesElement.textContent = `Лайков: ${image.likes}`;

    const commentsElement = document.createElement('div');
    commentsElement.classList.add('comments');
    image.comments.forEach((comment) => {
      const commentElement = document.createElement('p');
      commentElement.textContent = `${comment.name}: ${comment.message}`;
      commentsElement.appendChild(commentElement);
    });

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(likesElement);
    imageContainer.appendChild(commentsElement);

    container.appendChild(imageContainer);
  });

  document.body.appendChild(container);
};

export { getData };
