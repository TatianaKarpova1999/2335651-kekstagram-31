import {isEscapeKey} from './util.js';

const onInfoMessageClose = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeButton || isEscapeKey(evt)) {
    existElement.remove();
    document.body.removeEventListener('click', onInfoMessageClose);
    document.body.removeEventListener('keydown', onInfoMessageClose);
  }
};

const openInfoMessage = (template) => {
  const messageNode = template.cloneNode(true);
  document.body.append(messageNode);
  document.body.addEventListener('click', onInfoMessageClose);
  document.body.addEventListener('keydown', onInfoMessageClose);
};

export{openInfoMessage};
