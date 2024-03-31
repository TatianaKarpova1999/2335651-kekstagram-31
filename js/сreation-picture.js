

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const сreatePicture = (generatesPictureData) => {
  const pictureListFragment = document.createDocumentFragment();

  generatesPictureData.forEach(({url, description, likes, comments, id}) => {
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

export{сreatePicture};
