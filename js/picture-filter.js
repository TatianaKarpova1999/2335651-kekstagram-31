import {сreatePicture} from './сreation-picture.js';
import {debounce} from './util.js';

const filterForm = document.querySelector('.img-filters__form');
const filterButton = filterForm.querySelectorAll('.img-filters__button');
const pictureList = document.querySelector('.pictures');

const RERENDER_DELAY = 2000;
const PICTURES_COUNT = 10;


const getPictureDiscussed = (picture) => {
  picture.sort((a,b) => b.comments.length - a.comments.length);
};

const getPictureRandom = (picture) => {
  picture.sort(() => Math.random() - 0.5);
};

const switcFilterButton = () => {
  for (const button of filterButton) {
    button.addEventListener('click', function () {
      filterButton.forEach((element) => element.classList.remove('img-filters__button--active'));
      this.classList.toggle('img-filters__button--active');
    });
  }
};

const clearMiniPictureList = () => {
  const arrMiniPicture = Array.from(pictureList.children);

  arrMiniPicture.forEach((element) => {
    if (element.className === 'picture'){
      element.remove();
    }
  });
};

const changePictureList = (data) => {
  const COPY_ARR = data.slice();

  filterForm.addEventListener('click', (evt) => {
    if (evt.target.id === 'filter-discussed') {
      clearMiniPictureList();

      getPictureDiscussed(COPY_ARR);

      сreatePicture(COPY_ARR);

      debounce(() => сreatePicture(COPY_ARR), RERENDER_DELAY);

    } else if (evt.target.id === 'filter-default') {
      clearMiniPictureList();

      сreatePicture(data);

      debounce(() => сreatePicture(data), RERENDER_DELAY);

    } else if (evt.target.id === 'filter-random') {
      clearMiniPictureList();

      const pictureListRandom = COPY_ARR.slice(0, PICTURES_COUNT);

      getPictureRandom(pictureListRandom);

      сreatePicture(pictureListRandom);

      debounce(() => сreatePicture(pictureListRandom), RERENDER_DELAY);
    }
  });
};


switcFilterButton();

export{getPictureDiscussed, getPictureRandom, changePictureList};
