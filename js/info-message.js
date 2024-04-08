import {isEscapeKey} from './util.js';

const closeInfoMessage = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeButton || isEscapeKey(evt)) {
    existElement.remove();
    document.body.removeEventListener('click', closeInfoMessage);
    document.body.removeEventListener('keydown', closeInfoMessage);
  }
};

const openInfoMessage = (template) => {
  const messageNode = template.cloneNode(true);
  document.body.append(messageNode);
  document.body.addEventListener('click', closeInfoMessage);
  document.body.addEventListener('keydown', closeInfoMessage);
};

export{openInfoMessage};
