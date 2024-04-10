import {showAlert} from './util.js';
import {openInfoMessage} from './info-message.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const pictureFilters = document.querySelector('.img-filters');

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
        openInfoMessage(successMessageTemplate);
      } else {
        openInfoMessage(errorMessageTemplate);
        onFail();
      }
    })
    .catch(() => {
      document.body.append(errorMessageTemplate);
      onFail();
    });
};

export{getData, sendData};
