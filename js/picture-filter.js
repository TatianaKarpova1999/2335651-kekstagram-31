
const filterForm = document.querySelector('.img-filters__form');
const filterButton = filterForm.querySelectorAll('.img-filters__button');


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

switcFilterButton();

export{getPictureDiscussed, getPictureRandom};
