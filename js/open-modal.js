import {isEscapeKey, isEnterKey} from './util.js';
import {onCommentsPartlyLoad} from './picture-comments.js';

const miniPicture = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancelElement = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const buttonLoaderComments = document.querySelector('.social__comments-loader');
const commentsList = document.querySelector('.social__comments');


const onEscKeydown = (close) => (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    close();
  }
};

function openBigPicture () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onEscKeydown(onBigPictureClose));
}

function onBigPictureClose () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsList.innerHTML = '';
  buttonLoaderComments.classList.remove('hidden');
  buttonLoaderComments.removeEventListener ('click', onCommentsPartlyLoad);

  document.removeEventListener('keydown', onEscKeydown(onBigPictureClose));
}

miniPicture.addEventListener('click', (evt) => {
  if (evt.target.className === 'picture__img') {
    openBigPicture();
  }
});

miniPicture.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt) && evt.target.className === 'picture') {
    openBigPicture();
  }
});

bigPictureCancelElement.addEventListener('click', onBigPictureClose);

export{onEscKeydown};
