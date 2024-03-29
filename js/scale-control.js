const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview img');
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SCALE_STEP = 25;

const addScaling = () => {
  scaleControlSmaller.addEventListener('click', () => {
    const scaleValueInteger = parseInt(scaleControlValue.value, 10);

    if (scaleValueInteger > MIN_SCALE) {
      scaleControlValue.value = `${scaleValueInteger - SCALE_STEP }%`;
      uploadPreview.style.transform = `scale(0.${parseInt(scaleControlValue.value, 10)})`;
    }
  });

  scaleControlBigger.addEventListener('click', () => {
    const scaleValueInteger = parseInt(scaleControlValue.value, 10);

    if (scaleValueInteger < MAX_SCALE) {
      scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) + SCALE_STEP }%`;
      uploadPreview.style.transform = `scale(0.${parseInt(scaleControlValue.value, 10)})`;
      if(parseInt(scaleControlValue.value, 10) === MAX_SCALE) {
        uploadPreview.style.transform = 'none';
      }
    }
  });
};

export{addScaling};
