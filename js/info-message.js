import {isEscapeKey} from './util.js';

const onInfoMessageClose = (evt) => {
  evt.stopPropagation();
  const messageNode = document.querySelector('.success') || document.querySelector('.error');
  const closeButtonNode = messageNode.querySelector('button');
  if (evt.target === messageNode || evt.target === closeButtonNode || isEscapeKey(evt)) {
    messageNode.remove();
    document.body.removeEventListener('click', onInfoMessageClose);
    document.body.removeEventListener('keydown', onInfoMessageClose);
  }
};

const openInfoMessage = (template) => {
  const messageClone = template.cloneNode(true);
  document.body.append(messageClone);
  document.body.addEventListener('click', onInfoMessageClose);
  document.body.addEventListener('keydown', onInfoMessageClose);
};

export{openInfoMessage};
