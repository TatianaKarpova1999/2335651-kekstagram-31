import {сreatePicture} from './сreation-picture.js';
import {getBigPictureData} from './big-picture.js';
import './open-modal.js';
import './validate-form.js';
import {getData} from './api.js';
import {changePictureList} from './picture-filter.js';

getData((data) => {
  сreatePicture(data);
  getBigPictureData(data);
  changePictureList(data);
});

