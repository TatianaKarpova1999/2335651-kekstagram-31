import {commentsLoad, addCommentsList} from './picture-comments.js';

const bigPictureNode = document.querySelector('.big-picture__img img');
const miniPicturesNode = document.querySelector('.pictures');
const bigPictureLikesNode = document.querySelector('.likes-count');
const bigPictureDescriptionNode = document.querySelector('.social__caption');

const commentTotalCountNode = document.querySelector('.social__comment-total-count');
const commentsListNode = document.querySelector('.social__comments');

const getBigPictureData = (arr) => {
  miniPicturesNode.addEventListener('click', (evt) => {
    if (evt.target.className === 'picture__img') {
      const dataPictureImg = evt.target;
      const imageId = dataPictureImg.getAttribute('data-id');
      const pictureDescription = arr.find((element) => element.id === parseInt(imageId, 10));

      bigPictureLikesNode.textContent = pictureDescription.likes;
      bigPictureNode.src = pictureDescription.url;
      bigPictureDescriptionNode.textContent = pictureDescription.description;
      commentTotalCountNode.textContent = String(pictureDescription.comments.length);
      addCommentsList(arr, imageId);

      for (let i = 0; i < Array.from(commentsListNode.childNodes).length; i++) {
        commentsListNode.childNodes[i].classList.add('hidden');
      }
      commentsLoad();
    }
  });
};

export{getBigPictureData};
