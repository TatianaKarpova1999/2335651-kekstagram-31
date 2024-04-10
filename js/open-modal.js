import {isEscapeKey, isEnterKey} from './util.js';
import {onCommentsPartlyLoad} from './picture-comments.js';

const miniPictureNode = document.querySelector('.pictures');
const bigPictureNode = document.querySelector('.big-picture');
const bigPictureCancelNode = document.querySelector('.big-picture__cancel');
const buttonLoaderCommentsNode = document.querySelector('.social__comments-loader');
const commentsListNode = document.querySelector('.social__comments');


const onEscKeydown = (close) => (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    close();
  }
};

function openBigPicture () {
  bigPictureNode.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEscKeydown(onBigPictureClose));
}

function onBigPictureClose () {
  bigPictureNode.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsListNode.innerHTML = '';
  buttonLoaderCommentsNode.classList.remove('hidden');
  buttonLoaderCommentsNode.removeEventListener ('click', onCommentsPartlyLoad);

  document.removeEventListener('keydown', onEscKeydown(onBigPictureClose));
}

miniPictureNode.addEventListener('click', (evt) => {
  if (evt.target.className === 'picture__img') {
    openBigPicture();
  }
});

miniPictureNode.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt) && evt.target.className === 'picture') {
    openBigPicture();
  }
});

bigPictureCancelNode.addEventListener('click', onBigPictureClose);

export{onEscKeydown};
