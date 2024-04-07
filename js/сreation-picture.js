

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const clearMiniPicturesList = () => {
  const arrMiniPictures = Array.from(pictureList.children);

  arrMiniPictures.forEach((element) => {
    if (element.className === 'picture'){
      element.remove();
    }
  });
};


const сreatePictures = (pictureData) => {
  clearMiniPicturesList();
  const pictureListFragment = document.createDocumentFragment();

  pictureData.forEach(({url, description, likes, comments, id}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.setAttribute('data-id', id);
    pictureImg.src = url;
    pictureElement.setAttribute('data-id', id);
    pictureImg.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;


    pictureListFragment.append(pictureElement);
  });

  pictureList.append(pictureListFragment);
};

export{сreatePictures};
