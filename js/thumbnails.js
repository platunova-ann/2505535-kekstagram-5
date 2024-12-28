
const thumbnailTemplate = document.querySelector('#picture').textContent.querySelector('.picture');
const container = document.querySelector('.picture');

const createThumbnail = ({comments, description, likes,url}) =>{
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('picture_img').scr = url;
  thumbnail.querySelector('picture_img').alt = description;
  thumbnail.querySelector('picture_comments').textContent = comments.ength ;
  thumbnail.querySelector('picture_likes').textContent = likes;
  return(thumbnail);
};

const renderThumbnails = (pictures)=>{
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture)=>{
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);

};
export{renderThumbnails};
//

