import {onCommentsLoad, addСommentsList} from './picture-comments.js';

const bigPicture = document.querySelector('.big-picture__img img');
const miniPictures = document.querySelector('.pictures');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureDescription = document.querySelector('.social__caption');

const commentTotalCount = document.querySelector('.social__comment-total-count');
const commentsList = document.querySelector('.social__comments');

const getBigPictureData = (arr) => {
  miniPictures.addEventListener('click', (evt) => {
    if (evt.target.className === 'picture__img') {
      const dataPictureImg = evt.target;
      const imageId = dataPictureImg.getAttribute('data-id');
      const pictureDescription = arr.find((element) => element.id === parseInt(imageId, 10));

      bigPictureLikes.textContent = pictureDescription.likes;
      bigPicture.src = pictureDescription.url;
      bigPictureDescription.textContent = pictureDescription.description;
      commentTotalCount.textContent = pictureDescription.comments.length;
      addСommentsList(arr, imageId);

      for (let i = 0; i < Array.from(commentsList.childNodes).length; i++) {
        commentsList.childNodes[i].classList.add('hidden');
      }
      onCommentsLoad();
    }
  });
};

export{getBigPictureData};
