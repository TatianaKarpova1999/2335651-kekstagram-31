import {onEscKeydown} from './open-modal.js';
import {pristine} from './validate-form.js';

const uploadImg = document.querySelector('.img-upload__input');
const editorImg = document.querySelector('.img-upload__overlay');
const imgUploadCancell = document.querySelector('.img-upload__cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadPreview = document.querySelector('.img-upload__preview');
const uploadPreviewImg = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const containerSliderElement = document.querySelector('.img-upload__effect-level');
const imgEditorForm = document.querySelector('.img-upload__form');

uploadImg.addEventListener('change', (evt) => {
  if (evt.target.value) {
    editorImg.classList.remove('hidden');
    document.body.classList.add('modal-open');

    document.addEventListener('keydown', onEscKeydown(closeForm));
  }
});


function closeForm () {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgEditorForm.reset();
  pristine.reset();
  uploadPreview.style.filter = 'none';
  uploadPreviewImg.style.transform = 'none';
  sliderElement.classList.add('hidden');
  containerSliderElement.classList.add('hidden');

  document.removeEventListener('keydown', onEscKeydown(closeForm));
}

imgUploadCancell.addEventListener('click', closeForm);

export{closeForm};
