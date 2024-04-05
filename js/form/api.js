import {showAlert, isEscapeKey} from '../util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const pictureFilters = document.querySelector('.img-filters');

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const closeMessage = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeButton || isEscapeKey(evt)) {
    existElement.remove();
    document.body.removeEventListener('click', closeMessage);
    document.body.removeEventListener('keydown', closeMessage);
  }
};

const openMessage = (template) => {
  const messageNode = template.cloneNode(true);
  document.body.append(messageNode);
  document.body.addEventListener('click', closeMessage);
  document.body.addEventListener('keydown', closeMessage);
};

const getData = (onSuccess) => {
  fetch(`${BASE_URL}${route.GET_DATA}`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
      pictureFilters.classList.remove('img-filters--inactive');
    })
    .catch(() => showAlert());
};

const sendData = (onSuccess, onFail, body) => {
  fetch (`${BASE_URL}${route.SEND_DATA}`,
    {
      method: 'POST',
      body: body,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        openMessage(successMessageTemplate);
      } else {
        openMessage(errorMessageTemplate);
        onFail();
      }
    })
    .catch(() => {
      document.body.append(errorMessageTemplate);
      onFail();
    });
};

export{getData, sendData};
