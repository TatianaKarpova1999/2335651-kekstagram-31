const errorMessage = document.querySelector('#data-error').content.querySelector('.data-error');
const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomNumberCommentsCount = () => getRandomInteger(0, 20);
const getRandomNumberAvatars = () => getRandomInteger(1, 6);
const getRandomNumberLikes = () => getRandomInteger(15, 200);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const showAlert = () => {
  document.body.append(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, ALERT_SHOW_TIME);
};


export {getRandomNumberAvatars, getRandomNumberLikes, getRandomArrayElement, getRandomNumberCommentsCount, isEscapeKey, isEnterKey, showAlert};
