const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SCALE_STEP = 25;

const scaleControlSmallerNode = document.querySelector('.scale__control--smaller');
const scaleControlBiggerNode = document.querySelector('.scale__control--bigger');
const scaleControlValueNode = document.querySelector('.scale__control--value');
const previewUploadNode = document.querySelector('.img-upload__preview img');

const addScaling = () => {
  scaleControlSmallerNode.addEventListener('click', () => {
    const scaleValueInteger = parseInt(scaleControlValueNode.value, 10);

    if (scaleValueInteger > MIN_SCALE) {
      scaleControlValueNode.value = `${scaleValueInteger - SCALE_STEP }%`;
      previewUploadNode.style.transform = `scale(0.${parseInt(scaleControlValueNode.value, 10)})`;
    }
  });

  scaleControlBiggerNode.addEventListener('click', () => {
    const scaleValueInteger = parseInt(scaleControlValueNode.value, 10);

    if (scaleValueInteger < MAX_SCALE) {
      scaleControlValueNode.value = `${parseInt(scaleControlValueNode.value, 10) + SCALE_STEP }%`;
      previewUploadNode.style.transform = `scale(0.${parseInt(scaleControlValueNode.value, 10)})`;
      if(parseInt(scaleControlValueNode.value, 10) === MAX_SCALE) {
        previewUploadNode.style.transform = 'scale(1)';
      }
    }
  });
};

export{addScaling};
