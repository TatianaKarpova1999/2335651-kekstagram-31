import {isEscapeKey, isEnterKey} from './util.js';
import {loadCommentsPartly} from './picture-comments.js';

const miniPictureOpenElement = document.querySelector('.pictures');
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

  document.addEventListener('keydown', onEscKeydown(closeBigPicture));
}

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsList.innerHTML = '';
  buttonLoaderComments.classList.remove('hidden');
  buttonLoaderComments.removeEventListener ('click', loadCommentsPartly);

  document.removeEventListener('keydown', onEscKeydown(closeBigPicture));
}

miniPictureOpenElement.addEventListener('click', (evt) => {
  if (evt.target.className === 'picture__img') {
    openBigPicture();
  }
});

miniPictureOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt) && evt.target.className === 'picture') {
    openBigPicture();
  }
});

bigPictureCancelElement.addEventListener('click', closeBigPicture);

export{onEscKeydown};
