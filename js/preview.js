const FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif', 'jfif'];

const fileChooserNode = document.querySelector('.img-upload__start input[type=file]');
const previewImgNode = document.querySelector('.img-upload__preview img');
const previewEffectsNode = document.querySelectorAll('.effects__preview');

fileChooserNode.addEventListener('change', () => {
  const file = fileChooserNode.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewImgNode.src = URL.createObjectURL(file);
    previewEffectsNode.forEach((item) => {
      item.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    });
  } else {
    file.reset();
  }
});


