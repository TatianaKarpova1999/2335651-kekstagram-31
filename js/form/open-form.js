import {onEscKeydown} from '../open-modal.js';
import {pristine} from './validate-form.js';

const imgUpload = document.querySelector('.img-upload__input');
const editorImg = document.querySelector('.img-upload__overlay');
const editorImgButtonClose = document.querySelector('.img-upload__cancel');
const previewImg = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementContainer = document.querySelector('.img-upload__effect-level');
const imgEditorForm = document.querySelector('.img-upload__form');

imgUpload.addEventListener('change', (evt) => {
  if (evt.target.value) {
    editorImg.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeydown(onFormClose));
  }
});

function onFormClose () {
  editorImg.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgEditorForm.reset();
  pristine.reset();
  previewImg.style.filter = 'none';
  previewImg.style.transform = 'scale(1)';
  sliderElement.classList.add('hidden');
  sliderElementContainer.classList.add('hidden');

  document.removeEventListener('keydown', onEscKeydown(onFormClose));
}

editorImgButtonClose.addEventListener('click', onFormClose);

export{onFormClose};
