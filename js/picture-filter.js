import {сreatePicture} from './сreation-picture.js';
import {debounce} from './util.js';

const filterForm = document.querySelector('.img-filters__form');
const filterButton = filterForm.querySelectorAll('.img-filters__button');
const pictureList = document.querySelector('.pictures');

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const RERENDER_DELAY = 500;
const PICTURES_COUNT = 10;

const switcFilterButton = () => {
  for (const button of filterButton) {
    button.addEventListener('click', function () {
      filterButton.forEach((element) => element.classList.remove('img-filters__button--active'));
      this.classList.add('img-filters__button--active');
    });
  }
};

const createPicturesDebounced = debounce(сreatePicture, RERENDER_DELAY);

const clearMiniPictureList = () => {
  const arrMiniPictures = Array.from(pictureList.children);

  arrMiniPictures.forEach((element) => {
    if (element.className === 'picture'){
      element.remove();
    }
  });
};


const changePictureList = (data) => {
  const copyArr = data.slice();
  const pictureListRandom = copyArr.slice(0, PICTURES_COUNT);

  filterForm.addEventListener('click', (evt) => {
    switch (evt.target.id) {
      case Filters.RANDOM:
        clearMiniPictureList();
        pictureListRandom.sort(() => Math.random() - 0.5);
        createPicturesDebounced(pictureListRandom);
        break;

      case Filters.DISCUSSED:
        clearMiniPictureList();
        copyArr.sort((a,b) => b.comments.length - a.comments.length);
        createPicturesDebounced(copyArr);
        break;

      default:
        clearMiniPictureList();
        createPicturesDebounced(data);
    }
  });
};

switcFilterButton();

export{changePictureList};
