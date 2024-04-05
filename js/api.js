import {showAlert, isEscapeKey} from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
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
  fetch (`${BASE_URL}${route.SEND_DTA}`,
    {
      method: 'POST',
      body: body,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        openMessage(successTemplate);
      } else {
        openMessage(errorTemplate);
        onFail();
      }
    })
    .catch(() => {
      document.body.append(errorTemplate);
      onFail();
    });
};

export{getData, sendData};
