import {onEscKeydown} from '../open-modal.js';
import {pristine} from './validate-form.js';

const imgUploadNode = document.querySelector('.img-upload__input');
const editorPictureNode = document.querySelector('.img-upload__overlay');
const buttonCloseNode = document.querySelector('.img-upload__cancel');
const previewImgNode = document.querySelector('.img-upload__preview img');
const sliderNode = document.querySelector('.effect-level__slider');
const sliderElementContainerNode = document.querySelector('.img-upload__effect-level');
const imgEditorFormNode = document.querySelector('.img-upload__form');

imgUploadNode.addEventListener('change', (evt) => {
  if (evt.target.value) {
    editorPictureNode.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeydown(onFormClose));
  }
});

function onFormClose () {
  editorPictureNode.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgEditorFormNode.reset();
  pristine.reset();
  previewImgNode.style.filter = 'none';
  previewImgNode.style.transform = 'scale(1)';
  sliderNode.classList.add('hidden');
  sliderElementContainerNode.classList.add('hidden');

  document.removeEventListener('keydown', onEscKeydown(onFormClose));
}

buttonCloseNode.addEventListener('click', onFormClose);

export{onFormClose};
