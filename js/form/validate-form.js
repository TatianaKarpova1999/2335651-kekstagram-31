import {closeForm} from './open-form.js';
import {checkLengthComment, checkHashtags, checkCountHashtags, checkRepeatHashtags} from './functions-validate-form.js';
import {onPictureEffectChange} from '../effects.js';
import {addScaling} from '../scale-control.js';
import {sendData} from './api.js';

const imgEditorForm = document.querySelector('.img-upload__form');
const textComment = imgEditorForm.querySelector('.text__description');
const textHashtags = imgEditorForm.querySelector('.text__hashtags');
const effectsList = document.querySelector('.effects__list');
const submitButtonForm = document.querySelector('.img-upload__submit');

const pristine = new Pristine(imgEditorForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
});


pristine.addValidator(
  textComment,
  checkLengthComment,
  'Длина комментария больше 140 символов'
);

pristine.addValidator(
  textHashtags,
  checkHashtags,
  'Введён невалидный хэштег'
);

pristine.addValidator(
  textHashtags,
  checkCountHashtags,
  'Превышено количество хэштегов'
);

pristine.addValidator(
  textHashtags,
  checkRepeatHashtags,
  'Хэштеги повторяются'
);

const blockSubmitButton = () => {
  submitButtonForm.disabled = true;
};

const unblockSubmitButton = () => {
  submitButtonForm.disabled = false;
};

const setUserFormSubmit = (onSuccess) => {
  imgEditorForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if(isValid){
      const formData = new FormData(evt.target);
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          unblockSubmitButton();
        },
        formData,
      );
    }
  });
};

addScaling();

effectsList.addEventListener('change', onPictureEffectChange);

textComment.addEventListener('keydown', (evt) => evt.stopPropagation());
textHashtags.addEventListener('keydown', (evt) => evt.stopPropagation());

setUserFormSubmit(closeForm);

export{setUserFormSubmit, pristine};
