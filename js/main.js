import {сreatePicture} from './сreation-picture.js';
import {getBigPictureData} from './big-picture.js';
import './open-modal.js';
import './validate-form.js';
import {getData} from './api.js';
import {getPictureDiscussed, getPictureRandom} from './picture-filter.js';

const filterForm = document.querySelector('.img-filters__form');
const pictureList = document.querySelector('.pictures');

getData((data) => {
  сreatePicture(data);
  getBigPictureData(data);

  const copyArr = data.slice();

  filterForm.addEventListener('click', (evt) => {
    const arrMiniPicture = Array.from(pictureList.children);
    if (evt.target.id === 'filter-discussed') {
      arrMiniPicture.forEach((element) => {
        if (element.className === 'picture'){
          element.remove();
        }
      });
      getPictureDiscussed(copyArr);
      сreatePicture(copyArr);
    } else if (evt.target.id === 'filter-default') {
      arrMiniPicture.forEach((element) => {
        if (element.className === 'picture'){
          element.remove();
        }
      });
      сreatePicture(data);
    } else if (evt.target.id === 'filter-random') {
      arrMiniPicture.forEach((element) => {
        if (element.className === 'picture'){
          element.remove();
        }
      });
      getPictureRandom(copyArr);
      сreatePicture(copyArr);
    }
  });
});

