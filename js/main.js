import {сreatePictures} from './сreation-picture.js';
import {getBigPictureData} from './big-picture.js';
import './open-modal.js';
import './form/validate-form.js';
import {getData} from './form/api.js';
import {changePictureList} from './filter.js';
import './preview.js';

getData((data) => {
  сreatePictures(data);
  getBigPictureData(data);
  changePictureList(data);
});

