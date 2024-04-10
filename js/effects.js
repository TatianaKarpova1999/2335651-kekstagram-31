const DEFAULT_SLIDER = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value)
      ? value.toFixed(0)
      : value.toFixed(1),
    from: (value) => parseFloat(value),
  }
};


const PICTURE_EFFECTS = {
  none: {},
  chrome: {
    range: { min: 0, max: 1},
    start: 1,
    step: 0.1
  },
  sepia: {
    range: { min: 0, max: 1},
    start: 1,
    step: 0.1
  },
  marvin: {
    range: { min: 0, max: 100},
    start: 100,
    step: 1
  },
  phobos: {
    range: { min: 0, max: 3},
    start: 3,
    step: 0.1
  },
  heat: {
    range: { min: 1, max: 3},
    start: 3,
    step: 0.1
  }
};

const PICTURES_STYLE_DATA = {
  none: 'none',
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness'
};

const sliderNode = document.querySelector('.effect-level__slider');
const effectLevelValueNode = document.querySelector('.effect-level__value');
const previewImgNode = document.querySelector('.img-upload__preview img');
const sliderElementContainerNode = document.querySelector('.img-upload__effect-level');

noUiSlider.create(sliderNode, DEFAULT_SLIDER);

sliderNode.classList.add('hidden');
sliderElementContainerNode.classList.add('hidden');

const onPictureEffectChange = (evt) => {

  const effect = evt.target.value;

  const applyingEffect = PICTURE_EFFECTS[effect];

  sliderNode.noUiSlider.updateOptions(applyingEffect);

  sliderNode.noUiSlider.on('update', () => {
    effectLevelValueNode.value = sliderNode.noUiSlider.get();

    function effectPicture(value) {
      if (effect === 'marvin') {
        return `${PICTURES_STYLE_DATA[effect]}(${value}%)`;
      } else if (effect === 'phobos') {
        return `${PICTURES_STYLE_DATA[effect]}(${value}px)`;
      }

      return `${PICTURES_STYLE_DATA[effect]}(${value})`;
    }

    previewImgNode.style.filter = effectPicture(effectLevelValueNode.value);
  });

  if (effect === 'none') {
    previewImgNode.style.filter = PICTURES_STYLE_DATA[effect];
    sliderNode.classList.add('hidden');
    sliderElementContainerNode.classList.add('hidden');
  } else {
    sliderNode.classList.remove('hidden');
    sliderElementContainerNode.classList.remove('hidden');
  }
};

export{onPictureEffectChange};
