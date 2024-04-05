const errorMessage = document.querySelector('#data-error').content.querySelector('.data-error');

const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const showAlert = () => {
  document.body.append(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscapeKey, isEnterKey, showAlert, debounce};
