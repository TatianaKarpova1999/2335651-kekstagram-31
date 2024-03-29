import {сreatePicture} from './сreation-picture.js';
import {getBigPictureData} from './big-picture.js';
import './open-modal.js';
import './validate-form.js';
import {getData} from './api.js';

getData((data) => {
  сreatePicture(data);
  getBigPictureData(data);
});
