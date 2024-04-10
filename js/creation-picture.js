
const pictureListNode = document.querySelector('.pictures');
const pictureTemplateNode = document.querySelector('#picture').content.querySelector('.picture');

const clearMiniPicturesList = () => {
  const arrMiniPictures = Array.from(pictureListNode.children);

  arrMiniPictures.forEach((element) => {
    if (element.className === 'picture'){
      element.remove();
    }
  });
};


const createPictures = (pictureData) => {
  clearMiniPicturesList();
  const pictureListFragment = document.createDocumentFragment();

  pictureData.forEach(({url, description, likes, comments, id}) => {
    const pictureElement = pictureTemplateNode.cloneNode(true);
    const pictureNode = pictureElement.querySelector('.picture__img');
    pictureNode.setAttribute('data-id', id);
    pictureNode.src = url;
    pictureElement.setAttribute('data-id', id);
    pictureNode.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;


    pictureListFragment.append(pictureElement);
  });

  pictureListNode.append(pictureListFragment);
};

export{createPictures};
