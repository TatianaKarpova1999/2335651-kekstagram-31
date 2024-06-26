import {createPictures} from './creation-picture.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;
const PICTURES_COUNT = 10;

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterFormNode = document.querySelector('.img-filters__form');
const filterButtonNode = filterFormNode.querySelectorAll('.img-filters__button');

const switchFilterButton = () => {
  for (const button of filterButtonNode) {
    button.addEventListener('click', function () {
      filterButtonNode.forEach((element) => element.classList.remove('img-filters__button--active'));
      this.classList.add('img-filters__button--active');
    });
  }
};

const createPicturesDebounced = debounce(createPictures, RERENDER_DELAY);

const changePicturesList = (data) => {
  const copyArr = data.slice();
  const pictureListRandom = copyArr;

  filterFormNode.addEventListener('click', (evt) => {
    switch (evt.target.id) {
      case Filters.RANDOM:
        pictureListRandom.sort(() => 0.5 - Math.random());
        createPicturesDebounced(pictureListRandom.slice(0, PICTURES_COUNT));
        break;

      case Filters.DISCUSSED:
        copyArr.sort((a,b) => b.comments.length - a.comments.length);
        createPicturesDebounced(copyArr);
        break;

      default:
        createPicturesDebounced(data);
    }
  });
};

switchFilterButton();

export{changePicturesList};
