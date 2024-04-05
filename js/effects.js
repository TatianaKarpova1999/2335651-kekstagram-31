const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview img');
const sliderElementContainer = document.querySelector('.img-upload__effect-level');

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

noUiSlider.create(sliderElement, DEFAULT_SLIDER);

sliderElement.classList.add('hidden');
sliderElementContainer.classList.add('hidden');

const onPictureEffectChenge = (evt) => {

  const effect = evt.target.value;

  const applyingEffect = PICTURE_EFFECTS[effect];

  sliderElement.noUiSlider.updateOptions(applyingEffect);

  sliderElement.noUiSlider.on('update', () => {
    effectLevelValue.value = sliderElement.noUiSlider.get();

    const PICTURES_STYLE_DATA = {
      none: 'none',
      chrome: `grayscale(${effectLevelValue.value})`,
      sepia: `sepia(${effectLevelValue.value})`,
      marvin: `invert(${effectLevelValue.value}%)`,
      phobos: `blur(${effectLevelValue.value}px)`,
      heat: `brightness(${effectLevelValue.value})`
    };

    imgPreview.style.filter = PICTURES_STYLE_DATA[effect];
  });

  if (effect === 'none') {
    sliderElement.classList.add('hidden');
    sliderElementContainer.classList.add('hidden');
  } else {
    sliderElement.classList.remove('hidden');
    sliderElementContainer.classList.remove('hidden');
  }
};

export{onPictureEffectChenge};
