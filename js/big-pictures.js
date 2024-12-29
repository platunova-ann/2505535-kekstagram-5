const bigPictureElement = document.querySelector('.big-picture');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count')
const commentListElement = bigPictureElement.querySelector('.social__comment');
const commentsLoaderElement = bigPictureElement.querySelector('.comments__louder');
const bodyElement = document.querySelector('body');
const cancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('#comment').textContent.querySelector('.social__text');

const createComment = ({avatar,name,message}) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('social__text').textContent = message;

  return comment;
};//

const renderComment = (comments) => {
  commentListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
  commentListElement.append(fragment);

};
const hideBigPicture = () => {
  bigPictureElement.classList.add('hedden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};
function onDocumentKeydown(evt){
  if(evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
};
const cancelButtonElement = () => {
  hideBigPicture()
};

const renderPicturesDetals = ({url, likes, description}) => {
  bigPictureElement.querySelector('.big-picture-img img').src = url;
  bigPictureElement.querySelector('.big-picture-img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('social__caption').textContent =description;
};

const showBigPicture = (data) => {
  bigPictureElement.classLisst.remove('hidden');
  bodyElement.classLisst.add('modal-open');
  commentsLoaderElement.add('hidden');
  commentCountElement.classLisst('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPicturesDetals(data);
  renderComment(data.comments);
};

cancelButtonElement.addEventListener('click',onCancelButtonClick);
 export{showBigPicture}
