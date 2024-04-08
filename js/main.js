import {createPictures} from './creation-picture.js';
import {getBigPictureData} from './big-picture.js';
import './open-modal.js';
import './form/validate-form.js';
import {getData} from './form/api.js';
import {changePicturesList} from './filter.js';
import './preview.js';

getData((data) => {
  createPictures(data);
  getBigPictureData(data);
  changePicturesList(data);
});

