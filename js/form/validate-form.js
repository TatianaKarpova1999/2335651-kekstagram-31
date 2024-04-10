import {onFormClose} from './open-form.js';
import {checkLengthComment, checkHashtags, checkCountHashtags, checkRepeatHashtags} from './functions-validate-form.js';
import {onPictureEffectChange} from '../effects.js';
import {addScaling} from '../scale-control.js';
import {sendData} from '../api.js';

const imgEditorFormNode = document.querySelector('.img-upload__form');
const descriptionNode = imgEditorFormNode.querySelector('.text__description');
const hashtagsNode = imgEditorFormNode.querySelector('.text__hashtags');
const effectsListNode = document.querySelector('.effects__list');
const formSubmitNode = document.querySelector('.img-upload__submit');

const pristine = new Pristine(imgEditorFormNode, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
});


pristine.addValidator(
  descriptionNode,
  checkLengthComment,
  'Длина комментария больше 140 символов'
);

pristine.addValidator(
  hashtagsNode,
  checkHashtags,
  'Введён невалидный хэштег'
);

pristine.addValidator(
  hashtagsNode,
  checkCountHashtags,
  'Превышено количество хэштегов'
);

pristine.addValidator(
  hashtagsNode,
  checkRepeatHashtags,
  'Хэштеги повторяются'
);

const blockSubmitButton = () => {
  formSubmitNode.disabled = true;
};

const unblockSubmitButton = () => {
  formSubmitNode.disabled = false;
};

const setUserFormSubmit = (onSuccess) => {
  imgEditorFormNode.addEventListener('submit', (evt) => {
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

effectsListNode.addEventListener('change', onPictureEffectChange);

descriptionNode.addEventListener('keydown', (evt) => evt.stopPropagation());
hashtagsNode.addEventListener('keydown', (evt) => evt.stopPropagation());

setUserFormSubmit(onFormClose);

export{setUserFormSubmit, pristine};
