import {showAlert} from './util.js';
import {openInfoMessage} from './info-message.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const successMessageTemplateNode = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplateNode = document.querySelector('#error').content.querySelector('.error');
const pictureFiltersNode = document.querySelector('.img-filters');

const getData = (onSuccess) => {
  fetch(`${BASE_URL}${route.GET_DATA}`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
      pictureFiltersNode.classList.remove('img-filters--inactive');
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
        openInfoMessage(successMessageTemplateNode);
      } else {
        openInfoMessage(errorMessageTemplateNode);
        onFail();
      }
    })
    .catch(() => {
      document.body.append(errorMessageTemplateNode);
      onFail();
    });
};

export{getData, sendData};
