import {showAlert} from './util.js';
import {isEscapeKey} from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = document.querySelector('#success').content.querySelector('.success__button');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = document.querySelector('#error').content.querySelector('.error__button');
const pictureFilters = document.querySelector('.img-filters');

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const onSuccessMessageClose = (template, button) => {
  button.addEventListener('click', () => template.remove());
  template.addEventListener('click', (evt) => {
    if (evt.target.className === 'success' || evt.target.className === 'error') {
      template.remove();
    }
  });
  document.body.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      template.remove();
      evt.stopPropagation();
    }
  });
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
        document.body.append(successTemplate);
        onSuccessMessageClose(successTemplate, successButton);
      } else {
        document.body.append(errorTemplate);
        onSuccessMessageClose(errorTemplate, errorButton);
        onFail();
      }
    })
    .catch(() => {
      document.body.append(errorTemplate);
      onSuccessMessageClose(errorTemplate, errorButton);
      onFail();
    });
};

export{getData, sendData, onSuccessMessageClose};
