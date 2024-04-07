import {сreatePictures} from './сreation-picture.js';
import {debounce} from './util.js';

const filterForm = document.querySelector('.img-filters__form');
const filterButton = filterForm.querySelectorAll('.img-filters__button');

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

const createPicturesDebounced = debounce(сreatePictures, RERENDER_DELAY);

const changePicturesList = (data) => {
  const copyArr = data.slice();
  const pictureListRandom = copyArr;

  filterForm.addEventListener('click', (evt) => {
    switch (evt.target.id) {
      case Filters.RANDOM:
        pictureListRandom.sort(() => 0.5 - Math.random());
        createPicturesDebounced(pictureListRandom.slice(0, PICTURES_COUNT));
        break;

      case Filters.DISCUSSED:
        // clearMiniPicturesList();
        copyArr.sort((a,b) => b.comments.length - a.comments.length);
        createPicturesDebounced(copyArr);
        break;

      default:
        // clearMiniPicturesList();
        createPicturesDebounced(data);
    }
  });
};

switcFilterButton();

export{changePicturesList};
